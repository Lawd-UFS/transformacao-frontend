import React from 'react';
import './ComoFunciona.css';

import icon1 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 01.png';
import icon2 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 02.png';
import icon3 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 03.png';
import icon4 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 04.png';
import icon5 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 05.png';
import icon6 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 06.png';
import icon7 from '../../assets/quem-somos/como-funciona/PAG QUEM SOMOS - 07.png';

interface PassoComoFunciona {
  numero: number;
  titulo: string;
  descricao: string;
  icone: string;
  altIcone: string;
}

const passosComoFunciona: PassoComoFunciona[] = [
  {
    numero: 1,
    titulo: '1. Seleção das Famílias',
    descricao:
      'Realizamos avaliação psicossocial e aplicamos critérios de elegibilidade para selecionar as famílias atendidas pelo projeto, considerando aspectos sociais, habitacionais e o contexto de vulnerabilidade apresentado.',
    icone: icon1,
    altIcone: 'Ícone Seleção das Famílias',
  },
  {
    numero: 2,
    titulo: '2. Entrevista Social',
    descricao:
      'Analisamos as necessidades da família, seu comprometimento com o projeto, a realidade social vivenciada e as condições do imóvel, avaliando a viabilidade das melhorias propostas.',
    icone: icon2,
    altIcone: 'Ícone Entrevista Social',
  },
  {
    numero: 3,
    titulo: '3. Vistoria Técnica',
    descricao:
      'Nossa equipe de engenharia e arquitetura realiza uma visita técnica ao imóvel, análise estrutural, levantamento das necessidades construtivas e elaboração das soluções técnicas e do orçamento necessário para a execução da obra.',
    icone: icon3,
    altIcone: 'Ícone Vistoria Técnica',
  },
  {
    numero: 4,
    titulo: '4. Captação de Recursos',
    descricao:
      'Promovemos a captação de recursos financeiros e de doações de materiais, mobiliário e utensílios, além de mobilizarmos parceiros, apoiadores e voluntários para viabilizar as ações desenvolvidas pelo projeto.',
    icone: icon4,
    altIcone: 'Ícone Captação de Recursos',
  },
  {
    numero: 5,
    titulo: '5. Execução das Obras',
    descricao:
      'Profissionais parceiros e voluntários de diferentes áreas atuam no planejamento, acompanhamento e execução das obras e ações sociais desenvolvidas pelo projeto.',
    icone: icon5,
    altIcone: 'Ícone Execução das Obras',
  },
  {
    numero: 6,
    titulo: '6. Assessoria Jurídica',
    descricao:
      'Contamos com suporte jurídico voltado à regularidade institucional das atividades desenvolvidas pelo projeto, à elaboração de documentos, contratos e parcerias, além da orientação às famílias atendidas quanto ao acesso a direitos sociais e aos encaminhamentos necessários.',
    icone: icon6,
    altIcone: 'Ícone Assessoria Jurídica',
  },
  {
    numero: 7,
    titulo: '7. Comunicação e Transparência',
    descricao:
      'Divulgamos as ações do Projeto TransformAção por meio de nossos canais oficiais e redes sociais, promovendo transparência institucional, prestando informações à comunidade e fortalecendo o relacionamento com voluntários, parceiros e apoiadores.',
    icone: icon7,
    altIcone: 'Ícone Comunicação e Transparência',
  },
];

export const ComoFunciona: React.FC = () => {
  return (
    <section className="como-funciona-section container">
      <h2 className="section-title center como-funciona-title">Como funciona o projeto</h2>
      <div className="como-funciona-timeline">
        {passosComoFunciona.map((passo, index) => (
          <React.Fragment key={passo.numero}>
            <div className="como-funciona-card">
              <div className="como-funciona-icon-wrapper">
                <img
                  src={passo.icone}
                  alt={passo.altIcone}
                  className="como-funciona-icon"
                />
              </div>
              <div className="como-funciona-content">
                <h3 className="como-funciona-card-title">{passo.titulo}</h3>
                <p className="como-funciona-card-description">{passo.descricao}</p>
              </div>
            </div>
            {index < passosComoFunciona.length - 1 && (
              <div className="como-funciona-connector" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
