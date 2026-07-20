import React from 'react';
import { Timeline } from '../../components/Timeline/Timeline';

import './QuemSomos.css';

const timelineEvents = [
  {
    year: '2020',
    title: 'O Início',
    description: 'Fundação do projeto em Aracaju, movido pelo desejo de unir voluntariado e moradia digna.',
  },
  {
    year: '2021',
    title: 'Primeiras Transformações',
    description: 'Início das primeiras reformas e estruturação da equipe, estabelecendo os pilares das nossas operações.',
  },
  {
    year: '2023',
    title: 'Expansão e Impacto',
    description: 'Conclusão da reforma da Casa de Ana em Nossa Sra. do Socorro, fortalecendo a rede de parceiros.',
  },
  {
    year: '2024',
    title: 'Reconhecimento',
    description: 'Execução da Casa de Michelle e ampliação da equipe técnica (Engenharia e Arquitetura).',
  },
  {
    year: '2026',
    title: 'Consolidação',
    description: 'Lançamento da nova plataforma digital para divulgação e gestão do projeto.',
  },
];

export const QuemSomos: React.FC = () => {
  return (
    <div className="quem-somos-page">
      <section className="hero-section hero-placeholder">
        <div className="hero-overlay" />
        <div className="container hero-body">
          <h1 className="hero-title">Nossa<br/>história</h1>
        </div>
      </section>

      <section className="intro-section container">
        <div className="intro-content">
          <div className="intro-image-wrapper">
            <div className="intro-image-placeholder">Imagem da Equipe</div>
          </div>
          <div className="intro-text">
            <p className="highlight-text">
              Somos uma organização sem fins lucrativos, formada por voluntários de diversas áreas e dedicada a
              <strong> transformar a realidade de famílias em situação de vulnerabilidade por meio de reformas e pequenas construções.</strong>
            </p>
            <p className="regular-text">
              Desde 2020, realizamos transformações em Aracaju/SE e região, atuando
              <strong> de forma independente com foco em moradia digna, inclusão social e compromisso com a comunidade.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="como-comecou-section container">
        <h2 className="section-title center">Como tudo <span className="text-secondary">começou</span></h2>
        <p className="como-comecou-text">Contar a história de como o projeto nasceu.</p>
      </section>

      <section className="identity-section">
        <div className="identity-cards">
          <div className="identity-card full-width">
            <div className="card-header">
              <h2 className="card-title">Missão</h2>
            </div>
            <div className="card-body">
              <p>Transformar a realidade de famílias em situação de vulnerabilidade através do trabalho voluntário, promovendo moradia digna e inclusão social, além de inspirar pessoas a serem agentes de mudança e transformação.</p>
            </div>
          </div>
          
          <div className="identity-row">
            <div className="identity-card half-width">
              <div className="card-header">
                <h2 className="card-title">Visão</h2>
              </div>
              <div className="card-body">
                <p>Ampliar nosso impacto social em Sergipe, levando moradia digna, esperança e transformação para cada vez mais famílias e comunidades.</p>
              </div>
            </div>

            <div className="identity-card half-width">
              <div className="card-header">
                <h2 className="card-title">Valores</h2>
              </div>
              <div className="card-body">
                <ul className="valores-list">
                  <li>Transparência</li>
                  <li>Solidariedade</li>
                  <li>Ética</li>
                  <li>Independência</li>
                  <li>Compromisso social</li>
                  <li>Dignidade humana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collage-section container">
        <div className="collage-grid">
          <div className="placeholder-image collage-photo">Imagem Reforma 1</div>
          <div className="placeholder-image collage-photo">Imagem Reforma 2</div>
          <div className="placeholder-image collage-photo">Imagem Reforma 3</div>
        </div>
      </section>

      <section className="timeline-section container">
        <h2 className="section-title center">Nossa trajetória</h2>
        <Timeline events={timelineEvents} />
      </section>
    </div>
  );
};
