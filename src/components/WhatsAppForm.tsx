'use client';
import { MessageCircle, Shield, User } from 'lucide-react';
import React, { useState, type FormEvent } from 'react';

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    nome: '',
    tipoAtendimento: 'Residencial',
    equipamento: '',
    servico: '',
    descricao: '',
    bairro: '',
    quando: 'O mais rápido possível (Urgência)',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `*NOVA SOLICITAÇÃO DE ATENDIMENTO*\n\n*Nome:* ${formData.nome}\n*Tipo:* ${formData.tipoAtendimento}\n*Equipamento:* ${formData.equipamento}\n*Serviço desejado:* ${formData.servico}\n*Bairro:* ${formData.bairro || 'Não informado'}\n*Previsão:* ${formData.quando}\n\n*Descrição do problema:*\n${formData.descricao}`;
    const url = `https://wa.me/5534991565849?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="form" className="py-20 bg-[#0B1E36] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0A1629] skew-x-12 origin-top-right hidden lg:block opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/5 text-white flex flex-col justify-center">
            <p className="text-[#00B4D8] font-bold tracking-widest text-xs mb-3 uppercase">
              Ordem de Serviço (OS)
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Abra sua OS a domicílio.
            </h2>

            <p className="text-slate-400 text-lg mb-12">
              Vamos organizar as informações para facilitar seu contato{' '}
              <span className="text-white font-semibold">pelo WhatsApp.</span>
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
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
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
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
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
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
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Seu nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex.: João Silva"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Tipo de atendimento{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6 mt-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tipoAtendimento"
                          value="Residencial"
                          checked={formData.tipoAtendimento === 'Residencial'}
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
                          name="tipoAtendimento"
                          value="Empresarial"
                          checked={formData.tipoAtendimento === 'Empresarial'}
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
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Equipamento <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="equipamento"
                      required
                      value={formData.equipamento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white appearance-none"
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
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      O que você precisa?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="servico"
                      required
                      value={formData.servico}
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Descreva o problema ou sua necessidade{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="descricao"
                    required
                    rows={3}
                    value={formData.descricao}
                    onChange={handleInputChange}
                    placeholder="Ex.: Minha geladeira Frost Free parou de gelar na parte de baixo..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Bairro{' '}
                      <span className="text-slate-400 font-normal">
                        (Patos de Minas)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="bairro"
                      value={formData.bairro}
                      onChange={handleInputChange}
                      placeholder="Ex.: Centro"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Quando prefere o atendimento?
                    </label>
                    <select
                      name="quando"
                      value={formData.quando}
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
                  className="w-full bg-[#0066CC] hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 mt-4"
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
