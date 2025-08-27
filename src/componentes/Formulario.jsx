import { useState } from 'react';

import './Formulario.css'
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

    const handleChange = (evento) => {
        const { name, value } = evento.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <div className="container">
                <aside>
                    <div className="aside-info">
                    <h1>Preenchimento de formulário com React</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab in eligendi, possimus, reiciendis sequi numquam quibusdam fugit quis harum illum error consequuntur rerum officia. Doloribus, hic! Alias, quidem beatae!</p>
                </div>
                </aside>
                <form action="">
                    <h2>Formulário</h2>
                    <div className="inputGroup">
                        <label htmlFor="nomeCompleto">Nome completo</label>
                        <input type="text" id="nomeCompleto" placeholder="João Soares"
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="joaosoares123@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" placeholder="11 99111 1111"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="dataConsulta">Data da consulta</label>
                        <input type="date" id="dataConsulta" placeholder="01/01/2025"
                            value={formData.dataConsulta}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="horaConsulta">Hora da consulta</label>
                        <input type="date-time" id="horaConsulta" placeholder="12:00"
                            value={formData.horaConsulta}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="especialidade">Especialidade</label>
                        <select name="especialidades" id="especialidade"
                            value={formData.especialidadeDesejada}
                            onChange={handleChange}
                        >
                            <option value="opcao-1">Não sei</option>
                            <option value="opcao-2">Não sei</option>
                            <option value="opcao-3">Não sei</option>
                        </select>
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="observacoes">Observações</label>
                        <textarea name="obervacoes" id="observacoes" placeholder="Desejo..."
                            value={formData.observacoes}
                            onChange={handleChange}
                        >

                        </textarea>
                    </div>

                    <button>Confirmar agendamento</button>
                </form>
            </div>
        </>
    )
}