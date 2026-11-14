import { useEffect, useState } from 'react';

interface GoogleRatingData {
  rating: number;
  count: number;
}

const FALLBACK_DATA: GoogleRatingData = {
  rating: 5.0,
  count: 40,
};

let cachedData: GoogleRatingData | null = null;
let fetchPromise: Promise<GoogleRatingData> | null = null;

async function fetchGoogleRating(): Promise<GoogleRatingData> {
  if (cachedData) return cachedData;

  if (!fetchPromise) {
    fetchPromise = fetch('/api/google-reviews')
      .then((res) => (res.ok ? res.json() : FALLBACK_DATA))
      .then((data) => {
        cachedData = {
          rating:
            typeof data.rating === 'number'
              ? data.rating
              : FALLBACK_DATA.rating,
          count:
            typeof data.count === 'number' ? data.count : FALLBACK_DATA.count,
        };
        return cachedData;
      })
      .catch(() => FALLBACK_DATA);
  }

  return fetchPromise;
}

export function useGoogleRating() {
  const [data, setData] = useState<GoogleRatingData>(
    cachedData ?? FALLBACK_DATA
  );

  useEffect(() => {
    let active = true;

    fetchGoogleRating().then((result) => {
      if (active) setData(result);
    });

    return () => {
      active = false;
    };
  }, []);

  const formattedRating = data.rating.toFixed(1).replace('.', ',');

  return {
    rating: data.rating,
    formattedRating,
    count: data.count,
  };
}
