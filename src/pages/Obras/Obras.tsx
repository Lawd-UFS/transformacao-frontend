import React, { useMemo } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { ObraCard } from '../../components/ObraCard/ObraCard';
import { obrasData } from '../../data/obras';
import imagemFundoObras from '../../assets/hero-voluntarios.png';
import './Obras.css';

export const Obras: React.FC = () => {
  // Ordena obras pelas mais recentes primeiro (maior ID ou maior ano)
  const obrasOrdenadas = useMemo(() => {
    return [...obrasData].sort((a, b) => b.id - a.id);
  }, []);

  return (
    <div className="obras-page">
      <Hero imagemFundo={imagemFundoObras}>
        <h1 className="hero_titulo">
          <span className="hero_titulo-destaque">
            Nossas<br />
            obras
          </span>
        </h1>
      </Hero>

      <section className="obras-lista-section">
        <div className="obras-lista-container">
          <header className="obras-lista-header">
            <h2 className="obras-lista-titulo">Todas as nossas transformações</h2>
            <p className="obras-lista-subtitulo">Conheça as histórias e o impacto do projeto em cada família atendida.</p>
          </header>

          <div className="obras-lista-grid">
            {obrasOrdenadas.map((obra, index) => {
              // Destaca a obra mais recente (primeira da lista)
              const isMaisRecente = index === 0;

              return (
                <ObraCard
                  key={obra.id}
                  obra={obra}
                  destaque={isMaisRecente}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
