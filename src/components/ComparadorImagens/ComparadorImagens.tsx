import { useRef, useState, useCallback } from 'react'
import './ComparadorImagens.css'

interface PropsComparadorImagens {
  imagemAntes: string
  imagemDepois: string
  altAntes?: string
  altDepois?: string
  posicaoInicial?: number // 0–100, padrão 50
}

export function ComparadorImagens({
  imagemAntes,
  imagemDepois,
  altAntes = 'Antes',
  altDepois = 'Depois',
  posicaoInicial = 50,
}: PropsComparadorImagens) {
  const [posicao, setPosicao] = useState(posicaoInicial)
  const containerRef = useRef<HTMLDivElement>(null)
  const arrastando = useRef(false)

  const calcularPosicao = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - left, width))
    setPosicao((x / width) * 100)
  }, [])

  /* ── Mouse ── */
  const onMouseDown = () => { arrastando.current = true }

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!arrastando.current) return
    calcularPosicao(e.clientX)
  }, [calcularPosicao])

  const onMouseUp = () => { arrastando.current = false }

  /* ── Touch ── */
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    calcularPosicao(e.touches[0].clientX)
  }, [calcularPosicao])

  return (
    <div
      ref={containerRef}
      className="comparador"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Imagem DEPOIS (base, full-width) */}
      <img
        src={imagemDepois}
        alt={altDepois}
        className="comparador__imagem comparador__imagem--depois"
        draggable={false}
      />

      {/* Imagem ANTES (clipada à esquerda) */}
      <div
        className="comparador__antes-wrapper"
        style={{ width: `${posicao}%` }}
      >
        <img
          src={imagemAntes}
          alt={altAntes}
          className="comparador__imagem comparador__imagem--antes"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="comparador__label comparador__label--antes">ANTES</span>
      <span className="comparador__label comparador__label--depois">DEPOIS</span>

      {/* Linha + handle arrastável */}
      <div
        className="comparador__divisor"
        style={{ left: `${posicao}%` }}
        onMouseDown={onMouseDown}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchMove}
      >
        <div className="comparador__handle">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
