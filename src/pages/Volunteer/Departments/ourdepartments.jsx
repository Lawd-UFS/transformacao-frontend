import React from 'react'
import './ourdepartments.css'
import eng from '../../../assets/engineer-seventh-page.png'
import arq from '../../../assets/architect-seventh-page.png'
import blu from '../../../assets/logo-seventh-page.png'
import coin from '../../../assets/coin-seventh-page.webp'

const Ourdepartments = () => {
  return (
    <div className="Ourdepartments">
        <h1>Nossos departamentos</h1>
        <div className="departments-container">
            <div className="department">
                    <div className="department-image">
                        <img src={eng} alt="Engenheira" />
                    </div>
                <h2>Engenharia</h2>
                <p>Responsável pela análise estrutural, vistoria técnica e segurança da obra</p>
            </div>
            <div className="department">
                    <div className="department-image">
                        <img src={arq} alt="Arquitetura" />
                    </div>
                <h2>Arquitetura</h2>
                <p>Focado no planejamento do espaço, conforto e levantamento mobiliário</p>
            </div>
            <div className="department">
                    <div className="department-image">
                        <img src={coin} alt="Financeiro" />
                    </div>
                <h2>Financeiro</h2>
                <p>Envolve o levantamento de custos e a gestão de recursos necessários para a viabilidade da reforma</p>
            </div>
            <div className="department">
                    <div className="department-image">
                        <img src={blu} alt="Mutirão" />
                    </div>
                <h2>Mutirão</h2>
                <p>Mão de obra direta para pintura, reformas e pequenas construções.</p>
            </div>
        </div>

    </div>
  )
}

export default Ourdepartments
