import imagemGrupo from '../../assets/hero-voluntarios.png'
import './SecaoSobre.css'

interface Estatistica {
  numero: string
  descricao: string
}

interface PropsSecaoSobre {
  texto?: string
  textoDestaque?: string
  imagem?: string
  estatisticas?: Estatistica[]
}

const estatisticasPadrao: Estatistica[] = [
  { numero: '+10', descricao: 'Obras Realizadas' },
  { numero: '+100', descricao: 'Vidas Transformadas' },
  { numero: '+50', descricao: 'Voluntários em Ação' },
]

export function SecaoSobre({
  texto = 'Somos uma organização sem fins lucrativos, formada por voluntários de diversas áreas e dedicada',
  textoDestaque = 'a transformar a realidade de famílias',
  imagem = imagemGrupo,
  estatisticas = estatisticasPadrao,
}: PropsSecaoSobre) {
  return (
    <section className="secao-sobre" aria-label="Sobre o projeto">

      {/* ── Linha intro: texto + foto ── */}
      <div className="secao-sobre__intro">
        <p className="secao-sobre__texto">
          {texto}{' '}
          <strong className="secao-sobre__texto-destaque">{textoDestaque}</strong>
        </p>

        <div className="secao-sobre__imagem-wrapper">
          <img
            src={imagem}
            alt="Equipe de voluntários do projeto Transformação"
            className="secao-sobre__imagem"
          />
        </div>
      </div>

      {/* ── Card de estatísticas ── */}
      <div className="secao-sobre__card-stats">
        {estatisticas.map((stat) => (
          <div key={stat.descricao} className="secao-sobre__stat">
            <span className="secao-sobre__stat-numero">{stat.numero}</span>
            <span className="secao-sobre__stat-descricao">{stat.descricao}</span>
          </div>
        ))}
      </div>

    </section>
  )
}
