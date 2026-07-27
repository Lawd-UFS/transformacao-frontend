import imagemVoluntarios from '../../assets/hero-voluntarios.png'
import './Hero.css'

interface PropsHero {
  imagemFundo?: string
}

export function Hero({
  imagemFundo = imagemVoluntarios,
}: PropsHero) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${imagemFundo})` }}
      aria-label="Seção principal"
    >
      <div className="hero_overlay" />

      <div className="hero_conteudo">
        <h1 className="hero_titulo">
          <span className="hero_titulo-destaque">
            Onde o<br />
            amor se<br />
            torna{' '}
          </span>
          <span className="hero_titulo-branco">ação.</span>
        </h1>
      </div>
    </section>
  )
}
