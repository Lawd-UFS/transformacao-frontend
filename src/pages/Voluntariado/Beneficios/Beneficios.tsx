import React from 'react';
import beneficiosVoluntariado from '../../../assets/voluntariado/beneficios-voluntariado.jpg';
import './Beneficios.css';

const beneficios: string[] = [
  'Contribui para a saúde física e mental',
  'Ajuda a reduzir o estresse',
  'Aumenta a sensação de bem-estar e de propósito',
  'Desenvolve novas habilidades',
  'Estimula o autoconhecimento',
  'Amplia e fortalece o Network',
];

export const Beneficios: React.FC = () => {
  return (
    <section className="beneficios container" aria-label="Benefícios do voluntariado">
      <h2 className="beneficios-titulo">
        <span className="beneficios-titulo-destaque">Benefícios</span> do voluntariado
      </h2>

      <div className="beneficios-grid">
        <figure className="beneficios-foto">
          <img src={beneficiosVoluntariado} alt="Voluntários reunidos durante um mutirão" />
        </figure>

        <ol className="beneficios-lista">
          {beneficios.map((beneficio) => (
            <li key={beneficio} className="beneficios-item">
              {beneficio}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
