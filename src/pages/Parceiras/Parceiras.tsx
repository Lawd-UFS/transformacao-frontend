import React from 'react';
import heroImg from '../../assets/empresas-parceiras/hero-voluntarios.jpg';
import { SecaoParcerias } from '../../components/SecaoParcerias/SecaoParcerias';
import { MolduraImagem } from '../../components/MolduraImagem/MolduraImagem';
import hachuraImg from '../../assets/compartilhado/hachura.png';

import './Parceiras.css';

export const Parceiras: React.FC = () => {
  return (
    <div className="parceiras-page">
      <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay" />
        <div className="container hero-body">
          <h1 className="hero-title">Torne-se uma<br/><span className="hero-title-highlight">empresa parceira</span></h1>
        </div>
      </section>

      <SecaoParcerias />

      <section className="beneficios-section container">
        <h2 className="beneficios-titulo">
          Benefícios de ser nosso <span className="beneficios-titulo-destaque">parceiro</span>
        </h2>
        
        <div className="beneficios-grid">
          <div className="beneficios-imagem-col">
            <MolduraImagem />
          </div>
          
          <div className="beneficios-lista-col">
            <div className="beneficio-card">
              <span className="beneficio-texto">1. Melhore a reputação da sua marca</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">2. Visibilidade constante da empresa</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">3. Descoberta de novos talentos</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">4. Fortalece os valores e propósitos</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">5. Engajamento dos colaboradores</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">6. Fortalece o Network</span>
            </div>
          </div>
        </div>
      </section>

      <section className="time-cta-section">
        <div className="time-cta-container container">
          <h2 className="time-cta-titulo">
            Faça parte do <span className="time-cta-highlight">time</span> transformação!
          </h2>
          
          <div className="time-cta-button-wrapper">
            <a 
              href="https://forms.gle/CcR9Pazuqb7WXuQWA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="time-cta-btn"
            >
              Quero ser parceiro
            </a>
            <div className="time-cta-sparkles">
              <img src={hachuraImg} alt="Hachura decorativa" className="time-cta-hachura-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
