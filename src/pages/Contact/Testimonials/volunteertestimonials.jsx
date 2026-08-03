import { useEffect, useState } from 'react'
import './volunteertestimonials.css'

const testimonials = [
  {
    title: 'Depoimento dos voluntários',
    quote:
      'Sou muito grato de poder ajudar em um projeto como o Transformação, pois conseguimos levar melhores condições de vida para as pessoas que não possuem o mínimo necessário para poder viver',
    author: 'Luiz | Equipe de comunicação',
  },
  {
    title: 'Depoimento dos voluntários',
    quote:
      'Participar do projeto é enxergar de perto o impacto de cada ação. Cada entrega e cada conversa mostram que pequenos gestos mudam realidades.',
    author: 'Mariana | Voluntária',
  },
  {
    title: 'Depoimento dos voluntários',
    quote:
      'O voluntariado me aproximou de pessoas incríveis e me fez entender que solidariedade também é construção de futuro.',
    author: 'João | Apoio logístico',
  },
]

const Volunteertestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const currentTestimonial = testimonials[activeIndex]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
      )
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <section className="volunteer-testimonials" aria-label="Depoimentos dos voluntários">
      <h1>Faça parte do <span>time</span> transformação!</h1>
      <button type="button">Quero ser voluntário</button>

      <div className="testimonials-carousel">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
          aria-label="Depoimento anterior"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <article className="testimonial-card" aria-live="polite">
          <h2>{currentTestimonial.title}</h2>
          <blockquote>
            <p>{currentTestimonial.quote}</p>
          </blockquote>
          <p className="testimonial-author">{currentTestimonial.author}</p>
        </article>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Próximo depoimento"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  )
}

export default Volunteertestimonials
