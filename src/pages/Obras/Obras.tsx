import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { ObraCard } from '../../components/ObraCard/ObraCard';
import { ModalObra } from '../../components/ModalObra/ModalObra';
import { BannerFacaParte } from '../../components/BannerFacaParte/BannerFacaParte';
import { obrasData } from '../../data/obras';
import type { Obra } from '../../data/obras';
import imagemFundoObras from '../../assets/obras/hero.jpg';
import './Obras.css';

export const Obras: React.FC = () => {
  const [obraSelecionada, setObraSelecionada] = useState<Obra | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [limiteMobile, setLimiteMobile] = useState(3)

  useEffect(() => {
    const verificarMobile = () => {
      setIsMobile(window.innerWidth <= 600)
    }
    verificarMobile()
    window.addEventListener('resize', verificarMobile)
    return () => window.removeEventListener('resize', verificarMobile)
  }, [])

  const obrasOrdenadas = useMemo(() => {
    return [...obrasData].sort((a, b) => b.id - a.id);
  }, []);

  const obrasExibidas = useMemo(() => {
    if (isMobile) {
      return obrasOrdenadas.slice(0, limiteMobile)
    }
    return obrasOrdenadas
  }, [obrasOrdenadas, isMobile, limiteMobile])

  const abrirModal = useCallback((obra: Obra) => setObraSelecionada(obra), [])
  const fecharModal = useCallback(() => setObraSelecionada(null), [])

  const handleVerMais = useCallback(() => {
    setLimiteMobile((prev) => prev + 3)
  }, [])

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
            {obrasExibidas.map((obra) => (
              <ObraCard
                key={obra.id}
                obra={obra}
                onClick={() => abrirModal(obra)}
              />
            ))}
          </div>

          {isMobile && limiteMobile < obrasOrdenadas.length && (
            <div className="obras-lista-ver-mais-container">
              <button className="obras-lista-ver-mais-btn" onClick={handleVerMais}>
                Ver mais obras
              </button>
            </div>
          )}
        </div>
      </section>

      <BannerFacaParte />

      <ModalObra obra={obraSelecionada} onFechar={fecharModal} />
    </div>
  );
};

