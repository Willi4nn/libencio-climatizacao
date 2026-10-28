'use client';
import { Menu, Snowflake, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="text-[#0066CC]">
            <Snowflake className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl md:text-3xl text-[#0B1E36] tracking-tight leading-none">
              LIBÊNCIO
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#0066CC] uppercase leading-tight">
              Refrigeração e Climatização
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-semibold text-[#0066CC] border-b-2 border-[#0066CC] pb-1"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-slate-600 hover:text-[#0066CC] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#atendimento"
            className="text-sm font-medium text-slate-600 hover:text-[#0066CC] transition-colors"
          >
            Atendimento
          </a>
          <a
            href="#galeria"
            className="text-sm font-medium text-slate-600 hover:text-[#0066CC] transition-colors"
          >
            Galeria
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-slate-600 hover:text-[#0066CC] transition-colors"
          >
            Perguntas Frequentes
          </a>
          <a
            href="#form"
            className="bg-[#0066CC] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Solicitar atendimento
          </a>
        </nav>

        <button
          className="lg:hidden text-[#0B1E36]"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      <div
        className={`lg:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col px-4 py-6 gap-4">
          <a
            href="#servicos"
            onClick={toggleMenu}
            className="font-medium text-lg text-slate-700"
          >
            Serviços
          </a>
          <a
            href="#atendimento"
            onClick={toggleMenu}
            className="font-medium text-lg text-slate-700"
          >
            Atendimento
          </a>
          <a
            href="#galeria"
            onClick={toggleMenu}
            className="font-medium text-lg text-slate-700"
          >
            Galeria
          </a>
          <a
            href="#faq"
            onClick={toggleMenu}
            className="font-medium text-lg text-slate-700"
          >
            Perguntas Frequentes
          </a>
          <a
            href="#form"
            onClick={toggleMenu}
            className="bg-[#0066CC] text-white px-6 py-3 rounded-md font-semibold text-center mt-2"
          >
            Solicitar atendimento
          </a>
        </div>
      </div>
    </header>
  );
}
