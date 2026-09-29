import React from 'react';
import { Settings, Megaphone, HardHat, Coins, Scale, Users, type LucideIcon } from 'lucide-react';
import mutiraoTendaImg from '../../../assets/voluntariado/mutirao-tenda.jpg';
import './Departamentos.css';

interface Departamento {
  nome: string;
  descricao: string;
  icone: LucideIcon;
}

const departamentos: Departamento[] = [
  {
    nome: 'Administrativo e Operacional',
    descricao:
      'Responsável pela organização administrativa e operacional do projeto, incluindo rotinas contábeis, aquisição de bens e serviços, arrecadação, controle de materiais e apoio à gestão de recursos. Coordena também a logística dos mutirões e demais ações, garantindo os insumos, serviços e suporte necessários à sua execução.',
    icone: Settings,
  },
  {
    nome: 'Comunicação',
    descricao:
      'Divulga as ações do projeto, produz conteúdos, fortalece o relacionamento com voluntários e parceiros e promove a transparência institucional.',
    icone: Megaphone,
  },
  {
    nome: 'Engenharia e Arquitetura',
    descricao:
      'Responsável pelas visitas e avaliações técnicas, elaboração de projetos, acompanhamento técnico da execução das obras e outros.',
    icone: HardHat,
  },
  {
    nome: 'Financeiro',
    descricao:
      'Responsável pelo controle financeiro do projeto, acompanhamento de receitas e despesas, prestação de contas e apoio à gestão dos recursos destinados às ações sociais.',
    icone: Coins,
  },
  {
    nome: 'Jurídico',
    descricao:
      'Atua na regularidade institucional e jurídica das atividades desenvolvidas, incluindo a elaboração e organização de documentos, contratos e termos de parceria e orientação às famílias quanto ao acesso a direitos sociais.',
    icone: Scale,
  },
  {
    nome: 'Social',
    descricao:
      'Identifica famílias em situação de vulnerabilidade, realiza avaliações psicossociais, acompanha as demandas sociais, articulando ações comunitárias necessárias à execução das ações do projeto.',
    icone: Users,
  },
];

export const Departamentos: React.FC = () => {
  return (
    <section className="formas-voluntariado container" aria-label="Formas de voluntariado">
      <div className="formas-cabecalho">
        <h2 className="formas-titulo">Formas de voluntariado</h2>
        <p className="formas-subtitulo">Encontre a melhor forma de contribuir</p>
      </div>

      <div className="forma-card">
        <div className="forma-card-header">
          <h3 className="forma-card-titulo">Voluntariado e Mutirões</h3>
        </div>
        <div className="forma-card-body mutirao-body">
          <div className="mutirao-texto">
            <p>
              O Voluntariado e Mutirões é um espaço aberto para pessoas de diferentes idades que desejam
              fazer o bem e contribuir conosco.{' '}
              <strong>
                Não é necessário ter uma área de atuação ou formação específica: toda forma de
                contribuição é bem-vinda.
              </strong>
            </p>
            <p>
              <strong>
                Nossos voluntários participam de mutirões, campanhas de arrecadação e outras iniciativas
                solidárias
              </strong>{' '}
              que ajudam a viabilizar o trabalho realizado junto às famílias atendidas. Juntos,
              levamos dignidade, conforto e esperança a quem mais precisa.
            </p>
          </div>
          <div className="mutirao-foto-wrapper">
            <img
              src={mutiraoTendaImg}
              alt="Voluntários reunidos durante um mutirão"
              className="mutirao-foto"
            />
          </div>
        </div>
      </div>

      <div className="forma-card">
        <div className="forma-card-header">
          <h3 className="forma-card-titulo">Nossos departamentos</h3>
        </div>
        <div className="forma-card-body departamentos-body">
          <div className="departamentos-intro">
            <p>
              Além das ações de voluntariado e dos mutirões, contamos com uma estrutura organizacional
              formada por diferentes áreas de atuação, que trabalham de forma integrada no
              planejamento, execução e acompanhamento das ações, garantindo organização,
              transparência e efetividade no atendimento às famílias.
            </p>
            <p>
              <strong>
                Para quem deseja colocar sua profissão, formação ou área de atuação a serviço do
                projeto, nossos departamentos oferecem diferentes possibilidades de contribuição.
              </strong>
            </p>
          </div>

          <div className="departamentos-grid-6">
            {departamentos.map((dep) => {
              const Icone = dep.icone;
              return (
                <article key={dep.nome} className="departamento-card-item">
                  <div className="departamento-icon-wrapper">
                    <Icone size={36} className="departamento-svg-icon" />
                  </div>
                  <h4 className="departamento-item-titulo">{dep.nome}</h4>
                  <p className="departamento-item-descricao">{dep.descricao}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
