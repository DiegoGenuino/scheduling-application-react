import { useRef, useState, useEffect } from "react";

import "./Formulario.css";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    dataConsulta: "",
    horaConsulta: "",
    especialidadeDesejada: "",
    observacoes: "",
  });

  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const handleChange = (evento) => {
    const { name, value } = evento.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // simula envio e apaga o loading depois de 2s
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const specialties = [
    "Cirurgia Geral",
    "Cardiologia",
    "Neurologia",
  ];

  return (
    <>
      <div className="container">
        <aside>
          <div className="aside-info">
            <h1>Agende sua consulta em segundos</h1>
            <p>Interface simples. Experiência rápida. Confiança no agendamento</p>
            <p>
              Preencha seus dados de forma rápida e segura. Nossa plataforma
              valida e confirma seu agendamento por e-mail.
            </p>
          </div>
        </aside>
        <form onSubmit={handleSubmit}>
          {loading && (
            <div className="loading-state" role="status">
              <div className="animation" />
            </div>
          )}
          <h2>Formulário</h2>

          <div className="inline-inputGroup">
            <div className="inputGroup">
              <label htmlFor="nomeCompleto">Nome completo</label>
              <input
                type="text"
                id="nomeCompleto"
                placeholder="João Soares"
                minLength={5}
                required
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
              />
              <p className="error">Nome obrigatório</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="joaosoares123@gmail.com"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p className="error">Digite um e-mail válido</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                id="telefone"
                placeholder="11 99111 1111"
                required
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
              <p className="error">Telefone obrigatório</p>
            </div>
          </div>

          <div className="inline-inputGroup">
            <div className="inputGroup">
              <label htmlFor="dataConsulta">Data da consulta</label>
              <input
                type="date"
                id="dataConsulta"
                required
                name="dataConsulta"
                value={formData.dataConsulta}
                onChange={handleChange}
              />
              <p className="error">Data obrigatória</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="horaConsulta">Hora da consulta</label>
              <input
                type="time"
                id="horaConsulta"
                required
                name="horaConsulta"
                value={formData.horaConsulta}
                onChange={handleChange}
              />
              <p className="error">Hora obrigatória</p>
            </div>
          </div>

          <div className="inline-inputGroup">
            <div className="inputGroup">
              <label htmlFor="especialidade">Especialidade</label>
              <select
                id="especialidade"
                value={formData.especialidadeDesejada}
                required
                name="especialidadeDesejada"
                onChange={handleChange}
              >
                <option value="">Selecione uma opção</option>
                {specialties.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <p className="error">Especialidade obrigatória</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="observacoes">Observações</label>
              <textarea
                name="observacoes"
                id="observacoes"
                placeholder="Desejo..."
                value={formData.observacoes}
                onChange={handleChange}
              ></textarea>
              <p className="error">Observação obrigatória</p>
            </div>
          </div>

          <button disabled={loading}>{loading ? "Enviando..." : "Agendar"}</button>
        </form>
      </div>
    </>
  );
}
