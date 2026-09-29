import React from 'react';
import heroImg from '../../assets/midia/banner-midia.jpg';
import tvAtalaiaImg from '../../assets/midia/tv-atalaia.jpg';
import jornalDoDiaImg from '../../assets/midia/jornal-do-dia.jpg';
import vidaOnlineImg from '../../assets/midia/vida-online.jpg';
import prefeituraImg from '../../assets/midia/prefeitura-sergipe.jpg';
import './Midia.css';

interface MidiaItem {
  id: string;
  title: string;
  image: string;
  link: string;
  alt: string;
}

const midiaItems: MidiaItem[] = [
  {
    id: 'tv-atalaia',
    title: 'TV Atalaia',
    image: tvAtalaiaImg,
    link: 'https://www.youtube.com/watch?v=psBF_HY2lak',
    alt: 'Reportagem da TV Atalaia sobre o Projeto TransformAção',
  },
  {
    id: 'jornal-do-dia',
    title: 'Jornal do dia SE',
    image: jornalDoDiaImg,
    link: 'https://jornaldodiase.com.br/coluna-sociedade-20-08-2022/',
    alt: 'Matéria do Jornal do Dia SE sobre o Projeto TransformAção',
  },
  {
    id: 'vida-on-line',
    title: 'Vida On Line',
    image: vidaOnlineImg,
    link: 'https://www.instagram.com/p/DQogoG5EZOF/?igsh=MXUwYmh2NGtzdHljcQ==',
    alt: 'Publicação do Vida On Line destacando o Projeto TransformAção',
  },
  {
    id: 'prefeitura-sergipe',
    title: 'Prefeitura de Sergipe',
    image: prefeituraImg,
    link: 'https://www.aracaju.se.gov.br/noticias/96521/em_parceria,_prefeitura_garante_reinsercao_social_de_usuarios_da_casa_lar.html',
    alt: 'Notícia da Prefeitura de Aracaju sobre reinserção social e o Projeto TransformAção',
  },
];

export const Midia: React.FC = () => {
  return (
    <div className="midia-page">
      {/* Hero Section */}
      <section className="midia-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="midia-hero-overlay" />
        <div className="container midia-hero-body">
          <h1 className="midia-hero-title">
            <span className="midia-hero-word">TransformAção</span>
            <span className="midia-hero-sub">na <span>mídia</span></span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="midia-content-section">
        <div className="container midia-container">
          <p className="midia-description">
            Nesta página, <strong>reunimos reportagens, entrevistas e publicações</strong> que registram parte da nossa história e ajudam a ampliar a visibilidade do trabalho desenvolvido junto às famílias atendidas.
          </p>

          {/* Grid of Media Cards */}
          <div className="midia-grid">
            {midiaItems.map((item) => (
              <article key={item.id} className="midia-card">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="midia-card-image-link"
                  aria-label={`Ver matéria: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="midia-card-img"
                    loading="lazy"
                  />
                </a>

                <div className="midia-card-body">
                  <h2 className="midia-card-title">{item.title}</h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="midia-card-btn"
                  >
                    Ver publicação
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
