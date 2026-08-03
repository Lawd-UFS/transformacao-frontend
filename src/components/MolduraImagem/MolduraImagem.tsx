import React from 'react';
import beneficiosImg from '../../assets/empresas-parceiras/entrega-tintas.png';
import './MolduraImagem.css';

export const MolduraImagem: React.FC = () => {
  return (
    <div className="beneficios-img-wrapper">
      <img 
        src={beneficiosImg} 
        alt="Parceiros Casa das Tintas entregando materiais de reforma" 
        className="beneficios-img" 
      />
    </div>
  );
};
