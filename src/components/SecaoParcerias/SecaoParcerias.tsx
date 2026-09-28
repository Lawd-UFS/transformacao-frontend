import './SecaoParcerias.css'

import logoImpacto from '../../assets/empresas-parceiras/logos-empresas/logo-impacto.png'
import logoCasaDasTintas from '../../assets/empresas-parceiras/logos-empresas/logo-casa-tintas.png'
import logoSerpaf from '../../assets/empresas-parceiras/logos-empresas/logo-serpaf.png'
import logoDeMelo from '../../assets/empresas-parceiras/logos-empresas/logo-demelo.png'
import logoInnovare from '../../assets/empresas-parceiras/logos-empresas/logo-innovare.png'
import logoGaletoPrensado from '../../assets/empresas-parceiras/logos-empresas/logo-galeto-prensado.png'
import logoPrimeEscritorio from '../../assets/empresas-parceiras/logos-empresas/logo-prime.png'
import logoRotary from '../../assets/empresas-parceiras/logos-empresas/logo-rotary.png'
import logoCaju from '../../assets/empresas-parceiras/logos-empresas/logo-caju.png'

interface Parceiro {
  id: number
  nome: string
  logo?: string // Opcional por enquanto, para permitir o placeholder
  site?: string // Link para o site da empresa parceira
}

interface PropsSecaoParcerias {
  parceiros?: Parceiro[]
  titulo?: React.ReactNode
}

const parceirosPadrao: Parceiro[] = [
  { id: 1, nome: 'Impacto', logo: logoImpacto, site: 'https://www.instagram.com/impactoconstrucoes/' },
  { id: 2, nome: 'Casa das Tintas', logo: logoCasaDasTintas, site: 'https://www.casadastintas.com.br/' },
  { id: 3, nome: 'Serpaf', logo: logoSerpaf, site: 'https://www.paflogistica.com.br/' },
  { id: 4, nome: 'DeMelo', logo: logoDeMelo, site: 'https://www.instagram.com/demeloconstrutora/' },
  { id: 5, nome: 'Innovare', logo: logoInnovare, site: 'https://www.instagram.com/_innovarehome/' },
  { id: 6, nome: 'Galeto Prensado', logo: logoGaletoPrensado, site: 'https://www.instagram.com/galetoprensado/' },
  { id: 7, nome: 'Prime Escritório', logo: logoPrimeEscritorio, site: 'https://www.instagram.com/primeescritorios/' },
  { id: 8, nome: 'Rotary', logo: logoRotary, site: 'https://www.rotary.org/pt' },
  { id: 9, nome: 'Caju', logo: logoCaju, site: 'https://www.caju.com.br/' },
]

export function SecaoParcerias({ parceiros = parceirosPadrao, titulo }: PropsSecaoParcerias) {
  return (
    <section className="secao-parcerias" aria-labelledby="titulo-parcerias">
      <div className="secao-parcerias-cabecalho">
        <h2 id="titulo-parcerias" className="secao-parcerias-titulo">
          {titulo ?? (
            <>
              Nossas empresas <span className="secao-parcerias-titulo-destaque">parceiras</span>
            </>
          )}
        </h2>
      </div>

      <div className="secao-parcerias-grid">
        {parceiros.map((parceiro) => (
          <div key={parceiro.id} className="parceiro-item">
            <a
              href={parceiro.site || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="parceiro-link"
            >
              {parceiro.logo ? (
                <img
                  src={parceiro.logo}
                  alt={`Logo da ${parceiro.nome}`}
                  className="parceiro-logo"
                />
              ) : (
                <div className="parceiro-placeholder" aria-label={`Espaço para logo da ${parceiro.nome}`}>
                  {parceiro.nome}
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
