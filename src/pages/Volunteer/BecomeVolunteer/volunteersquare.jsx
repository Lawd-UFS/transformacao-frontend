import React from 'react'
import './volunteersquare.css'
import VolunteerGroup from '../../../assets/voluntariado/grupo-voluntarios.jpg'
const Volunteersquare = () => {
  return (
    <div className="volunteer-square">
      <aside className="volunteer-text">
        <h1>Somos um projeto formado por pessoas como <span>você</span></h1>
        <p>Voluntários de todas as idades e áreas de atuação, unidos para ajudar famílias em situação de vulnerabilidade social.</p>
        <button>Quero ser voluntário</button>
      </aside>
      <article className="volunteer-photograph">
        <img src={VolunteerGroup} alt="Grupo de voluntários" />
      </article>
    </div>
  )
}

export default Volunteersquare
