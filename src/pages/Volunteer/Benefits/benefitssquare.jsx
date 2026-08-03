import React from 'react'
import './benefitssquare.css'
import beneficios from '../../../assets/voluntariado/beneficios-voluntariado.jpg'
const Benefitssquare = () => {
  return (
    <div className="Benefits-square">
      <h1><span>Benefícios</span> do voluntariado</h1>
      <div className="Benefits-container">
      <article className="benefits-photograph">
      <img src={beneficios} alt="Voluntários em ação" />
      </article>
        <aside className="Benefits-text">
        <ol>
          <li>Melhoria na saúde física e mental</li>
          <li>Redução de estresse e depressão</li>
          <li>Sensação de bem estar e proposito</li>
          <li>Desenvolvimento de habilidades</li>
          <li>Aumento do autoconhecimento</li>
          <li>Fortalece o Network</li>
        </ol>
       </aside>
      </div>
    </div>
  )
}

export default Benefitssquare
