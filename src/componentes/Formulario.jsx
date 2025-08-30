import { useState } from "react";

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
    butaoConfirmar: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (evento) => {
    const { name, value } = evento.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }

  return (
    <>
      <div className="container">
        <aside>
          <div className="aside-info">
            <h1>Preenchimento de formulário com React</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab
              in eligendi, possimus, reiciendis sequi numquam quibusdam fugit
              quis harum illum error consequuntur rerum officia. Doloribus, hic!
              Alias, quidem beatae!
            </p>
          </div>
        </aside>
        <form onSubmit={handleSubmit}>
          {loading && (
            <div className="loading-state" role="status">
              <div className="animation"></div>
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
              <p className="error">Nome obrigatório</p>
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
              <p className="error">Nome obrigatório</p>
            </div>
          </div>

          <div className="inline-inputGroup">
            <div className="inputGroup">
              <label htmlFor="dataConsulta">Data da consulta</label>
              <input
                type="date"
                id="dataConsulta"
                placeholder="01/01/2025"
                required
                name="dataConsulta"
                value={formData.dataConsulta}
                onChange={handleChange}
              />
              <p className="error">Nome obrigatório</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="horaConsulta">Hora da consulta</label>
              <input
                type="date-time"
                id="horaConsulta"
                placeholder="12:00"
                required
                name="horaConsulta"
                value={formData.horaConsulta}
                onChange={handleChange}
              />
              <p className="error">Nome obrigatório</p>
            </div>
          </div>

          <div className="inline-inputGroup">
            <div className="inputGroup">
              <label htmlFor="especialidade">Especialidade</label>
              <select
                name="especialidades"
                id="especialidade"
                value={formData.especialidadeDesejada}
                required
                name="especialidadeDesejada"
                onChange={handleChange}
              >
                <option value="" selected disabled>Selecione uma opção</option>
                <option value="Cirurgia Geral">Cirurgia Geral</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Neurologia">Neurologia</option>
              </select>
              <p className="error">Nome obrigatório</p>
            </div>

            <div className="inputGroup">
              <label htmlFor="observacoes">Observações</label>
              <textarea
                name="obervacoes"
                id="observacoes"
                placeholder="Desejo..."
                name="observacoes"
                value={formData.observacoes}
                onChange={handleChange}
              ></textarea>
              <p className="error">Nome obrigatório</p>
            </div>
          </div>

          <button>Confirmar agendamento</button>
        </form>
      </div>
    </>
  );
}
