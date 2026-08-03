import React from 'react';
import iconeEngenharia from '../../../assets/voluntariado/icone-engenharia.png';
import iconeArquitetura from '../../../assets/voluntariado/icone-arquitetura.png';
import iconeFinanceiro from '../../../assets/voluntariado/icone-financeiro.webp';
import iconeMutirao from '../../../assets/voluntariado/icone-mutirao.png';
import './Departamentos.css';

interface Departamento {
  nome: string;
  descricao: string;
  icone: string;
}

const departamentos: Departamento[] = [
  {
    nome: 'Engenharia',
    descricao: 'Responsável pela análise estrutural, vistoria técnica e segurança da obra.',
    icone: iconeEngenharia,
  },
  {
    nome: 'Arquitetura',
    descricao: 'Focada no planejamento do espaço, conforto e levantamento mobiliário.',
    icone: iconeArquitetura,
  },
  {
    nome: 'Financeiro',
    descricao:
      'Envolve o levantamento de custos e a gestão de recursos necessários para a viabilidade da reforma.',
    icone: iconeFinanceiro,
  },
  {
    nome: 'Mutirão',
    descricao: 'Mão de obra direta para pintura, reformas e pequenas construções.',
    icone: iconeMutirao,
  },
];

export const Departamentos: React.FC = () => {
  return (
    <section className="departamentos container" aria-label="Nossos departamentos">
      <h2 className="departamentos-titulo">Nossos departamentos</h2>

      <div className="departamentos-grid">
        {departamentos.map((departamento) => (
          <article key={departamento.nome} className="departamento">
            <div className="departamento-icone">
              <img src={departamento.icone} alt={departamento.nome} />
            </div>
            <h3 className="departamento-nome">{departamento.nome}</h3>
            <p className="departamento-descricao">{departamento.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
