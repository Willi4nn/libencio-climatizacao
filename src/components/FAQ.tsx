'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Quais equipamentos são atendidos?',
      answer:
        'Atendemos ar-condicionado (todas as capacidades), geladeiras, freezers, cervejeiras, expositores refrigerados e bebedouros industriais.',
    },
    {
      question: 'Vocês atendem residências e empresas?',
      answer:
        'Sim! Temos soluções tanto para o conforto da sua casa quanto para manter o funcionamento da sua empresa ou comércio.',
    },
    {
      question: 'O atendimento é realizado a domicílio?',
      answer:
        'Sim, realizamos o diagnóstico e o conserto no local (na sua casa ou empresa) para sua maior comodidade.',
    },
    {
      question: 'Como solicitar um orçamento?',
      answer:
        'Basta preencher o formulário nesta página ou nos chamar diretamente no WhatsApp descrevendo o problema.',
    },
    {
      question: 'Quanto custa o serviço?',
      answer:
        'Os valores variam de acordo com o equipamento e o defeito. Mediante visita técnica, passamos o orçamento exato antes de qualquer execução.',
    },
    {
      question: 'Vocês atendem em cidades vizinhas?',
      answer:
        'Nosso foco principal é Patos de Minas, mas atendemos a região sob consulta de taxa de deslocamento.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <p className="eyebrow mb-4">Dúvidas comuns</p>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#071a33] sm:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-slate-600">
              Tire suas dúvidas antes de entrar em contato. Se ainda precisar de
              ajuda, é só enviar sua solicitação.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 lg:w-2/3">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left focus:outline-none"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="pr-4 text-sm font-bold text-[#071a33] sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#0876e8] transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
