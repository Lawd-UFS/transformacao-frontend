import type { ReactNode } from 'react'
import imagemSobre from '../../assets/home/secao-sobre.jpg'
import './SecaoSobre.css'

interface Estatistica {
  numero: string
  descricao: string
}

interface PropsSecaoSobre {
  texto?: ReactNode
  textoDestaque?: string
  imagem?: string
  estatisticas?: Estatistica[]
}

const estatisticasPadrao: Estatistica[] = [
  { numero: '+08', descricao: 'obras realizadas' },
  { numero: '+30', descricao: 'vidas transformadas' },
  { numero: '+50', descricao: 'voluntários em ação' },
]

export function SecaoSobre({
  texto,
  textoDestaque,
  imagem = imagemSobre,
  estatisticas = estatisticasPadrao,
}: PropsSecaoSobre) {
  return (
    <section className="secao-sobre" aria-label="Sobre o projeto">

      <div className="secao-sobre-intro">
        <p className="secao-sobre-texto">
          {texto !== undefined ? (
            <>
              {texto}{' '}
              {textoDestaque && (
                <strong className="secao-sobre-texto-destaque">{textoDestaque}</strong>
              )}
            </>
          ) : (
            <>
              Somos o{' '}
              <strong className="secao-sobre-texto-destaque">
                Projeto TransformAção, uma Organização da Sociedade Civil (OSC)
              </strong>
              , formada por voluntários de diferentes áreas, unidos pelo propósito de transformar realidades por meio da solidariedade, da ação social e do trabalho coletivo.{' '}
              <strong className="secao-sobre-texto-destaque">
                Atuamos na promoção da moradia digna, inclusão social e acolhimento de famílias em situação de vulnerabilidade
              </strong>
              , levando esperança, dignidade e oportunidades concretas para uma vida melhor.
            </>
          )}
        </p>

        <div className="secao-sobre-imagem-wrapper">
          <img
            src={imagem}
            alt="Equipe de voluntários do projeto Transformação"
            className="secao-sobre-imagem"
          />
        </div>
      </div>

      <div className="secao-sobre-card-stats">
        {estatisticas.map((stat) => (
          <div key={stat.descricao} className="secao-sobre-stat">
            <span className="secao-sobre-stat-numero">{stat.numero}</span>
            <span className="secao-sobre-stat-descricao">{stat.descricao}</span>
          </div>
        ))}
      </div>

    </section>
  )
}
