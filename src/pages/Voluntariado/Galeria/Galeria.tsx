import React from 'react';
import mutirao1 from '../../../assets/compartilhado/mutirao-1.png';
import mutirao2 from '../../../assets/compartilhado/mutirao-2.png';
import mutirao3 from '../../../assets/compartilhado/mutirao-3.png';
import mutirao4 from '../../../assets/compartilhado/mutirao-4.png';
import './Galeria.css';

interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  { src: mutirao1, alt: 'Voluntários pintando a fachada de uma casa' },
  { src: mutirao2, alt: 'Voluntários com rolos de tinta durante uma reforma' },
  { src: mutirao3, alt: 'Voluntários de capacete trabalhando em um mutirão' },
  { src: mutirao4, alt: 'Voluntários preparando a pintura de um corredor' },
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
