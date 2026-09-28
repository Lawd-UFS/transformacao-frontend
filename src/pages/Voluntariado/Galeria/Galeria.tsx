import React from 'react';
import galeria1 from '../../../assets/voluntariado/galeria-1.jpg';
import galeria2 from '../../../assets/voluntariado/galeria-2.jpg';
import galeria3 from '../../../assets/voluntariado/galeria-3.jpg';
import galeria4 from '../../../assets/voluntariado/galeria-4.jpg';
import './Galeria.css';

interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  { src: galeria1, alt: 'Voluntários pintando parede em corredor durante mutirão' },
  { src: galeria2, alt: 'Voluntário montando estrutura de madeira com ferramentas' },
  { src: galeria3, alt: 'Grupo de voluntários reunidos em círculo com capacetes azuis' },
  { src: galeria4, alt: 'Voluntárias pintando estante em formato de casinha' },
];

export const Galeria: React.FC = () => {
  return (
    <section className="galeria-voluntariado" aria-label="Fotos dos mutirões">
      {fotos.map((foto) => (
        <figure key={foto.src} className="galeria-voluntariado-item">
          <img src={foto.src} alt={foto.alt} loading="lazy" />
        </figure>
      ))}
    </section>
  );
};
