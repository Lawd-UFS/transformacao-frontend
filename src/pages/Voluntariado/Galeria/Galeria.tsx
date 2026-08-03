import React from 'react';
import galeria1 from '../../../assets/voluntariado/galeria-1.png';
import galeria2 from '../../../assets/voluntariado/galeria-2.png';
import galeria3 from '../../../assets/voluntariado/galeria-3.png';
import galeria4 from '../../../assets/voluntariado/galeria-4.png';
import './Galeria.css';

interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  { src: galeria1, alt: 'Voluntários pintando a fachada de uma casa' },
  { src: galeria2, alt: 'Voluntários com rolos de tinta durante uma reforma' },
  { src: galeria3, alt: 'Voluntários de capacete trabalhando em um mutirão' },
  { src: galeria4, alt: 'Voluntários preparando a pintura de um corredor' },
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
