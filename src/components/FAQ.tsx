'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Quais equipamentos são atendidos?',
      a: 'Atendemos ar-condicionado (todas as capacidades), geladeiras, freezers, cervejeiras, expositores refrigerados e bebedouros industriais.',
    },
    {
      q: 'Vocês atendem residências e empresas?',
      a: 'Sim! Temos soluções tanto para o conforto da sua casa quanto para manter o funcionamento da sua empresa ou comércio.',
    },
    {
      q: 'O atendimento é realizado a domicílio?',
      a: 'Sim, realizamos o diagnóstico e o conserto no local (na sua casa ou empresa) para sua maior comodidade.',
    },
    {
      q: 'Como solicitar um orçamento?',
      a: 'Basta preencher o formulário nesta página ou nos chamar diretamente no WhatsApp descrevendo o problema.',
    },
    {
      q: 'Quanto custa o serviço?',
      a: 'Os valores variam de acordo com o equipamento e o defeito. Mediante visita técnica, passamos o orçamento exato antes de qualquer execução.',
    },
    {
      q: 'Vocês atendem em cidades vizinhas?',
      a: 'Nosso foco principal é Patos de Minas, mas atendemos a região sob consulta de taxa de deslocamento.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-[#0B1E36] mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-slate-600">
              Tire suas dúvidas antes de entrar em contato. Se ainda precisar de
              ajuda, é só enviar sua solicitação.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden h-fit"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-[#0B1E36] text-sm pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
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
