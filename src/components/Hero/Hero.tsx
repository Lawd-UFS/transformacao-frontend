import React from 'react'
import imagemVoluntarios from '../../assets/home/hero-voluntarios.png'
import './Hero.css'

interface PropsHero {
  imagemFundo?: string
  children?: React.ReactNode
}

export function Hero({
  imagemFundo = imagemVoluntarios,
  children
}: PropsHero) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${imagemFundo})` }}
      aria-label="Seção principal"
    >
      <div className="hero_overlay" />

      <div className="hero_conteudo">
        {children || (
          <h1 className="hero_titulo">
            <span className="hero_titulo-destaque">
              Onde o<br />
              amor se<br />
              torna{' '}
            </span>
            <span className="hero_titulo-branco">ação.</span>
          </h1>
        )}
      </div>
    </section>
  )
}
