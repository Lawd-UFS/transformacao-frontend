import { ComparadorImagens } from '../ComparadorImagens/ComparadorImagens'
import './SecaoObras.css'

/* ── Tipos ── */
type StatusObra = 'andamento' | 'concluido'

interface Obra {
  id: number
  titulo: string
  localizacao: string
  status: StatusObra
  ano: number
  imagemAntes: string
  imagemDepois: string
}

interface PropsSecaoObras {
  obras?: Obra[]
  onVerMais?: () => void
}

/* ── Dados padrão (placeholder) ── */
import placeholderAntes from '../../assets/hero-voluntarios.png'
import placeholderDepois from '../../assets/voluntarios-grupo.png'

const obrasPadrao: Obra[] = [
  {
    id: 8,
    titulo: 'Casa da D. Ninha',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'andamento',
    ano: 2026,
    imagemAntes: placeholderAntes,
    imagemDepois: placeholderDepois,
  },
  {
    id: 7,
    titulo: 'Casa da Mirian',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: placeholderAntes,
    imagemDepois: placeholderDepois,
  },
  {
    id: 6,
    titulo: 'Casa da Michelle',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: placeholderAntes,
    imagemDepois: placeholderDepois,
  },
]

const labelStatus: Record<StatusObra, string> = {
  andamento: 'Andamento',
  concluido: 'Concluído',
}

/* ── Componente ── */
export function SecaoObras({ obras = obrasPadrao, onVerMais }: PropsSecaoObras) {
  return (
    <section className="secao-obras" aria-label="Obras realizadas">

      {/* Cabeçalho */}
      <div className="secao-obras__cabecalho">
        <h2 className="secao-obras__titulo">
          Conheça as famílias{' '}
          <span className="secao-obras__titulo-destaque">já impactadas</span>{' '}
          pelo projeto
        </h2>
        <p className="secao-obras__subtitulo">
          Arraste para o lado e veja o antes e depois de cada transformação
        </p>
      </div>

      {/* Grid de cards */}
      <div className="secao-obras__grid">
        {obras.map((obra) => (
          <article key={obra.id} className="obra-card">

            {/* Comparador antes/depois */}
            <div className="obra-card__comparador">
              <ComparadorImagens
                imagemAntes={obra.imagemAntes}
                imagemDepois={obra.imagemDepois}
                altAntes={`Antes — ${obra.titulo}`}
                altDepois={`Depois — ${obra.titulo}`}
              />
            </div>

            {/* Informações */}
            <div className="obra-card__info">
              <h3 className="obra-card__titulo">
                {obra.titulo}{' '}
                <span className="obra-card__numero">| Obra {String(obra.id).padStart(2, '0')}</span>
              </h3>

              <p className="obra-card__localizacao">
                <svg className="obra-card__pin" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                {obra.localizacao}
              </p>

              <span className={`obra-card__badge obra-card__badge--${obra.status}`}>
                {labelStatus[obra.status]} – {obra.ano}
              </span>
            </div>

          </article>
        ))}
      </div>

      {/* Botão Ver mais */}
      <div className="secao-obras__rodape">
        <button className="secao-obras__btn-ver-mais" onClick={onVerMais}>
          Ver mais obras
        </button>
      </div>

    </section>
  )
}
