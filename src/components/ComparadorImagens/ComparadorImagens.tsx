import { useRef, useState, useCallback } from 'react'
import './ComparadorImagens.css'

interface PropsComparadorImagens {
  imagemAntes: string
  imagemDepois: string
  altAntes?: string
  altDepois?: string
  posicaoInicial?: number
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
  const foiArrastado = useRef(false)

  const calcularPosicao = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - left, width))
    setPosicao((x / width) * 100)
  }, [])

  /* ── Mouse ── */
  const onMouseDown = () => { 
    arrastando.current = true 
    foiArrastado.current = false
  }

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!arrastando.current) return
    foiArrastado.current = true
    calcularPosicao(e.clientX)
  }, [calcularPosicao])

  const onMouseUp = () => { 
    arrastando.current = false
    // Reseta o status de arrasto logo após o evento de clique ser processado
    setTimeout(() => {
      foiArrastado.current = false
    }, 50)
  }

  /* ── Touch ── */
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    foiArrastado.current = false
    calcularPosicao(e.touches[0].clientX)
  }, [calcularPosicao])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    foiArrastado.current = true
    calcularPosicao(e.touches[0].clientX)
  }, [calcularPosicao])

  const onTouchEnd = () => {
    setTimeout(() => {
      foiArrastado.current = false
    }, 50)
  }

  const onClickCapture = (e: React.MouseEvent) => {
    if (foiArrastado.current) {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  return (
    <div
      ref={containerRef}
      className="comparador"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchEnd={onTouchEnd}
      onClickCapture={onClickCapture}
    >
      {/* Imagem DEPOIS */}
      <img
        src={imagemDepois}
        alt={altDepois}
        className="comparador-imagem"
        draggable={false}
      />

      {/* Imagem ANTES */}
      <img
        src={imagemAntes}
        alt={altAntes}
        className="comparador-imagem"
        style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="comparador-label comparador-label-antes">ANTES</span>
      <span className="comparador-label comparador-label-depois">DEPOIS</span>

      {/* Linha + handle arrastável */}
      <div
        className="comparador-divisor"
        style={{ left: `${posicao}%` }}
        onMouseDown={onMouseDown}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        <div className="comparador-handle">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
