import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({ rating: 5.0, count: 40, source: 'fallback' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Google Places API status: ${response.status}`);
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({
        rating: data.rating ?? 5.0,
        count: data.userRatingCount ?? 40,
        source: 'google',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control':
            'public, s-maxage=43200, stale-while-revalidate=86400',
        },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ rating: 5.0, count: 40, source: 'fallback' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
