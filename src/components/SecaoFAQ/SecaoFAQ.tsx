import { useState } from 'react'
import './SecaoFAQ.css'

interface FAQ {
  id: number
  pergunta: string
  resposta: string | React.ReactNode
}

const faqsPadrao: FAQ[] = [
  {
    id: 1,
    pergunta: 'O que é o Projeto Transformação?',
    resposta: (
      <>
        <p>
          Somos uma organização sem fins lucrativos, formada por voluntários de diversas áreas e dedicada a transformar a realidade de famílias em situação de vulnerabilidade por meio de reformas e pequenas construções.
        </p>
        <p>
          Desde 2020, realizamos transformações em Aracaju/SE e região, atuando de forma independente com foco em moradia digna, inclusão social e compromisso com a comunidade.
        </p>
      </>
    ),
  },
  {
    id: 2,
    pergunta: 'Como me torno um voluntário?',
    resposta: 'Você pode se inscrever pela seção "Faça parte" e escolher como deseja contribuir com o projeto.',
  },
  {
    id: 3,
    pergunta: 'Preciso ter experiência ou ser de área técnica para ser voluntário?',
    resposta: 'Não. Existem oportunidades para todos os perfis, desde apoio nas ações até participação nas equipes internas do projeto.',
  },
  {
    id: 4,
    pergunta: 'Posso contribuir com minha formação ou experiência profissional?',
    resposta: 'Sim. Também contamos com voluntários especializados em diferentes áreas, que ajudam o projeto com seu conhecimento e experiência profissional.',
  },
  {
    id: 5,
    pergunta: 'Como faço para doar?',
    resposta: 'As doações podem ser feitas pela seção Faça parte, na opção de Doação. Não existe valor mínimo para contribuir, qualquer valor já faz diferença.',
  },
  {
    id: 6,
    pergunta: 'Como minha empresa pode participar?',
    resposta: 'Sua empresa pode contribuir com materiais, mobiliário ou apoio financeiro para ajudar a tornar as obras possíveis',
  },
  {
    id: 7,
    pergunta: 'Minha empresa pode apoiar um projeto específico ou o projeto como um todo?',
    resposta: 'Sim. As empresas podem apoiar projetos específicos ou contribuir de forma geral e contínua com o projeto. É só entrar em contato para conversarmos sobre a melhor forma de ajudar.',
  },
]

export function SecaoFAQ({ faqs = faqsPadrao }: { faqs?: FAQ[] }) {
  const [abertoId, setAbertoId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setAbertoId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="secao-faq" aria-labelledby="titulo-faq">
      <div className="secao-faq-cabecalho">
        <h2 id="titulo-faq" className="secao-faq-titulo">
          Perguntas frequentes
        </h2>
      </div>

      <div className="secao-faq-lista">
        {faqs.map((faq) => {
          const isOpen = abertoId === faq.id
          return (
            <div
              key={faq.id}
              className={`faq-item ${isOpen ? 'faq-item-aberto' : ''}`}
            >
              <button
                className="faq-pergunta"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
              >
                <div className="faq-pergunta-conteudo">
                  <svg
                    className="faq-icone-pergunta"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                  <span>{faq.pergunta}</span>
                </div>
                <svg
                  className={`faq-icone-seta ${isOpen ? 'faq-icone-seta-girar' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              
              <div
                className="faq-resposta-wrapper"
                style={{
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                }}
              >
                <div className="faq-resposta-conteudo">
                  <div className="faq-resposta-texto">
                    {faq.resposta}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
