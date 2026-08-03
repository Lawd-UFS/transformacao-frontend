import React from "react";
import heroImg from "../../assets/empresas-parceiras/hero-voluntarios.jpg";
import { SecaoParcerias } from "../../components/SecaoParcerias/SecaoParcerias";

import "./Parceiras.css";

export const Parceiras: React.FC = () => {
  return (
    <div className="parceiras-page">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay" />
        <div className="container hero-body">
          <h1 className="hero-title">
            Torne-se uma
            <br />
            <span className="hero-title-highlight">
              empresa <br /> parceira
            </span>
          </h1>
        </div>
      </section>

      <SecaoParcerias />
    </div>
  );
};
