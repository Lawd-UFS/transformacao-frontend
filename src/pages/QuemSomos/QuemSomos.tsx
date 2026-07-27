import React from 'react';
import { Timeline } from '../../components/Timeline/Timeline';
import heroImg from '../../assets/quem-somos/banner-quem-somos.png';
import aboutLeftImg from '../../assets/quem-somos/imagem-1-quem-somos.png';
import aboutRight1Img from '../../assets/quem-somos/imagem-2-quem-somos.png';
import aboutRight2Img from '../../assets/quem-somos/imagem-3-quem-somos.png';
import carrossel1Img from '../../assets/quem-somos/carrossel-1-quem-somos.png';
import carrossel2Img from '../../assets/quem-somos/carrossel-2-quem-somos.png';
import carrossel3Img from '../../assets/quem-somos/carrossel-3-quem-somos.png';
import carrossel4Img from '../../assets/quem-somos/carrossel-4-quem-somos.png';
import carrossel5Img from '../../assets/quem-somos/carrossel-5-quem-somos.jpg';
import carrossel6Img from '../../assets/quem-somos/carrossel-6-quem-somos.jpg';
import carrossel7Img from '../../assets/quem-somos/carrossel-7-quem-somos.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    description: 'Fundação do projeto em Aracaju, movido pelo desejo de unir voluntariado e moradia digna.',
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
      <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay" />
        <div className="container hero-body">
          <h1 className="hero-title">Nossa<br/>história</h1>
        </div>
      </section>

      <section className="intro-section container">
        <div className="intro-content">
          <div className="intro-image-wrapper">
            <img src={aboutLeftImg} alt="TransformAção 1" className="intro-team-photo" />
          </div>
          <div className="intro-text">
            <p className="regular-text">
              O Projeto <strong>TransformAção</strong> surgiu através de pequenas ações pontuais para melhoria da qualidade de vida de famílias que se encontram em vulnerabilidade social por conta de suas moradias, através de amigos (voluntários e profissionais) de várias áreas com o mesmo intuito de ajudar essas pessoas que não possuem condições financeiras para realizar reformas ou melhorias em suas casas, e por esse motivo tem sua dignidade afetada pela falta de um ambiente saudável para suas famílias.
            </p>
          </div>
        </div>

        <div className="intro-content reverse">
          <div className="intro-image-wrapper">
            <img src={aboutRight1Img} alt="TransformAção 2" className="intro-team-photo" />
          </div>
          <div className="intro-text">
            <p className="regular-text">
              No ano de 2019 iniciamos nossas atividades informalmente, contando apenas com um grupo de amigos e alguns empresários locais, conseguimos nossa primeira transformação, a partir daí o projeto tomou corpo e avançou para atender mais famílias, hoje somos uma <strong>OSC - Organização da Sociedade Civil</strong>, e mais parceiros aderiram ao projeto por acreditar que uma moradia digna vai além da estrutura física.
              <br /> 
              Ela representa segurança, acolhimento, bem-estar e a possibilidade de um novo começo para quem vive naquele espaço.
            </p>
          </div>
        </div>

        <div className="intro-content">
          <div className="intro-image-wrapper">
            <img src={aboutRight2Img} alt="TransformAção 3" className="intro-team-photo" />
          </div>
          <div className="intro-text">
            <p className="regular-text">
              As nossas ações sem fins lucrativos, são formadas por voluntários de diferentes profissões, dedicados(as) a transformar a realidade de famílias em situação de vulnerabilidade, promovendo moradia digna, inclusão social e desenvolvimento comunitário.
              <br />
              Através das ações voluntárias, conseguimos transformar além da moradia e das famílias beneficiadas, buscando também a transformação dos voluntários através do envolvimento social e das ações em grupo.
            </p>
          </div>
        </div>
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

      <section className="reformas-carousel-section container">
        <div className="reformas-carousel-wrapper">
          <div className="swiper-button-prev custom-swiper-prev"></div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="reformas-swiper"
          >
            {[carrossel1Img, carrossel2Img, carrossel3Img, carrossel4Img, carrossel5Img, carrossel6Img, carrossel7Img].map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="reforma-slide-content">
                  <img src={imgSrc} alt={`Reforma ${index + 1}`} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next custom-swiper-next"></div>
        </div>
      </section>

      <section className="timeline-section container">
        <h2 className="section-title center">Nossa trajetória</h2>
        <Timeline events={timelineEvents} />
      </section>
    </div>
  );
};
