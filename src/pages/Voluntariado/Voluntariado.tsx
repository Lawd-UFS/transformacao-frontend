import React from 'react';
import { BannerVoluntariado } from './Banner/BannerVoluntariado';
import { SejaVoluntario } from './SejaVoluntario/SejaVoluntario';
import { Beneficios } from './Beneficios/Beneficios';
import { Departamentos } from './Departamentos/Departamentos';
import { Depoimentos } from './Depoimentos/Depoimentos';
import { Galeria } from './Galeria/Galeria';
import './Voluntariado.css';

export const Voluntariado: React.FC = () => {
  return (
    <div className="voluntariado-page">
      <BannerVoluntariado />
      <SejaVoluntario />
      <Beneficios />
      <Departamentos />
      <Depoimentos />
      <Galeria />
    </div>
  );
};
