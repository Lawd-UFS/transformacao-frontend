import imagemVoluntarios from '../../assets/hero-voluntarios.png'
import './Hero.css'

interface PropsHero {
  /** Parte do título exibida em âmbar (destaque) */
  textoDestaque?: string
  /** Palavra/frase final em branco */
  textoBranco?: string
  /** URL da imagem de fundo — usa a imagem padrão se não fornecida */
  imagemFundo?: string
}

export function Hero({
  textoDestaque = 'Onde o amor se torna',
  textoBranco = 'ação.',
  imagemFundo = imagemVoluntarios,
}: PropsHero) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${imagemFundo})` }}
      aria-label="Seção principal"
    >
      {/* Overlay com degradê azul sobre a foto */}
      <div className="hero__overlay" />

      <div className="hero__conteudo">
        <h1 className="hero__titulo">
          <span className="hero__titulo-destaque">{textoDestaque} </span>
          <span className="hero__titulo-branco">{textoBranco}</span>
        </h1>
      </div>
    </section>
  )
}
