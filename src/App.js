import { useState } from "react";
import "./styles.css";

export default function App() {
  const [pacientes, setPacientes] = useState([]);

  function adicionarPaciente(event) {
    event.preventDefault();
    const nome = event.target.elements.nome.value;
    const novoPaciente = { nome };
    setPacientes([...pacientes, novoPaciente]);
    event.target.reset();
  }

  return (
    <>
      <nav className="navbar bg-danger mb-3">
        <div className="container">
          <img src="logo.png" alt="Logo" width="60px" />
          <span className="navbar-brand mb-0 h1 text-white">
            Odonto Avenida
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="dentista.jpg" alt="Dentista" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h3 className="text-primary">
              Controle dos pacientes a serem atendidos
            </h3>

            <form className="row" onSubmit={adicionarPaciente}>
              <div className="col-md-6">
                <label htmlFor="nome" className="form-label">
                  Nome do Paciente:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="Nome Completo"
                  required
                />
              </div>
              <div className="col-md-2 d-grid">
                <input
                  type="submit"
                  value="Adicionar"
                  className="btn btn-lg btn-primary mt-4"
                />
              </div>
              <div className="col-md-2 d-grid">
                <input
                  type="button"
                  value="Urgência"
                  className="btn btn-lg btn-danger mt-4"
                  id="btUrgencia"
                />
              </div>
              <div className="col-md-2 d-grid">
                <input
                  type="button"
                  value="Atender"
                  className="btn btn-lg btn-success mt-4"
                  id="btAtender"
                />
              </div>
            </form>

            <h3 className="text-success my-3">
              Paciente em Atendimento:
              <span className="text-danger" id="spanAtende"></span>
            </h3>

            <h3 className="text-secondary my-3">
              Lista dos Pacientes na Fila de Espera
            </h3>

            <ol className="text-secondary fs-4 fst-italic">
              {pacientes.map((paciente, index) => (
                <li key={index}>{paciente.nome}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
