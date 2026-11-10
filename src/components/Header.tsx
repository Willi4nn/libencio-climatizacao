'use client';
import { ArrowUpRight, Menu, Snowflake, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Serviços', '#servicos'],
  ['Atendimento', '#atendimento'],
  ['Galeria', '#galeria'],
  ['Dúvidas', '#faq'],
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-[0_12px_35px_rgba(7,26,51,0.08)] backdrop-blur-xl">
        <div className="flex h-17 items-center justify-between px-4 sm:px-6">
          <a
            href="#"
            className="flex items-center gap-2.5"
            aria-label="Libêncio - início"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff] text-[#0876e8]">
              <Snowflake className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col">
              <span className="font-black text-xl tracking-[-0.04em] text-[#071a33] leading-none sm:text-2xl">
                LIBÊNCIO
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0876e8] leading-tight sm:text-[9px]">
                Refrigeração e Climatização
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navegação principal"
          >
            <a href="#" className="text-sm font-bold text-[#0876e8]">
              Início
            </a>
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-slate-500 transition-colors hover:text-[#0876e8]"
              >
                {label}
              </a>
            ))}
            <a href="#form" className="button-primary px-5 py-2.5 text-sm">
              Solicitar atendimento <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            className="rounded-xl p-2 text-[#071a33] transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className="flex flex-col gap-1 px-5 py-4"
            aria-label="Navegação mobile"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}
            <a
              href="#form"
              onClick={closeMenu}
              className="button-primary mt-2 px-6 py-3 text-center"
            >
              Solicitar atendimento <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
