import React, { useEffect, useState } from 'react';
import hachura from '../../../assets/compartilhado/hachura.png';
import { FORMULARIO_VOLUNTARIO_URL } from '../formulario';
import './Depoimentos.css';

interface Depoimento {
  texto: string;
  autor: string;
}

const depoimentos: Depoimento[] = [
  {
    texto:
      'Sou muito grato de poder ajudar em um projeto como o Transformação, pois conseguimos levar melhores condições de vida para as pessoas que não possuem o mínimo necessário para poder viver',
    autor: 'Luiz | Equipe de comunicação',
  },
  {
    texto:
      'Participar do projeto é enxergar de perto o impacto de cada ação. Cada entrega e cada conversa mostram que pequenos gestos mudam realidades.',
    autor: 'Mariana | Voluntária',
  },
  {
    texto:
      'O voluntariado me aproximou de pessoas incríveis e me fez entender que solidariedade também é construção de futuro.',
    autor: 'João | Apoio logístico',
  },
];

const INTERVALO_TROCA_MS = 5000;

export const Depoimentos: React.FC = () => {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const depoimentoAtual = depoimentos[indiceAtivo];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtivo((indice) => (indice === depoimentos.length - 1 ? 0 : indice + 1));
    }, INTERVALO_TROCA_MS);

    return () => clearInterval(intervalo);
  }, []);

  const irParaAnterior = () => {
    setIndiceAtivo((indice) => (indice === 0 ? depoimentos.length - 1 : indice - 1));
  };

  const irParaProximo = () => {
    setIndiceAtivo((indice) => (indice === depoimentos.length - 1 ? 0 : indice + 1));
  };

  return (
    <section className="depoimentos" aria-label="Depoimentos dos voluntários">
      <h2 className="depoimentos-chamada">
        Faça parte do <span className="depoimentos-chamada-destaque">time</span> transformação!
      </h2>

      <div className="depoimentos-cta">
        <a
          href={FORMULARIO_VOLUNTARIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="depoimentos-cta-btn"
        >
          Quero ser voluntário
        </a>
        <span className="depoimentos-cta-hachura" aria-hidden="true">
          <img src={hachura} alt="" />
        </span>
      </div>

      <div className="depoimentos-carrossel">
        <button
          type="button"
          className="depoimentos-seta depoimentos-seta-anterior"
          onClick={irParaAnterior}
          aria-label="Depoimento anterior"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <article className="depoimento-card" aria-live="polite">
          <h3 className="depoimento-titulo">Depoimento dos voluntários</h3>
          <blockquote className="depoimento-texto">
            <p>{depoimentoAtual.texto}</p>
          </blockquote>
          <p className="depoimento-autor">{depoimentoAtual.autor}</p>
        </article>

        <button
          type="button"
          className="depoimentos-seta depoimentos-seta-proximo"
          onClick={irParaProximo}
          aria-label="Próximo depoimento"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
};
