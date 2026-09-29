import React from 'react';
import grupoVoluntarios from '../../../assets/voluntariado/grupo-voluntarios.jpg';
import { FORMULARIO_VOLUNTARIO_URL } from '../formulario';
import './SejaVoluntario.css';

export const SejaVoluntario: React.FC = () => {
  return (
    <section className="seja-voluntario container" aria-label="Seja voluntário">
      <div className="seja-voluntario-grid">
        <div className="seja-voluntario-texto">
          <h2 className="seja-voluntario-titulo">
            Somos um projeto formado por pessoas como{' '}
            <span className="seja-voluntario-destaque">você</span>
          </h2>
          <p className="seja-voluntario-descricao">
            <strong>Voluntários de diferentes idades e áreas de atuação</strong>, unidos pelo
            propósito de levar dignidade, conforto e esperança a famílias em situação de
            vulnerabilidade social.
          </p>
          <a
            href={FORMULARIO_VOLUNTARIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="seja-voluntario-btn"
          >
            Quero ser voluntário
          </a>
        </div>

        <figure className="seja-voluntario-foto">
          <img src={grupoVoluntarios} alt="Grupo de voluntários do Transformação" />
        </figure>
      </div>
    </section>
  );
};
