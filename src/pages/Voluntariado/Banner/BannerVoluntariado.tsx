import React from 'react';
import heroImg from '../../../assets/compartilhado/hero-voluntarios.jpg';
import './BannerVoluntariado.css';

export const BannerVoluntariado: React.FC = () => {
  return (
    <section
      className="voluntariado-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Sua ação transforma vidas"
    >
      <div className="voluntariado-hero-overlay" />
      <div className="container voluntariado-hero-body">
        <h1 className="voluntariado-hero-titulo">
          <span className="voluntariado-hero-destaque">
            Sua ação
            <br />
            transforma
          </span>
          <br />
          vidas
        </h1>
      </div>
    </section>
  );
};
