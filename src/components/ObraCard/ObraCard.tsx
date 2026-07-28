import { ComparadorImagens } from '../ComparadorImagens/ComparadorImagens'
import type { Obra, StatusObra } from '../../data/obras'
import './ObraCard.css'

interface PropsObraCard {
  obra: Obra
  destaque?: boolean
}

const labelStatus: Record<StatusObra, string> = {
  andamento: 'Andamento',
  concluido: 'Concluído',
}

export function ObraCard({ obra, destaque = false }: PropsObraCard) {
  return (
    <article className={`obra-card ${destaque ? 'obra-card-destaque' : ''}`}>
      {destaque && <div className="obra-card-selo-novo">MAIS RECENTE</div>}
      
      {/* Comparador antes/depois */}
      <div className="obra-card-comparador">
        <ComparadorImagens
          imagemAntes={obra.imagemAntes}
          imagemDepois={obra.imagemDepois}
          altAntes={`Antes — ${obra.titulo}`}
          altDepois={`Depois — ${obra.titulo}`}
        />
      </div>

      {/* Informações */}
      <div className="obra-card-info">
        <h3 className="obra-card-titulo">
          {obra.titulo}{' '}
          <span className="obra-card-numero">| Obra {String(obra.id).padStart(2, '0')}</span>
        </h3>

        <p className="obra-card-localizacao">
          <svg className="obra-card-pin" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {obra.localizacao}
        </p>

        <span className={`obra-card-badge obra-card-badge-${obra.status}`}>
          {labelStatus[obra.status]} – {obra.ano}
        </span>
      </div>
    </article>
  )
}
