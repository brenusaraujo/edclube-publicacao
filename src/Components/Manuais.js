import React from "react";
import "./Manuais.css";
import ManualCarro from "../Assets/EDCLUBE - PARTICULAR.pdf";
import ManualMoto from "../Assets/EDCLUBE - MOTOS.pdf";

const Manuais = () => {
  return (
    <section className="manuals-section" id="manuais">
      <div className="manuals-container">
        <h2 className="section-title">Nossos Manuais</h2>
        <p className="section-subtitle">
          Acesse os regulamentos completos e tire todas as suas dúvidas sobre os
          benefícios e condições do seu plano de proteção.
        </p>
        <div className="manuals-grid">
          {/* Card para Veículos Particulares */}
          <a
            href={ManualCarro}
            target="_blank"
            rel="noopener noreferrer"
            className="manual-card"
          >
            <div className="manual-icon">
              <i className="fa-solid fa-car"></i>
            </div>
            <h3 className="manual-title">Manual para Veículos</h3>
            <p className="manual-description">
              Consulte as regras do programa de rateio para veículos
              particulares.
            </p>
            <span className="manual-download-button">
              Visualizar Manual <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>

          {/* Card para Motos */}
          <a
            href={ManualMoto}
            target="_blank"
            rel="noopener noreferrer"
            className="manual-card"
          >
            <div className="manual-icon">
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <h3 className="manual-title">Manual para Motos</h3>
            <p className="manual-description">
              Consulte as regras do programa de rateio exclusivo para
              motocicletas.
            </p>
            <span className="manual-download-button">
              Visualizar Manual <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manuais;
