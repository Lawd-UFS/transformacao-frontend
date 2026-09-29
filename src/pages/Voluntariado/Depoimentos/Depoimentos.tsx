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
      'Fazer parte do TransformAção é, além de gratificante, um compromisso muito bonito com a sociedade: poder levar melhores condições de vida para as pessoas que não possuem o mínimo para viver e enfrentam grandes dificuldades no dia a dia. Fico feliz de poder fazer parte desse projeto e espero poder também influenciar muitas outras pessoas, para alcançarmos ainda mais famílias.',
    autor: 'Luiz Felipe | Equipe de comunicação',
  },
  {
    texto:
      'Para mim, a arquitetura sempre foi uma ferramenta de dignidade, mas no Projeto TransformAção ela ganhou uma alma. Reformar o lar de famílias em vulnerabilidade vai muito além de erguer paredes; é devolver o respeito, a segurança e a esperança a quem mais precisa. Ver o brilho no olhar de uma mãe ou de uma criança ao receber uma casa segura ressignifica totalmente a minha profissão. No final, quem é verdadeiramente transformada sou eu.',
    autor: 'Roselaine Pereira | Equipe de Arquitetura e Engenharia',
  },
  {
    texto:
      'Sou voluntária desde a segunda obra e fazer parte do TransformAção é uma honra! Esse projeto não transforma apenas a vida das famílias, mas também a de cada voluntário. Como psicóloga, poder usar minha profissão na parte psicossocial do TransformAção me enche de orgulho e, a cada obra, me sinto ainda mais motivada a seguir com resiliência e dedicação!',
    autor: 'Paula Bidegain | Equipe de Psicossocial',
  },
  {
    texto:
      'Sou voluntária desde a quarta obra aqui do TransformAção. Nesse tempo, vivi momentos especiais, conheci pessoas incríveis e me emocionei em cada obra. Eu fico muito feliz em fazer parte de um projeto voluntário tão bonito como esse e de poder ajudar a transformar a vida de várias famílias.',
    autor: 'Beatriz Batista | Equipe de comunicação',
  },
  {
    texto:
      'Fazer parte do Projeto TransformAção é acreditar que solidariedade, união e trabalho voluntário podem mudar vidas. Nessa trajetória, acompanhei de perto histórias marcadas por desafios, mas também por esperança, acolhimento e recomeços. Cada obra realizada representa dignidade, cuidado, união e é inspirador ver tantas pessoas unidas pelo mesmo propósito, doando tempo, conhecimento e amor ao próximo.',
    autor: 'Daniella Vivas Gonçalves | Equipe Jurídica',
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
