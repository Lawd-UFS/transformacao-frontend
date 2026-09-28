import React from 'react';
import heroImg from '../../assets/empresas-parceiras/hero-parceiras.jpg';
import capaceteImg from '../../assets/empresas-parceiras/icone-capacete.png';
import apertoMaoImg from '../../assets/empresas-parceiras/icone-aperto-de-mao.png';
import { SecaoParcerias } from '../../components/SecaoParcerias/SecaoParcerias';
import { MolduraImagem } from '../../components/MolduraImagem/MolduraImagem';
import hachuraImg from '../../assets/compartilhado/hachura.png';

import './Parceiras.css';

const FORM_LINK = 'https://forms.gle/CcR9Pazuqb7WXuQWA';

export const Parceiras: React.FC = () => {
  return (
    <div className="parceiras-page">
      {/* 1. Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay" />
        <div className="container hero-body">
          <h1 className="hero-title">
            Torne-se uma<br />
            <span className="hero-title-highlight">empresa parceira</span>
          </h1>
        </div>
      </section>

      {/* 2. Introdução */}
      <section className="parceiras-intro-section container">
        <div className="parceiras-intro-card">
          <p className="parceiras-intro-text">
            Quando uma empresa se torna parceira do Projeto TransformAção, ela nos
            ajuda a tornar possíveis as nossas ações e contribui diretamente para
            levarmos dignidade e novas oportunidades às famílias que atendemos.
          </p>
          <p className="parceiras-intro-text destaque">
            Cada parceria tem um impacto real e faz diferença na vida de muitas
            pessoas.
          </p>
          <div className="parceiras-intro-cta">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="parceiras-primary-btn"
            >
              Quero ser parceiro
            </a>
          </div>
        </div>
      </section>

      {/* 3. Como sua empresa pode participar? */}
      <section className="como-participar-section container">
        <h2 className="como-participar-titulo">Como sua empresa pode participar?</h2>

        <div className="como-participar-descricao">
          <p>
            Existem diferentes formas de uma empresa contribuir conosco.{' '}
            <strong>
              Sua empresa pode escolher apoiar uma obra específica ou contribuir com o
              projeto como um todo
            </strong>
            , ajudando a tornar possíveis as transformações que realizamos junto às
            famílias atendidas.
          </p>
          <p>
            <strong>
              Essa contribuição pode acontecer por meio de materiais para as obras,
              mobiliário, mão de obra, apoio financeiro ou outras formas de
              colaboração.
            </strong>{' '}
            Estamos abertos para conversar, entender como sua empresa pode contribuir
            e construir juntos uma parceria que faça sentido para todos e esteja
            alinhada ao propósito do projeto.
          </p>
        </div>

        <div className="como-participar-cards">
          {/* Card 1: Apoie uma obra */}
          <div className="participar-card">
            <div className="participar-card-icon-col">
              <img
                src={capaceteImg}
                alt="Ícone Capacete de Construção"
                className="participar-card-icon"
              />
            </div>
            <div className="participar-card-content">
              <h3 className="participar-card-titulo">
                <span>Apoie uma obra</span>
              </h3>
              <p>
                Sua empresa pode escolher apoiar uma obra específica, contribuindo
                diretamente para uma transformação.{' '}
                <strong>
                  Nesse formato, a parceria é voltada para aquela obra e suas
                  necessidades, podendo ser encerrada após a conclusão da ação ou
                  retomada em uma nova oportunidade.
                </strong>
              </p>
              <p>
                É uma forma de contribuir diretamente com uma família e fazer parte de
                uma transformação pontual.
              </p>
            </div>
          </div>

          {/* Card 2: Seja parceiro do projeto */}
          <div className="participar-card participar-card-reverse">
            <div className="participar-card-content">
              <h3 className="participar-card-titulo">
                <span>Seja parceiro do projeto</span>
              </h3>
              <p>
                Sua empresa também pode escolher caminhar conosco de forma contínua,
                tornando-se uma parceira que contribui ao longo das nossas ações.
                Nesse formato, construímos uma relação de confiança e parceria,
                fortalecendo nossos vínculos ao longo do tempo.
              </p>
              <p>
                <strong>
                  A cada nova obra ou ação, conversamos sobre as necessidades do
                  momento e as possibilidades de contribuição, trabalhando juntos
                  para ampliar o impacto gerado para as famílias atendidas.
                </strong>
              </p>
            </div>
            <div className="participar-card-icon-col">
              <img
                src={apertoMaoImg}
                alt="Ícone Aperto de Mãos"
                className="participar-card-icon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefícios */}
      <section className="beneficios-section container">
        <h2 className="beneficios-titulo">
          Benefícios de ser nosso{' '}
          <span className="beneficios-titulo-destaque">parceiro</span>
        </h2>

        <div className="beneficios-grid">
          <div className="beneficios-imagem-col">
            <MolduraImagem />
          </div>

          <div className="beneficios-lista-col">
            <div className="beneficio-card">
              <span className="beneficio-texto">1. Melhora a reputação da sua marca</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">2. Amplia a visibilidade da sua empresa</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">3. Ajuda na descoberta de novos talentos</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">4. Fortalece os valores e propósitos</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">5. Engaja os colaboradores</span>
            </div>
            <div className="beneficio-card">
              <span className="beneficio-texto">6. Amplia e fortalece o Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Conheça algumas empresas parceiras */}
      <SecaoParcerias
        titulo={
          <>
            Conheça algumas<br />
            empresas <span className="secao-parcerias-titulo-destaque">parceiras</span>
          </>
        }
      />

      {/* 6. Time CTA */}
      <section className="time-cta-section">
        <div className="time-cta-container container">
          <h2 className="time-cta-titulo">
            Faça parte do <span className="time-cta-highlight">time</span> TransformAção!
          </h2>
          <p className="time-cta-subtitulo">
            Nos ajude a continuar levando dignidade e esperança para mais famílias.
          </p>

          <div className="time-cta-button-wrapper">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="time-cta-btn"
            >
              Quero ser parceiro
            </a>
            <div className="time-cta-sparkles">
              <img
                src={hachuraImg}
                alt="Hachura decorativa"
                className="time-cta-hachura-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
