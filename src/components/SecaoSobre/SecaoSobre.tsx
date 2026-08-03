import imagemSobre from '../../assets/home/secao-sobre.png'
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
  { numero: '+10', descricao: 'obras realizadas' },
  { numero: '+100', descricao: 'vidas transformadas' },
  { numero: '+50', descricao: 'voluntários em ação' },
]

export function SecaoSobre({
  texto = 'Somos uma organização sem fins lucrativos, formada por voluntários de diversas áreas e dedicada',
  textoDestaque = 'a transformar a realidade de famílias.',
  imagem = imagemSobre,
  estatisticas = estatisticasPadrao,
}: PropsSecaoSobre) {
  return (
    <section className="secao-sobre" aria-label="Sobre o projeto">

      <div className="secao-sobre-intro">
        <p className="secao-sobre-texto">
          {texto}{' '}
          <strong className="secao-sobre-texto-destaque">{textoDestaque}</strong>
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
