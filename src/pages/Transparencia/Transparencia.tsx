import React from 'react';
import heroImg from '../../assets/transparencia/banner-transparencia.jpg';
import cardLogo from '../../assets/transparencia/logo-icone.png';
import teamImg from '../../assets/transparencia/foto-grupo-transparencia.jpg';
import './Transparencia.css';

export const Transparencia: React.FC = () => {
  return (
    <div className="transparencia-page">
      {/* Hero Section */}
      <section className="transparencia-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="transparencia-hero-overlay" />
        <div className="container transparencia-hero-body">
          <h1 className="transparencia-hero-title">
            Transpa<br />rência
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="transparencia-content-section">
        <div className="container transparencia-container">
          <p className="transparencia-description">
            Acreditamos que a <strong>transparência é fundamental para fortalecer a confiança de voluntários, parceiros, doadores e da sociedade</strong>, demonstrando nosso compromisso com a responsabilidade e a boa gestão do projeto.
          </p>

          {/* Portfolio Download Card */}
          <div className="transparencia-portfolio-card">
            <div className="transparencia-card-header">
              <img src={cardLogo} alt="Símbolo do Projeto TransformAção" className="transparencia-card-icon" />
              <h2 className="transparencia-card-title">Portfólio</h2>
            </div>
            <a
              href="/docs/portfolio-transformacao.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transparencia-download-btn"
              aria-label="Baixar Portfólio do Projeto TransformAção em PDF"
            >
              Baixar
            </a>
          </div>

          {/* Framed Team Picture */}
          <div className="transparencia-image-wrapper">
            <img
              src={teamImg}
              alt="Voluntários do Projeto TransformAção reunidos"
              className="transparencia-team-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
