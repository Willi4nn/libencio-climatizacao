'use client';
import { MessageCircle, Shield, User } from 'lucide-react';
import React, { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    serviceType: 'Residencial',
    equipment: '',
    service: '',
    description: '',
    neighborhood: '',
    preferredTime: 'O mais rápido possível (Urgência)',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((previousState) => ({ ...previousState, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `*NOVA SOLICITAÇÃO DE ATENDIMENTO*\n\n*Nome:* ${formState.name}\n*Tipo:* ${formState.serviceType}\n*Equipamento:* ${formState.equipment}\n*Serviço desejado:* ${formState.service}\n*Bairro:* ${formState.neighborhood || 'Não informado'}\n*Previsão:* ${formState.preferredTime}\n\n*Descrição do problema:*\n${formState.description}`;
    const whatsappUrl = `https://wa.me/5534991565849?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="form"
      className="relative overflow-hidden bg-[#071a33] py-20 lg:py-28"
    >
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[#0b2444] opacity-60 lg:block [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col justify-center text-white lg:w-2/5">
            <p className="eyebrow mb-4 text-[#18c5e8]">Ordem de Serviço (OS)</p>

            <h2 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight lg:text-5xl">
              Abra sua OS a domicílio.
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-slate-400">
              Vamos organizar as informações para facilitar seu contato{' '}
              <span className="text-white font-semibold">pelo WhatsApp.</span>
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                  <User className="w-5 h-5 text-[#00B4D8]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Atendimento personalizado
                  </h4>
                  <p className="text-sm text-slate-400">
                    Conforme o seu equipamento e necessidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                  <MessageCircle className="w-5 h-5 text-[#00B4D8]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Agilidade no contato
                  </h4>
                  <p className="text-sm text-slate-400">
                    Sua solicitação vai direto para o WhatsApp.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                  <Shield className="w-5 h-5 text-[#00B4D8]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Segurança e praticidade
                  </h4>
                  <p className="text-sm text-slate-400">
                    Sem cadastro e sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl md:p-10">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Seu nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Ex.: João Silva"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-all focus:border-[#0876e8] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-700 mb-2">
                      Tipo de atendimento{' '}
                      <span className="text-red-500">*</span>
                    </span>
                    <div className="flex gap-6 mt-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="serviceType"
                          value="Residencial"
                          checked={formState.serviceType === 'Residencial'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#0066CC] focus:ring-[#0066CC]"
                        />
                        <span className="text-sm text-slate-600">
                          Residencial
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="serviceType"
                          value="Empresarial"
                          checked={formState.serviceType === 'Empresarial'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#0066CC] focus:ring-[#0066CC]"
                        />
                        <span className="text-sm text-slate-600">
                          Empresarial
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="equipment"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Equipamento <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="equipment"
                      name="equipment"
                      required
                      value={formState.equipment}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-all focus:border-[#0876e8] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">Selecione o equipamento</option>
                      <option value="Ar-Condicionado">Ar-Condicionado</option>
                      <option value="Geladeira (Comum/Frost Free)">
                        Geladeira (Frost Free/Comum)
                      </option>
                      <option value="Freezer Residencial">
                        Freezer Residencial
                      </option>
                      <option value="Cervejeira/Expositor">
                        Cervejeira ou Expositor
                      </option>
                      <option value="Bebedouro Industrial">
                        Bebedouro Industrial
                      </option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      O que você precisa?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white appearance-none"
                    >
                      <option value="">Selecione o serviço</option>
                      <option value="Conserto / Parou de funcionar">
                        Conserto / Parou de funcionar
                      </option>
                      <option value="Manutenção Preventiva">
                        Manutenção Preventiva
                      </option>
                      <option value="Limpeza / Higienização">
                        Limpeza / Higienização
                      </option>
                      <option value="Instalação nova">Instalação nova</option>
                      <option value="Orçamento / Dúvida">
                        Orçamento / Dúvida
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Descreva o problema ou sua necessidade{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={3}
                    value={formState.description}
                    onChange={handleInputChange}
                    placeholder="Ex.: Minha geladeira Frost Free parou de gelar na parte de baixo..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="neighborhood"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Bairro{' '}
                      <span className="text-slate-400 font-normal">
                        (Patos de Minas)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="neighborhood"
                      name="neighborhood"
                      value={formState.neighborhood}
                      onChange={handleInputChange}
                      placeholder="Ex.: Centro"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Quando prefere o atendimento?
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formState.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white appearance-none"
                    >
                      <option value="O mais rápido possível (Urgência)">
                        O mais rápido possível (Urgência)
                      </option>
                      <option value="Manhã">Período da Manhã</option>
                      <option value="Tarde">Período da Tarde</option>
                      <option value="A combinar">
                        A combinar com o técnico
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="button-primary mt-4 w-full rounded-xl py-4 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Mandar a OS no WhatsApp
                </button>

                <div className="flex items-start gap-2 mt-4 text-xs text-slate-500">
                  <Shield className="w-4 h-4 shrink-0 text-slate-400" />
                  <p>
                    Seus dados serão usados apenas para organizar a solicitação
                    de atendimento pelo WhatsApp e não serão compartilhados.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
