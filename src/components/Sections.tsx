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
  ShieldCheck,
  Snowflake,
  Star,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-8',
        'transition-all',
        'duration-1000',
        'ease-out'
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export function Hero() {
  const heroSlides = [
    {
      badge: '5,0 no Google · 35 avaliações',
      highlightedTitle: 'parado?',
      titlePrefix: 'Geladeira com defeito ou ar-condicionado ',
      description:
        'O Libêncio resolve a domicílio. Marque o aparelho na ordem de serviço e mande direto no WhatsApp dele, já com o defeito descrito.',
      image: '/images/hero-bg.jpg',
    },
    {
      badge: 'Especialista em Frost Free',
      highlightedTitle: 'especialidade!',
      titlePrefix: 'Conserto de geladeiras e Frost Free é nossa ',
      description:
        'Sua geladeira parou de gelar na parte de baixo? Diagnóstico preciso, peças de qualidade e atendimento rápido em Patos de Minas.',
      image:
        'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=2069&auto=format&fit=crop',
    },
    {
      badge: 'Instalação & Manutenção',
      highlightedTitle: 'perfeito',
      titlePrefix: 'Ar-condicionado Split com acabamento ',
      description:
        'Instalação padrão com bomba de vácuo, limpeza profunda (higienização) e infraestrutura completa para residências e empresas.',
      image:
        'https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop',
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    setIsHeroLoaded(true);
    const timer = setInterval(() => {
      setActiveSlideIndex(
        (previousIndex) => (previousIndex + 1) % heroSlides.length
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const goToNextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSlideIndex(
      (previousIndex) => (previousIndex + 1) % heroSlides.length
    );
  };

  const goToPreviousSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSlideIndex(
      (previousIndex) =>
        (previousIndex - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative flex min-h-svh lg:min-h-168 items-center overflow-hidden bg-(--ink) pt-36 pb-12 lg:pt-40 lg:pb-20 text-white selection:bg-(--cyan) selection:text-(--ink)">
      <h1 className="sr-only">
        Instalação de Ar-condicionado e Conserto de Geladeiras em Patos de Minas
        - MG
      </h1>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[60%]">
        <div className="absolute inset-0 z-10 bg-black/40 lg:bg-transparent"></div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-(--ink)/90 via-(--ink)/60 to-transparent lg:bg-gradient-to-r lg:from-(--ink) lg:via-(--ink)/60 lg:to-transparent"></div>

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === activeSlideIndex
                ? 'opacity-100 scale-100 z-0'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={`Serviço de climatização e refrigeração em Patos de Minas - Slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 section-shell">
        <div
          className={`max-w-2xl transition-all duration-1000 transform ${isHeroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg">
            {activeSlideIndex === 0 ? (
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            ) : (
              <span className="w-2 h-2 rounded-full bg-(--cyan) animate-pulse shadow-[0_0_8px_var(--cyan)]"></span>
            )}
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              {heroSlides[activeSlideIndex].badge}
            </span>
          </div>

          <div className="mb-9 flex min-h-56 flex-col justify-center lg:min-h-60">
            <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-300 sm:text-5xl lg:text-[3.5rem]">
              {heroSlides[activeSlideIndex].titlePrefix}{' '}
              <span className="text-(--cyan)">
                {heroSlides[activeSlideIndex].highlightedTitle}
              </span>
            </h2>
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 transition-all duration-300">
              {heroSlides[activeSlideIndex].description}
            </p>
          </div>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#form"
              className="button-primary px-8 py-4 text-[15px] w-full sm:w-auto"
            >
              Solicitar atendimento
            </a>
            <a
              href="https://wa.me/5534991565849"
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 group backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-slate-300 group-hover:text-[#25D366] transition-colors" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-(--cyan)" />
              <p>
                Atendimento em Patos de Minas ·{' '}
                <span className="text-white font-medium">
                  Seg a Sáb, 8h às 18h
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <div className="flex gap-1.5 mr-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveSlideIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeSlideIndex
                        ? 'w-8 bg-(--cyan)'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={goToPreviousSlide}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-(--brand) hover:border-(--brand) active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNextSlide}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-(--brand) hover:border-(--brand) active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  useScrollReveal();
  return (
    <section id="servicos" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="section-shell">
        <div className="reveal-on-scroll mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Nossas soluções</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-(--ink) sm:text-4xl">
            Serviços de Climatização e Refrigeração
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            Oferecemos soluções completas separadas por vias especializadas para
            atender com rapidez e precisão o seu equipamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="surface-card flex flex-col overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 h-full">
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop"
                  alt="Instalação e manutenção de Ar-condicionado em Patos de Minas"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold text-(--ink) mb-5">
                  Ar-condicionado
                </h3>
                <ul className="space-y-3.5 mb-8 grow">
                  {[
                    'Instalação',
                    'Manutenção',
                    'Limpeza e higienização',
                    'Infraestrutura',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-(--surface) flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-(--brand)" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#form"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-(--brand) text-white font-semibold text-sm hover:bg-(--brand-dark) shadow-md shadow-blue-500/20 transition-all group/btn"
                >
                  Solicitar atendimento{' '}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="surface-card flex flex-col overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 relative border-(--brand)/20 shadow-[0_18px_50px_rgba(8,118,232,0.07)] h-full">
              <div className="absolute top-4 right-4 bg-(--cyan) text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                Destaque
              </div>
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <img
                  src="/images/servico-geladeira.jpg"
                  alt="Conserto de Geladeiras Frost Free e Refrigeração Comercial"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold text-(--ink) mb-5">
                  Geladeiras & Refrigeração
                </h3>
                <ul className="space-y-3.5 mb-8 grow">
                  {[
                    'Geladeiras Frost Free e comuns',
                    'Freezers e Cervejeiras',
                    'Expositores refrigerados',
                    'Bebedouros industriais',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-(--brand)" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#form"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-(--brand) text-white font-semibold text-sm hover:bg-(--brand-dark) shadow-md shadow-blue-500/20 transition-all group/btn"
                >
                  Solicitar atendimento{' '}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="surface-card bg-linear-to-br from-(--ink) to-[#112a4a] border-none text-white flex flex-col justify-between p-8 relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-300 h-full">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-(--cyan)/20 rounded-full blur-3xl pointer-events-none"></div>
              <div>
                <span className="bg-(--cyan)/20 border border-(--cyan)/30 text-(--cyan) text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-6">
                  Especialidade
                </span>
                <h3 className="text-2xl font-extrabold mb-4 tracking-tight">
                  Geladeira Frost Free com defeito?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  É o que o Libêncio mais resolve na cidade. Marque na OS o
                  modelo e o sintoma para receber um diagnóstico rápido via
                  WhatsApp.
                </p>
              </div>
              <a
                href="#form"
                className="w-full bg-(--cyan) hover:bg-[#15b2d1] text-(--ink) font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-cyan-500/20"
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

export function TechnicianProfile() {
  useScrollReveal();
  return (
    <section className="py-20 lg:py-28 bg-(--surface) border-t border-(--line) overflow-hidden">
      <div className="section-shell">
        <div className="surface-card p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 reveal-on-scroll">
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="shrink-0 relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-2 bg-white border border-(--line) shadow-sm relative z-10 mx-auto md:mx-0">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Libêncio Pereira - Técnico em Refrigeração em Patos de Minas"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-3 right-3 md:right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 z-20">
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start justify-center">
              <span className="eyebrow mb-3 block">
                Profissional Verificado
              </span>
              <h2 className="text-3xl font-extrabold text-(--ink) mb-2 tracking-tight">
                Libêncio Pereira
              </h2>
              <p className="text-(--brand) font-semibold text-sm mb-5">
                Técnico Especialista em Refrigeração
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-7">
                Conserta geladeiras, freezers, cervejeiras e expositores.
                Realiza instalação, limpeza, infraestrutura e manutenção
                completa de ar-condicionado direto na sua residência ou
                comércio.
              </p>
              <blockquote className="w-full bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none p-5 md:p-0 md:border-l-2 md:border-(--cyan) md:pl-5 italic text-slate-700 font-medium text-sm">
                “Atendimento a domicílio, rápido e com preço justo!”
                <span className="block text-[10px] text-slate-400 not-italic mt-2.5 md:mt-1.5 uppercase tracking-wider font-bold">
                  — Libêncio, no Instagram
                </span>
              </blockquote>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 self-center w-full">
            {[
              {
                icon: Clock,
                title: 'Horário',
                description: 'Seg a Sáb, 8h às 18h',
              },
              {
                icon: ShieldCheck,
                title: 'Pagamento',
                description: 'Débito, crédito e PIX',
              },
              {
                icon: MapPin,
                title: 'Cidade',
                description: 'Patos de Minas, MG',
              },
              {
                icon: Check,
                title: 'Modalidade',
                description: 'Atendimento a Domicílio',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50/50 p-5 lg:p-6 rounded-2xl border border-(--line) hover:border-(--brand)/30 hover:bg-white transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left group h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-(--line) shadow-sm text-(--brand) flex items-center justify-center mb-4 group-hover:bg-(--brand) group-hover:border-(--brand) group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-(--ink) text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceTypes() {
  useScrollReveal();
  return (
    <section
      id="atendimento"
      className="py-24 lg:py-32 bg-white border-t border-(--line) relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-(--cyan)/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--brand)/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-shell relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/3 reveal-on-scroll">
            <span className="eyebrow mb-3 block">Estrutura Completa</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-(--ink) mb-5 tracking-tight leading-[1.15]">
              Atendimento residencial e comercial em Patos de Minas
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-6">
              Seja o conforto da sua casa ou a exigência do seu comércio, conte
              com um técnico especializado para resolver o problema com rapidez,
              segurança e zero bagunça.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-(--surface) border border-(--line) text-xs font-semibold text-(--ink-soft)">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Atendimento a domicílio em Patos de Minas
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div
              className="h-full reveal-on-scroll"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="surface-card p-8 group hover:-translate-y-2 hover:border-(--brand)/40 hover:shadow-[0_20px_40px_rgba(8,118,232,0.08)] transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-blue-50/80 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:scale-110 group-hover:bg-(--brand) group-hover:text-white transition-all duration-300 text-(--brand) shadow-sm">
                      <Home className="w-7 h-7 transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-(--brand) transition-colors">
                      Para seu Lar
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-(--ink) mb-3 tracking-tight">
                    Residências
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Manutenção preventiva e corretiva com foco na preservação do
                    seu ambiente familiar.
                  </p>
                  <ul className="space-y-3.5 pt-4 border-t border-(--line)">
                    {[
                      'Ar-condicionado (split e janela)',
                      'Geladeiras Frost Free',
                      'Freezers residenciais',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-600 font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-(--brand)" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="h-full reveal-on-scroll"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="surface-card p-8 group hover:-translate-y-2 hover:border-(--cyan)/50 hover:shadow-[0_20px_40px_rgba(24,197,232,0.08)] transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-(--cyan)/10 to-transparent rounded-bl-full pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 group-hover:scale-110 group-hover:bg-(--cyan) group-hover:text-(--ink) transition-all duration-300 text-(--ink) shadow-sm">
                      <Building2 className="w-7 h-7 transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-800 transition-colors">
                      Comercial
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-(--ink) mb-3 tracking-tight">
                    Empresas
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Agilidade para o seu negócio não parar, garantindo
                    refrigeração contínua e eficiente.
                  </p>
                  <ul className="space-y-3.5 pt-4 border-t border-(--line)">
                    {[
                      'Equipamentos comerciais',
                      'Ar-condicionado (escritórios e lojas)',
                      'Expositores e cervejeiras',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-600 font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-(--cyan)" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  useScrollReveal();
  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 bg-(--surface) border-t border-(--line) overflow-hidden"
    >
      <div className="section-shell">
        <div className="text-center mb-16 max-w-2xl mx-auto reveal-on-scroll">
          <p className="eyebrow mb-3">Portfólio Real</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-(--ink) mb-4 tracking-tight">
            Instalações realizadas em Patos de Minas
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Fotos reais de serviços executados em Patos de Minas. Arraste para
            ver a qualidade do acabamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-55">
          <div
            className="md:col-span-2 md:row-span-2 h-full reveal-on-scroll"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/galeria/split-varanda.jpg"
                alt="Instalação de ar-condicionado Split em varanda em Patos de Minas"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/95 via-(--ink)/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="bg-(--brand) text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3 inline-block shadow-lg backdrop-blur-md border border-white/20">
                  Instalação Premium
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  Split na Varanda
                </h3>
                <p className="text-slate-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Acabamento impecável, sem fios expostos e alinhamento perfeito
                  com a esquadria.
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/condensadora-samsung.jpg"
                alt="Instalação de unidade externa condensadora de ar-condicionado"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <span className="bg-(--cyan) text-(--ink) text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block shadow-sm">
                  Externo
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Condensadora
                </h3>
              </div>
            </div>
          </div>

          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/split-alpendre.jpg"
                alt="Instalação de ar-condicionado em alpendre residencial em Patos de Minas"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <span className="bg-slate-200 text-(--ink) text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block">
                  Residencial
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Split no alpendre
                </h3>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-2 h-full reveal-on-scroll"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/instalacao-comercial.jpg"
                alt="Projeto de climatização para sala comercial e escritórios"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-(--ink)/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-2 inline-block">
                  Comercial
                </span>
                <h3 className="text-xl font-bold text-white">
                  Sala de Trabalho
                </h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1">
                  Climatização dimensionada para o conforto da equipe.
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '500ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/condensadora-parede.jpg"
                alt="Instalação segura de condensadora em suporte de parede externa"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <span className="bg-amber-500 text-(--ink) text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block">
                  Segurança
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Suporte externo
                </h3>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-2 h-full reveal-on-scroll"
            style={{ transitionDelay: '600ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/infra-tubulacao.jpg"
                alt="Infraestrutura embutida com tubulação de cobre para ar-condicionado"
                loading="lazy"
                className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-(--ink)/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="bg-(--brand)/90 backdrop-blur border border-(--brand) text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3 inline-block shadow-lg">
                  Técnico
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  Infraestrutura Embutida
                </h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Tubulação em cobre preparada antes da pintura.
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-full reveal-on-scroll"
            style={{ transitionDelay: '700ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/condensadora-corredor.jpg"
                alt="Instalação de condensadora de ar-condicionado em corredor lateral"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <span className="bg-(--cyan) text-(--ink) text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block">
                  Acesso
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Corredor lateral
                </h3>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-2 lg:col-span-3 h-full reveal-on-scroll"
            style={{ transitionDelay: '800ms' }}
          >
            <div className="surface-card group relative overflow-hidden p-0 border-none rounded-2xl h-full shadow-sm">
              <img
                src="/images/galeria/condensadoras-laje.jpg"
                alt="Bateria de condensadoras instaladas em laje técnica comercial em Patos de Minas"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--ink)/90 via-(--ink)/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-2 inline-block">
                  Estrutura Pesada
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Bateria de Condensadoras
                </h3>
                <p className="text-slate-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1 max-w-lg">
                  Organização, segurança e dimensionamento correto para
                  múltiplas unidades operando simultaneamente na laje técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  useScrollReveal();
  const steps = [
    {
      number: '01',
      title: 'Marca o aparelho',
      description: 'Geladeira, freezer, Frost Free ou ar-condicionado.',
    },
    {
      number: '02',
      title: 'Manda no WhatsApp',
      description: 'A OS chega pronta no WhatsApp: (34) 99156-5849.',
    },
    {
      number: '03',
      title: 'Combina o dia',
      description: 'De segunda a sábado, das 8h às 18h com praticidade.',
    },
    {
      number: '04',
      title: 'Ele vai até você',
      description: 'Atendimento a domicílio. Débito, crédito ou PIX.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-(--line) overflow-hidden">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 reveal-on-scroll">
          <div>
            <span className="eyebrow mb-3 block">Passo a Passo</span>
            <h2 className="text-3xl font-extrabold text-(--ink) tracking-tight sm:text-4xl">
              Da OS ao aparelho funcionando
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-sm leading-relaxed">
            Solicitar seu atendimento é simples, rápido e sem burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-18 left-8 right-8 h-px bg-(--line) z-0 pointer-events-none"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 h-full reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-(--line) shadow-sm hover:shadow-[0_12px_32px_rgba(7,26,51,0.06)] hover:border-(--brand)/30 transition-all duration-300 flex flex-col group h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border-2 border-blue-500 flex items-center justify-center text-(--ink) text-sm font-black mb-6 group-hover:bg-(--brand) group-hover:text-white group-hover:border-(--brand) transition-colors duration-300">
                  {step.number}
                </div>
                <h4 className="font-bold text-(--ink) text-lg mb-2 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: 'Nicole Moreira',
      text: 'Tive uma ótima experiência com o serviço. O atendimento foi excelente, pontual, educado e explicou tudo com clareza. Recomendo!',
    },
    {
      name: 'Marco Aurélio',
      text: 'Excelente profissional! A instalação do ar-condicionado ficou perfeita, rápida e muito bem feita. Capricho em cada detalhe.',
    },
    {
      name: 'Maria de Fátima',
      text: 'Libêncio foi pontual, atencioso e muito profissional. Instalou o ar-condicionado com capricho, deixou tudo limpo e explicou o funcionamento.',
    },
    {
      name: 'Willian Lima',
      text: 'Ótimo profissional, competente e justo! Com uma vasta experiência na área de refrigeração!',
    },
    {
      name: 'Daiane Soares',
      text: 'O técnico chegou no horário, foi educado e explicou o que estava acontecendo com o aparelho. Deixou tudo funcionando corretamente.',
    },
    {
      name: 'Piaba',
      text: 'Minha geladeira parou de gelar e o Libêncio resolveu no mesmo dia! Atendimento rápido e saiu funcionando perfeitamente.',
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-(--surface) border-t border-(--line) overflow-hidden">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
          <div className="text-center md:text-left mx-auto md:mx-0 max-w-xl">
            <span className="eyebrow mb-3 block">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-(--ink) mb-4 tracking-tight">
              Avaliações no Google
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="text-3xl font-black text-(--ink)">5,0</span>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              baseado em 35 avaliações reais
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-(--line) bg-white flex items-center justify-center text-(--ink) hover:bg-(--brand) hover:text-white hover:border-(--brand) transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-(--line) bg-white flex items-center justify-center text-(--ink) hover:bg-(--brand) hover:text-white hover:border-(--brand) transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 px-1 snap-x snap-mandatory scroll-smooth items-stretch reveal-on-scroll"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-75 sm:min-w-95 max-w-100 snap-start shrink-0 flex"
            >
              <div className="surface-card p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 w-full group shadow-sm border border-(--line)">
                <div>
                  <div className="flex text-amber-400 gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                    “{review.text}”
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-(--line) mt-auto">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-(--brand) font-bold text-xs border border-blue-100 shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-(--ink) text-sm flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                    {review.name}
                    <span className="text-slate-400 font-normal">— Google</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 md:hidden">
          <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            ← Arraste para ver mais →
          </span>
        </div>
      </div>
    </section>
  );
}

export function PreFooterCallToAction() {
  useScrollReveal();
  return (
    <section className="bg-linear-to-br from-(--brand) to-(--brand-dark) py-16 relative overflow-hidden">
      <Snowflake className="absolute -top-10 -left-10 w-48 h-48 text-white/5 pointer-events-none" />
      <Snowflake className="absolute -bottom-10 right-10 w-48 h-48 text-white/5 pointer-events-none" />
      <div className="section-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
            Parou de gelar? Chama o Libêncio.
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            Atendimento a domicílio em Patos de Minas, de segunda a sábado.
          </p>
        </div>
        <a
          href="#form"
          className="flex items-center gap-2 bg-white text-(--brand) px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all duration-300 shadow-lg shrink-0 active:scale-95 hover:-translate-y-1"
        >
          Chamar no WhatsApp <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  useScrollReveal();
  return (
    <footer className="bg-(--ink) text-slate-400 pt-16 pb-8 text-sm overflow-hidden">
      <div className="section-shell">
        <div className="reveal-on-scroll">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-12 mb-8 gap-10 md:gap-4">
            <div className="md:w-1/3">
              <a href="#" className="flex items-center gap-2.5 mb-4 group">
                <div className="text-(--cyan) group-hover:scale-110 transition-transform">
                  <Snowflake className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl text-white tracking-tight leading-none">
                    LIBÊNCIO
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-tight mt-0.5">
                    Refrigeração & Climatização
                  </span>
                </div>
              </a>
            </div>
            <div className="md:w-1/3 text-slate-400 leading-relaxed text-sm md:text-center">
              <p className="mb-2">
                Atendimento a domicílio em Patos de Minas, MG · bairros
                atendidos sob consulta.
              </p>
              <p className="text-white font-medium">Seg a Sáb, 8h às 18h</p>
            </div>
            <div className="md:w-1/3 flex flex-col items-start md:items-end gap-3.5 w-full">
              <a
                href="https://wa.me/5534991565849"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-200">
                    Falar no WhatsApp
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
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-linear-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:border-transparent group-hover:text-white transition-all">
                  <svg
                    className="w-5 h-5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-200">
                    Siga no Instagram
                  </p>
                  <p className="text-xs text-slate-500">@libenciopereira</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Libêncio Refrigeração. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-4 items-center">
              <span>Desenvolvido por Willian - Scalee</span>
            </div>
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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-green-600 transition-all duration-700 flex items-center justify-center hover:-translate-y-1 animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
