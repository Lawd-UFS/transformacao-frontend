import { useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ObraCard } from '../ObraCard/ObraCard'
import { ModalObra } from '../ModalObra/ModalObra'
import { obrasData } from '../../data/obras'
import type { Obra } from '../../data/obras'
import './SecaoObras.css'

interface PropsSecaoObras {
  obras?: Obra[]
}

/* ── Componente ── */
export function SecaoObras({ obras = obrasData }: PropsSecaoObras) {
  const [obraSelecionada, setObraSelecionada] = useState<Obra | null>(null)

  const obrasExibidas = useMemo(() => {
    return [...obras].sort((a, b) => b.id - a.id).slice(0, 3)
  }, [obras])

  const abrirModal = useCallback((obra: Obra) => setObraSelecionada(obra), [])
  const fecharModal = useCallback(() => setObraSelecionada(null), [])

  return (
    <section className="secao-obras" aria-label="Obras realizadas">

      {/* Cabeçalho */}
      <div className="secao-obras-cabecalho">
        <h2 className="secao-obras-titulo">
          Conheça as famílias{' '}
          <span className="secao-obras-titulo-destaque">já impactadas</span>{' '}
          pelo projeto
        </h2>
        <p className="secao-obras-subtitulo">
          Arraste para o lado e veja o antes e depois de cada transformação
        </p>
      </div>

      {/* Grid de cards */}
      <div className="secao-obras-grid">
        {obrasExibidas.map((obra) => (
          <ObraCard
            key={obra.id}
            obra={obra}
            onClick={() => abrirModal(obra)}
          />
        ))}
      </div>

      {/* Botão Ver mais */}
      <div className="secao-obras-rodape">
        <Link to="/obras" className="secao-obras-btn-ver-mais" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Ver mais obras
        </Link>
      </div>

      {/* Modal de detalhes da obra */}
      <ModalObra obra={obraSelecionada} onFechar={fecharModal} />

    </section>
  )
}
