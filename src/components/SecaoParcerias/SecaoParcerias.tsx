import './SecaoParcerias.css'

import logoImpacto from '../../assets/empresas-parceiras/logos-empresas/01_impacto.png'
import logoCasaDasTintas from '../../assets/empresas-parceiras/logos-empresas/02_casa-das-tintas.png'
import logoDeMelo from '../../assets/empresas-parceiras/logos-empresas/03_demelo.png'
import logoBoxxeJeans from '../../assets/empresas-parceiras/logos-empresas/04_boxxe-jeans.png'
import logoGaletoPrensado from '../../assets/empresas-parceiras/logos-empresas/05_galeto-prensado.png'
import logoMobMoveis from '../../assets/empresas-parceiras/logos-empresas/06_mob-moveis.png'
import logoCaju from '../../assets/empresas-parceiras/logos-empresas/07_caju.png'
import logoSeuMoraesBarbearia from '../../assets/empresas-parceiras/logos-empresas/08_seu-moraes-barbearia.png'
import logoGrupoGama from '../../assets/empresas-parceiras/logos-empresas/09_grupo-gama.png'
import logoOleSorvetes from '../../assets/empresas-parceiras/logos-empresas/10_ole-sorvetes.png'
import logoPafLogistica from '../../assets/empresas-parceiras/logos-empresas/11_paf-logistica.png'
import logoUnio from '../../assets/empresas-parceiras/logos-empresas/12_unio.png'

interface Parceiro {
  id: number
  nome: string
  logo?: string // Opcional por enquanto, para permitir o placeholder
  site?: string // Link para o site da empresa parceira
}

interface PropsSecaoParcerias {
  parceiros?: Parceiro[]
}

const parceirosPadrao: Parceiro[] = [
  { id: 1, nome: 'Impacto', logo: logoImpacto, site: 'https://www.instagram.com/impactoconstrucoes/' },
  { id: 2, nome: 'Casa das Tintas', logo: logoCasaDasTintas, site: 'https://www.casadastintas.com.br/' },
  { id: 3, nome: 'De Melo', logo: logoDeMelo, site: 'https://www.instagram.com/demeloconstrutora/' },
  { id: 4, nome: 'Boxxe Jeans', logo: logoBoxxeJeans, site: 'https://www.instagram.com/boxxejeans/' },
  { id: 5, nome: 'Galeto Prensado', logo: logoGaletoPrensado, site: 'https://www.instagram.com/galetoprensado/' },
  { id: 6, nome: 'Mob Móveis', logo: logoMobMoveis, site: 'https://www.instagram.com/mob.moveis/' },
  { id: 7, nome: 'Caju', logo: logoCaju, site: 'https://www.caju.com.br/' },
  { id: 8, nome: 'Seu Moraes Barbearia', logo: logoSeuMoraesBarbearia, site: 'https://www.instagram.com/seumoraesbarbearia/' },
  { id: 9, nome: 'Grupo Gama', logo: logoGrupoGama, site: 'https://www.gama.eng.br/' },
  { id: 10, nome: 'Olé Sorvetes', logo: logoOleSorvetes, site: 'https://www.instagram.com/olesorvetes/' },
  { id: 11, nome: 'PAF Logística', logo: logoPafLogistica, site: 'https://www.paflogistica.com.br/' },
  { id: 12, nome: 'Unio', logo: logoUnio, site: 'https://www.unio.co/' },
]

export function SecaoParcerias({ parceiros = parceirosPadrao }: PropsSecaoParcerias) {
  return (
    <section className="secao-parcerias" aria-labelledby="titulo-parcerias">
      <div className="secao-parcerias-cabecalho">
        <h2 id="titulo-parcerias" className="secao-parcerias-titulo">
          Nossas empresas <span className="secao-parcerias-titulo-destaque">parceiras</span>
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
