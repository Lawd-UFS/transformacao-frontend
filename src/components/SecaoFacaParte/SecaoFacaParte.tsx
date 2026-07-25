import { useState } from 'react'
import { Link } from 'react-router-dom'
import foto1 from '../../assets/hero-voluntarios.png'
import './SecaoFacaParte.css'

/* ── Tipos ── */
interface CardEngajamento {
  titulo: string
  descricao: string
  href: string
}

interface PropsSecaoFacaParte {
  cards?: CardEngajamento[]
  fotos?: string[]
}

/* ── Dados padrão ── */
const cardsPadrao: CardEngajamento[] = [
  {
    titulo: 'Fazer doação',
    descricao:
      'Contribua com qualquer valor para ajudar a tirar as obras do papel. Toda doação faz diferença.',
    href: '/doacao',
  },
  {
    titulo: 'Ser voluntário',
    descricao:
      'Participe dos mutirões e ações do projeto ou das equipes que fazem tudo acontecer nos bastidores.',
    href: '/voluntariado',
  },
  {
    titulo: 'Ser empresa parceira',
    descricao:
      'Sua empresa pode contribuir com materiais, mobiliário ou apoio financeiro e ajudar a realizar sonhos.',
    href: '/parceria',
  },
]

/* Adicione as fotos reais do mutirão em src/assets/mutirao/ */
const fotosPadrao: string[] = [foto1, foto1, foto1, foto1]

/* ── Componente ── */
export function SecaoFacaParte({
  cards = cardsPadrao,
  fotos = fotosPadrao,
}: PropsSecaoFacaParte) {
  const [indice, setIndice] = useState(0)
  const visiveis = 4
  const max = Math.max(0, fotos.length - visiveis)

  const anterior = () => setIndice((i) => Math.max(0, i - 1))
  const proximo = () => setIndice((i) => Math.min(max, i + 1))

  return (
    <section className="secao-faca-parte" aria-label="Faça parte da transformação">

      {/* ── Bloco 1: CTA cards ── */}
      <div className="faca-parte-cta">
        <h2 className="faca-parte-titulo">
          Faça parte dessa{' '}
          <span className="faca-parte-titulo-destaque">transformação!</span>
        </h2>

        <div className="faca-parte-grid">
          {cards.map((card) => (
            <div key={card.href} className="faca-parte-card">
              <div className="faca-parte-card-header">
                <h3 className="faca-parte-card-titulo">{card.titulo}</h3>
              </div>
              <div className="faca-parte-card-corpo">
                <p className="faca-parte-card-descricao">{card.descricao}</p>
                <Link to={card.href} className="faca-parte-card-btn">
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bloco 2: Carrossel de fotos ── */}
      <div className="faca-parte-galeria" aria-label="Fotos dos mutirões">
        <button
          className="galeria-seta galeria-seta-anterior"
          onClick={anterior}
          disabled={indice === 0}
          aria-label="Foto anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="galeria-trilha-wrapper">
          <div
            className="galeria-trilha"
            style={{ transform: `translateX(-${indice * (100 / visiveis)}%)` }}
          >
            {fotos.map((src, i) => (
              <div key={i} className="galeria-foto-wrapper">
                <img
                  src={src}
                  alt={`Foto do mutirão ${i + 1}`}
                  className="galeria-foto"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="galeria-seta galeria-seta-proxima"
          onClick={proximo}
          disabled={indice >= max}
          aria-label="Próxima foto"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

    </section>
  )
}
