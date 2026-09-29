import React from 'react';
import { Timeline } from '../../components/Timeline/Timeline';
import { ComoFunciona } from '../../components/ComoFunciona/ComoFunciona';
import { SecaoFacaParte } from '../../components/SecaoFacaParte/SecaoFacaParte';
import heroImg from '../../assets/quem-somos/banner-quem-somos.jpg';
import aboutLeftImg from '../../assets/quem-somos/imagem-1-quem-somos.jpg';
import aboutRight1Img from '../../assets/quem-somos/imagem-2-quem-somos.jpg';
import aboutRight2Img from '../../assets/quem-somos/imagem-3-quem-somos.jpg';
import galeria1Img from '../../assets/quem-somos/galeria-1-quem-somos.jpg';
import galeria2Img from '../../assets/quem-somos/galeria-2-quem-somos.png';
import galeria3Img from '../../assets/quem-somos/galeria-3-quem-somos.png';
import galeria4Img from '../../assets/quem-somos/galeria-4-quem-somos.jpg';
import galeria5Img from '../../assets/quem-somos/galeria-5-quem-somos.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './QuemSomos.css';

const timelineEvents = [
  {
    year: '2019',
    title: 'O Início',
    description: 'Começamos com pequenas ações sociais, realizadas por um grupo de amigos, nos bairros mais carentes da nossa cidade. Através delas, percebemos que muitas famílias viviam em casas que comprometiam sua segurança e saúde, e assim nasceu o sonho de devolver dignidade através de um lar seguro.',
  },
  {
    year: '2019',
    title: 'Parceria',
    description: 'Nesse mesmo ano, iniciamos nosso primeiro projeto em parceria com a Base Colaborativa, organização que fomenta projetos sociais.',
  },
  {
    year: '2020',
    title: 'Primeira Transformação',
    description: 'Mesmo com a pandemia, não paramos e aprendemos a ajudar de forma segura e remota, realizando pequenas ações e arrecadações enquanto preparávamos nosso primeiro mutirão. Após semanas de planejamento, doações e muito amor, entregamos nossa primeira casa reformada.',
  },
  {
    year: '2021 à\n2024',
    title: 'Expansão e Impacto',
    description: 'Com a divulgação das ações, conseguimos alcançar novas empresas parceiras e novos voluntários. Criamos critérios técnicos e sociais de avaliação e seleção das famílias, e nesse período conseguimos entregar mais cinco imóveis reformados com segurança e dignidade.',
  },
  {
    year: '2025',
    title: 'Reconhecimento',
    description: 'Nossas ações foram se concretizando e repercutindo positivamente. Aumentamos nosso portfólio de ações, nossa credibilidade e transparência, sempre pautados no respeito e na imersão dos voluntários em realidades totalmente distintas. Nesse mesmo ano, realizamos a entrega da nossa sexta casa.',
  },
  {
    year: '2026',
    title: 'Consolidação',
    description: 'Em fevereiro de 2026, realizamos nossa primeira assembleia de fundação da Organização da Sociedade Civil (OSC), entidade sem fins lucrativos denominada Projeto Transformação. A partir dessa nova etapa, seguimos ainda mais firmes e esperamos contribuir de forma mais eficiente em nossas ações, pois cada tijolo e cada pintura representam esperança renovada para cada família que merece um lar digno.',
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
            <img src={aboutLeftImg} alt="TransformAção 1" className="intro-team-photo" loading="lazy" decoding="async" />
          </div>
          <div className="intro-text">
            <p className="regular-text">
              <strong>
                O Projeto TransformAção surgiu por meio de pequenas ações para melhorar a qualidade de vida de famílias que se encontram em situação de vulnerabilidade social por conta de suas moradias.
              </strong>
              <br />
              <br />
              Essas ações foram realizadas com alguns voluntários e profissionais de diferentes áreas, unidos pelo mesmo propósito de levar mais dignidade e proporcionar um ambiente saudável às famílias que não possuem condições financeiras para realizar reformas ou melhorias em suas casas.
            </p>
          </div>
        </div>

        <div className="intro-content reverse">
          <div className="intro-image-wrapper">
            <img src={aboutRight1Img} alt="TransformAção 2" className="intro-team-photo" loading="lazy" decoding="async" />
          </div>
          <div className="intro-text">
            <p className="regular-text">
              Em 2019, iniciamos nossas atividades contando apenas com um grupo de amigos e alguns empresários locais. Conseguimos nossa primeira transformação e, a partir daí, o projeto tomou corpo e avançou para atender mais famílias.
              <br />
              <br />
              <strong>Hoje somos uma OSC - Organização da Sociedade Civil, e mais parceiros aderiram ao projeto</strong> por acreditarem que uma moradia digna vai além da estrutura física: representa segurança, acolhimento, bem-estar e a possibilidade de um novo começo para quem vive naquele espaço.
            </p>
          </div>
        </div>

        <div className="intro-content">
          <div className="intro-image-wrapper">
            <img src={aboutRight2Img} alt="TransformAção 3" className="intro-team-photo" loading="lazy" decoding="async" />
          </div>
          <div className="intro-text">
            <p className="regular-text">
              Atualmente, nossas ações contam com voluntários de diferentes profissões, que buscam contribuir também para a inclusão social e o desenvolvimento comunitário, fortalecendo vínculos e incentivando o envolvimento da comunidade.
              <br />
              <br />
              <strong>Mas acreditamos que a transformação não acontece apenas para quem é atendido pelo projeto. Ela também alcança quem escolhe fazer parte dele.</strong>
              <br />
              <br />
              Por meio do trabalho voluntário e das ações em grupo, nossos voluntários têm a oportunidade de compartilhar conhecimentos, aprender com diferentes experiências e contribuir para uma mudança coletiva.
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
            {[galeria1Img, galeria2Img, galeria3Img, galeria4Img, galeria5Img].map((imgSrc, index) => (
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

      <ComoFunciona />

      <section className="timeline-section container">
        <h2 className="section-title center">Nossa trajetória</h2>
        <Timeline events={timelineEvents} />
      </section>

      <SecaoFacaParte exibirGaleria={false} />
    </div>
  );
};
