import React, { useMemo, useState, useCallback } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { ObraCard } from '../../components/ObraCard/ObraCard';
import { ModalObra } from '../../components/ModalObra/ModalObra';
import { BannerFacaParte } from '../../components/BannerFacaParte/BannerFacaParte';
import { obrasData } from '../../data/obras';
import type { Obra } from '../../data/obras';
import imagemFundoObras from '../../assets/hero-voluntarios.png';
import './Obras.css';

export const Obras: React.FC = () => {
  const [obraSelecionada, setObraSelecionada] = useState<Obra | null>(null)

  const obrasOrdenadas = useMemo(() => {
    return [...obrasData].sort((a, b) => b.id - a.id);
  }, []);

  const abrirModal = useCallback((obra: Obra) => setObraSelecionada(obra), [])
  const fecharModal = useCallback(() => setObraSelecionada(null), [])

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
            {obrasOrdenadas.map((obra) => (
              <ObraCard
                key={obra.id}
                obra={obra}
                onClick={() => abrirModal(obra)}
              />
            ))}
          </div>
        </div>
      </section>

      <BannerFacaParte />

      <ModalObra obra={obraSelecionada} onFechar={fecharModal} />
    </div>
  );
};
