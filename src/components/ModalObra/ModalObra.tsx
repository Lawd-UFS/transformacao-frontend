import { useEffect, useState, useCallback } from 'react'
import type { Obra } from '../../data/obras'
import './ModalObra.css'

interface PropsModalObra {
  obra: Obra | null
  onFechar: () => void
}

const labelStatus: Record<string, string> = {
  andamento: 'Em andamento',
  concluido: 'Concluído',
}

/* ── Lightbox interno ── */
interface LightboxState {
  fotos: string[]
  index: number
}

export function ModalObra({ obra, onFechar }: PropsModalObra) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  /* Fecha modal com ESC; navega lightbox com ← → */
  useEffect(() => {
    if (!obra) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null)
        else onFechar()
      }
      if (lightbox) {
        if (e.key === 'ArrowRight') setLightbox(lb => lb && { ...lb, index: (lb.index + 1) % lb.fotos.length })
        if (e.key === 'ArrowLeft')  setLightbox(lb => lb && { ...lb, index: (lb.index - 1 + lb.fotos.length) % lb.fotos.length })
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [obra, onFechar, lightbox])

  /* Bloqueia scroll do body */
  useEffect(() => {
    document.body.style.overflow = obra ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [obra])

  const abrirLightbox = useCallback((fotos: string[], index: number) => {
    setLightbox({ fotos, index })
  }, [])

  const fecharLightbox = useCallback(() => setLightbox(null), [])

  const irAnterior = useCallback(() => {
    setLightbox(lb => lb && { ...lb, index: (lb.index - 1 + lb.fotos.length) % lb.fotos.length })
  }, [])

  const irProximo = useCallback(() => {
    setLightbox(lb => lb && { ...lb, index: (lb.index + 1) % lb.fotos.length })
  }, [])

  if (!obra) return null

  /* Fallback: se não há arrays, usa a imagem única como array de 1 item */
  const fotosAntes  = obra.fotosAntes?.length  ? obra.fotosAntes  : obra.imagemAntes  ? [obra.imagemAntes]  : []
  const fotosDepois = obra.fotosDepois?.length ? obra.fotosDepois : obra.imagemDepois ? [obra.imagemDepois] : []
  const temStats    = obra.duracao || obra.voluntarios || obra.recursosInvestidos

  return (
    <>
      <div
        className="modal-obra-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes: ${obra.titulo}`}
        onClick={(e) => { if (e.target === e.currentTarget) onFechar() }}
      >
        <div className="modal-obra-box">

          {/* ── Botão fechar ── */}
          <button className="modal-obra-fechar" onClick={onFechar} aria-label="Fechar modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* ── Cabeçalho ── */}
          <div className="modal-obra-cabecalho">
            <h2 className="modal-obra-titulo">
              {obra.titulo}{' '}
              <span className="modal-obra-numero">| Obra {String(obra.id).padStart(2, '0')}</span>
            </h2>
            <p className="modal-obra-localizacao">
              <svg className="modal-obra-pin" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              {obra.localizacao}
            </p>
            <span className={`modal-obra-badge modal-obra-badge-${obra.status}`}>
              {labelStatus[obra.status]} – {obra.ano}
            </span>
          </div>

          <div className="modal-obra-corpo">

            {/* ── Grid: Antes ── */}
            {fotosAntes.length > 0 && (
              <div className="modal-obra-bloco">
                <h3 className="modal-obra-subtitulo">Antes</h3>
                <div className={`modal-obra-fotos-grid ${fotosAntes.length === 1 ? 'modal-obra-fotos-grid--unica' : ''}`}>
                  {fotosAntes.map((src, i) => (
                    <button
                      key={i}
                      className="modal-obra-foto-btn"
                      onClick={() => abrirLightbox(fotosAntes, i)}
                      aria-label={`Ampliar foto antes ${i + 1}`}
                    >
                      <img src={src} alt={`Antes ${i + 1} — ${obra.titulo}`} className="modal-obra-foto" />
                      <span className="modal-obra-foto-lupa" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                             strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                          <path d="M11 8v6M8 11h6"/>
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Grid: Depois ── */}
            {fotosDepois.length > 0 && (
              <div className="modal-obra-bloco">
                <h3 className="modal-obra-subtitulo">Depois</h3>
                <div className={`modal-obra-fotos-grid ${fotosDepois.length === 1 ? 'modal-obra-fotos-grid--unica' : ''}`}>
                  {fotosDepois.map((src, i) => (
                    <button
                      key={i}
                      className="modal-obra-foto-btn"
                      onClick={() => abrirLightbox(fotosDepois, i)}
                      aria-label={`Ampliar foto depois ${i + 1}`}
                    >
                      <img src={src} alt={`Depois ${i + 1} — ${obra.titulo}`} className="modal-obra-foto" />
                      <span className="modal-obra-foto-lupa" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                             strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                          <path d="M11 8v6M8 11h6"/>
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Stats da obra ── */}
            {temStats && (
              <div className="modal-obra-bloco">
                <h3 className="modal-obra-subtitulo">Sobre a obra</h3>
                <div className="modal-obra-stats">
                  {obra.duracao && (
                    <div className="modal-obra-stat">
                      <span className="modal-obra-stat-valor">{obra.duracao}</span>
                      <span className="modal-obra-stat-label">Duração da obra</span>
                    </div>
                  )}
                  {obra.voluntarios && (
                    <div className="modal-obra-stat">
                      <span className="modal-obra-stat-valor">{obra.voluntarios}</span>
                      <span className="modal-obra-stat-label">Voluntários</span>
                    </div>
                  )}
                  {obra.recursosInvestidos && (
                    <div className="modal-obra-stat">
                      <span className="modal-obra-stat-valor">{obra.recursosInvestidos}</span>
                      <span className="modal-obra-stat-label">Recursos investidos</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Depoimento ── */}
            {obra.depoimento && (
              <div className="modal-obra-bloco">
                <h3 className="modal-obra-subtitulo">Depoimento da família</h3>
                <blockquote className="modal-obra-depoimento">
                  <p className="modal-obra-depoimento-texto">"{obra.depoimento}"</p>
                  {obra.autorDepoimento && (
                    <footer className="modal-obra-depoimento-autor">{obra.autorDepoimento}</footer>
                  )}
                </blockquote>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={fecharLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar foto"
        >
          {/* Botão fechar */}
          <button
            className="lightbox-fechar"
            onClick={fecharLightbox}
            aria-label="Fechar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Anterior */}
          {lightbox.fotos.length > 1 && (
            <button
              className="lightbox-nav lightbox-nav--prev"
              onClick={(e) => { e.stopPropagation(); irAnterior() }}
              aria-label="Foto anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                   strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}

          {/* Imagem */}
          <img
            className="lightbox-imagem"
            src={lightbox.fotos[lightbox.index]}
            alt={`Foto ${lightbox.index + 1} de ${lightbox.fotos.length}`}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Próxima */}
          {lightbox.fotos.length > 1 && (
            <button
              className="lightbox-nav lightbox-nav--next"
              onClick={(e) => { e.stopPropagation(); irProximo() }}
              aria-label="Próxima foto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                   strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          )}

          {/* Contador */}
          <div className="lightbox-contador">
            {lightbox.index + 1} / {lightbox.fotos.length}
          </div>
        </div>
      )}
    </>
  )
}
