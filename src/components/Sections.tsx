'use client';
import {
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  MapPin,
  MessageCircle,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const slides = [
    {
      badge: '5,0 no Google · 35 avaliações',
      titleHighlight: 'parado?',
      titleNormal: 'Geladeira com defeito ou ar-condicionado ',
      description:
        'O Libêncio resolve a domicílio. Marque o aparelho na ordem de serviço e mande direto no WhatsApp dele, já com o defeito descrito.',
      image: '/images/hero-bg.jpg',
      tag: 'Atendimento a Domicílio',
    },
    {
      badge: 'Especialista em Frost Free',
      titleHighlight: 'especialidade!',
      titleNormal: 'Conserto de geladeiras e Frost Free é nossa ',
      description:
        'Sua geladeira parou de gelar na parte de baixo? Diagnóstico preciso, peças de qualidade e atendimento rápido em Patos de Minas.',
      image:
        'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=2069&auto=format&fit=crop',
      tag: 'Linha Branca',
    },
    {
      badge: 'Instalação & Manutenção',
      titleHighlight: 'perfeito',
      titleNormal: 'Ar-condicionado Split com acabamento ',
      description:
        'Instalação padrão com bomba de vácuo, limpeza profunda (higienização) e infraestrutura completa para residências e empresas.',
      image:
        'https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop',
      tag: 'Climatização',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative pt-20 lg:pt-0 lg:mt-20 bg-[#0B1E36] text-white overflow-hidden lg:h-160 flex items-center">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden opacity-30 lg:opacity-100 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1E36] via-[#0B1E36]/40 to-transparent lg:z-10"></div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-0'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt="Serviços de Refrigeração Libêncio"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-20 py-12 lg:py-0">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5 bg-[#0A1629]/70 w-fit px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm shadow-md">
            {currentSlide === 0 ? (
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            ) : (
              <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
            )}
            <span className="text-white font-bold text-sm tracking-wide">
              {slides[currentSlide].badge}
            </span>
          </div>

          <div className="mb-8 min-h-42.5 lg:min-h-47.5 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-4 text-white transition-all duration-300">
              {slides[currentSlide].titleNormal}{' '}
              <span className="text-[#00B4D8]">
                {slides[currentSlide].titleHighlight}
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed transition-all duration-300">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#form"
              className="bg-[#0066CC] hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-md text-center transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              Preencher a OS
            </a>
            <a
              href="https://wa.me/5534991565849"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent border border-slate-400 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md text-center transition-colors flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:text-green-400 transition-colors" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-slate-400 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00B4D8]" />
              <p>
                Atendimento em Patos de Minas ·{' '}
                <span className="text-white font-semibold">
                  Seg a Sáb, 8h às 18h
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="flex gap-1.5 mr-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-6 bg-[#00B4D8]'
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0066CC] text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0066CC] text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4">
              Do que esquenta ao que tem que gelar
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Oferecemos soluções completas separadas por vias especializadas
              para atender com rapidez e precisão o seu equipamento.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 bg-slate-100 relative rounded-t-xl overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Ar-condicionado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-10 grow flex flex-col rounded-b-xl">
                <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wider mb-1">
                  Via 2
                </span>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-4">
                  Ar-condicionado
                </h3>
                <ul className="space-y-2.5 mb-8 grow">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Instalação
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Manutenção
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Limpeza e higienização
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Infraestrutura
                  </li>
                </ul>
                <a
                  href="#form"
                  className="w-full bg-[#0066CC] hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Solicitar atendimento <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 relative">
              <div className="absolute top-4 right-4 bg-[#00B4D8] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 flex flex-col items-center shadow-md leading-tight">
                <span>Frost Free</span>
                <span className="font-normal text-[10px]">destaque na bio</span>
              </div>
              <div className="h-40 bg-slate-100 relative rounded-t-xl overflow-hidden">
                <img
                  src="/images/servico-geladeira.jpg"
                  alt="Geladeira"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-40 -mt-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                <Refrigerator className="w-6 h-6 text-[#0066CC]" />
              </div>
              <div className="p-6 pt-10 grow flex flex-col rounded-b-xl">
                <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wider mb-1">
                  Via 1
                </span>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-4">
                  Geladeiras e Refrigeração
                </h3>
                <ul className="space-y-2.5 mb-8 grow">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Geladeiras Frost Free e comuns
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Freezers e Cervejeiras
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Expositores refrigerados
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0066CC] mt-0.5 shrink-0" />{' '}
                    Bebedouros industriais
                  </li>
                </ul>
                <a
                  href="#form"
                  className="w-full bg-[#0066CC] hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Solicitar atendimento <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#0B1E36] to-[#142e52] text-white rounded-xl shadow-lg border border-blue-900 flex flex-col justify-between p-6">
              <div>
                <span className="bg-[#00B4D8] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                  Especialidade
                </span>
                <h3 className="text-2xl font-black mb-4">
                  Geladeira Frost Free com defeito?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  É o que o Libêncio mais destaca. Marque na OS o modelo e o que
                  ela está fazendo para receber um diagnóstico rápido.
                </p>
              </div>
              <a
                href="#form"
                className="w-full bg-[#00B4D8] hover:bg-cyan-400 text-[#0B1E36] font-bold py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Marcar Frost Free na OS <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuemAtende() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[#0066CC] font-bold tracking-widest text-xs uppercase mb-3 block">
              Profissional Verificado
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4">
              Libêncio Pereira
            </h2>
            <p className="text-slate-500 font-medium text-lg mb-6">
              Técnico em refrigeração e climatização em Patos de Minas - MG.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Conserta geladeira, freezer, cervejeira e expositor, e faz
              instalação, limpeza, infraestrutura e manutenção de
              ar-condicionado. Vai até a casa ou o comércio com agilidade e
              compromisso.
            </p>
            <blockquote className="border-l-4 border-[#00B4D8] pl-4 italic text-slate-700 font-medium my-4">
              “Atendimento a domicílio, rápido e com preço justo!”{' '}
              <span className="block text-xs text-slate-400 not-italic mt-1">
                — Libêncio, no Instagram
              </span>
            </blockquote>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
              <Clock className="w-8 h-8 text-[#0066CC] mb-3" />
              <h4 className="font-bold text-slate-800 text-sm">Horário</h4>
              <p className="text-slate-600 text-xs mt-1">
                Seg a Sáb, 8h às 18h
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
              <ShieldCheck className="w-8 h-8 text-[#0066CC] mb-3" />
              <h4 className="font-bold text-slate-800 text-sm">Pagamento</h4>
              <p className="text-slate-600 text-xs mt-1">
                Débito, crédito e PIX
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
              <MapPin className="w-8 h-8 text-[#0066CC] mb-3" />
              <h4 className="font-bold text-slate-800 text-sm">Cidade</h4>
              <p className="text-slate-600 text-xs mt-1">Patos de Minas, MG</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
              <Check className="w-8 h-8 text-[#0066CC] mb-3" />
              <h4 className="font-bold text-slate-800 text-sm">Modalidade</h4>
              <p className="text-slate-600 text-xs mt-1">
                Atendimento a Domicílio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Atendimento() {
  return (
    <section
      id="atendimento"
      className="py-20 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-6 leading-tight">
              Atendimento residencial
              <br />e empresarial
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Seja em casa ou no seu negócio, conte com um profissional
              preparado para atender suas necessidades de refrigeração e
              climatização.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-[#0066CC]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1E36] mb-6">
                Residências
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-600">
                    Ar-condicionado (instalação, limpeza e manutenção)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-600">
                    Geladeiras e refrigeradores Frost Free
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-600">
                    Freezers e cervejeiras residenciais
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-[#0B1E36]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1E36] mb-6">
                Empresas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-600">
                    Equipamentos de refrigeração comercial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-600">
                    Ar-condicionado de ambientes profissionais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-600">
                    Freezers, cervejeiras e expositores
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Galeria() {
  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] font-bold tracking-widest text-xs mb-3 uppercase">
            Portfólio Real
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4">
            Do jeito que ficou na casa do cliente
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Fotos de instalações e serviços executados em Patos de Minas (Splits
            na varanda, condensadoras em lajes e infraestruturas).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-70">
          <div className="group relative overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 shadow-sm border border-slate-100 bg-slate-100">
            <img
              src="https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Split na varanda"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1E36]/90 via-[#0B1E36]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 lg:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="bg-[#0066CC] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3 inline-block shadow-lg">
                Split na varanda
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Instalação Residencial
              </h3>
              <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Acabamento impecável e alinhamento perfeito.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-slate-100">
            <img
              src="https://seupaschoal.blog.br/wp-content/uploads/2024/11/shutterstock_1830104189-1024x683.jpg"
              alt="Condensadora instalada"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1E36]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="bg-[#00B4D8] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block shadow-md">
                Externo
              </span>
              <h3 className="text-lg font-bold text-white">
                Condensadora instalada
              </h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-slate-100">
            <img
              src="https://www.gomezengenharia.com.br/imagens/informacoes/ar-condicionado-salao-comercial-01.webp"
              alt="Sala comercial"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1E36]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="bg-[#0066CC] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block shadow-md">
                Comercial
              </span>
              <h3 className="text-lg font-bold text-white">Sala comercial</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl sm:col-span-2 shadow-sm border border-slate-100 bg-slate-100">
            <img
              src="https://thumbs.dreamstime.com/b/fila-de-unidades-ar-condicionado-industrial-instaladas-no-exterior-um-edif%C3%ADcio-465083010.jpg"
              alt="Infraestrutura"
              className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1E36]/90 via-[#0B1E36]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="bg-slate-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block shadow-md">
                Infraestrutura
              </span>
              <h3 className="text-xl font-bold text-white">
                Várias unidades na laje e corredores
              </h3>
              <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1">
                Organização e segurança em tubulações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-[#0066CC] font-bold tracking-widest text-xs mb-2 uppercase">
            Passo a Passo
          </p>
          <h2 className="text-3xl font-bold text-[#0B1E36] mb-3">
            Da OS ao aparelho funcionando
          </h2>
          <p className="text-slate-500 text-lg">
            Solicitar seu atendimento é simples, rápido e vai direto para o
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div className="w-12 h-12 bg-[#0066CC] rounded-xl flex items-center justify-center text-white text-lg font-black mb-6 shadow-md">
              01
            </div>
            <div>
              <h4 className="font-bold text-[#0B1E36] text-lg mb-2">
                Marca o aparelho
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Geladeira, freezer, Frost Free, ar-condicionado. Conte o que ele
                está fazendo.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div className="w-12 h-12 bg-[#0066CC] rounded-xl flex items-center justify-center text-white text-lg font-black mb-6 shadow-md">
              02
            </div>
            <div>
              <h4 className="font-bold text-[#0B1E36] text-lg mb-2">
                Manda no WhatsApp
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                A OS chega pronta no WhatsApp do Libêncio, (34) 99156-5849.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div className="w-12 h-12 bg-[#0066CC] rounded-xl flex items-center justify-center text-white text-lg font-black mb-6 shadow-md">
              03
            </div>
            <div>
              <h4 className="font-bold text-[#0B1E36] text-lg mb-2">
                Combina o dia
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                De segunda a sábado, das 8h às 18h. Alinhamento prático de
                horários.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div className="w-12 h-12 bg-[#0066CC] rounded-xl flex items-center justify-center text-white text-lg font-black mb-6 shadow-md">
              04
            </div>
            <div>
              <h4 className="font-bold text-[#0B1E36] text-lg mb-2">
                Ele vai até você
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Atendimento a domicílio. Pague no débito, crédito ou PIX com
                comodidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Avaliacoes() {
  const reviews = [
    {
      nome: 'Willian L.',
      texto:
        'Ótimo profissional, competente e justo! Com uma vasta experiência na área de refrigeração!',
    },
    {
      nome: 'Daiane S.',
      texto:
        'O técnico chegou no horário, foi educado e explicou o que estava acontecendo com o aparelho.',
    },
    {
      nome: 'Paulo Roberto R.',
      texto:
        'Libencio exatamente profissional [...] serviço muito bem feito recomendo',
    },
    {
      nome: 'Barbara S.',
      texto:
        'Serviço muito bom e bem realizado. O atendimento foi de qualidade e tudo funcionou como esperado após o serviço.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E36] mb-4">
            Avaliações no Google
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-black text-slate-800">5,0</span>
            <div className="flex text-yellow-400">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>
          <p className="text-slate-500">com 35 avaliações reais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{review.texto}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0066CC] font-bold text-xs">
                  {review.nome.charAt(0)}
                </div>
                <span className="font-semibold text-slate-800 text-sm">
                  {review.nome} ·{' '}
                  <span className="text-xs text-slate-400 font-normal">
                    Google
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreFooterCTA() {
  return (
    <section className="bg-linear-to-r from-[#0066CC] to-[#00B4D8] py-12 relative overflow-hidden">
      <Snowflake className="absolute -top-10 -left-10 w-40 h-40 text-white opacity-10" />
      <Snowflake className="absolute -bottom-10 right-10 w-40 h-40 text-white opacity-10" />
      <Snowflake className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Parou de gelar? Chama o Libêncio.
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            Atendimento a domicílio em Patos de Minas, de segunda a sábado.
          </p>
        </div>
        <a
          href="#form"
          className="bg-white text-[#0066CC] px-8 py-3.5 rounded-md font-bold hover:bg-slate-50 transition-colors shadow-lg shrink-0 flex items-center gap-2"
        >
          Chamar no WhatsApp <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#05101E] text-slate-400 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-800 pb-12 mb-8 gap-10 md:gap-4">
          <div className="md:w-1/3">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="text-[#00B4D8]">
                <Snowflake className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tight leading-none">
                  LIBÊNCIO
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-tight">
                  Refrigeração e Climatização
                </span>
              </div>
            </a>
          </div>
          <div className="md:w-1/3 text-slate-300 leading-relaxed text-sm md:text-center">
            <p className="mb-2">
              Atendimento a domicílio em Patos de Minas, MG · bairros atendidos
              sob consulta.
            </p>
            <p className="text-white font-semibold">Seg a Sáb, 8h às 18h</p>
          </div>
          <div className="md:w-1/3 flex flex-col items-start md:items-end gap-4">
            <a
              href="https://wa.me/5534991565849"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-slate-500 group-hover:text-green-400 transition-colors" />
              <div className="text-left">
                <p className="font-semibold text-slate-200">
                  Falar pelo WhatsApp
                </p>
                <p className="text-xs text-slate-500">(34) 99156-5849</p>
              </div>
            </a>
            <a
              href="https://instagram.com/libenciopereira"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <div className="text-left">
                <p className="font-semibold text-slate-200">@libenciopereira</p>
                <p className="text-xs text-slate-500">Siga no Instagram</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Libêncio Refrigeração e
            Climatização. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 items-center">
            <span>Modelo de demonstração (Scalee)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5534991565849"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
