import './SecaoParcerias.css'

interface Parceiro {
  id: number
  nome: string
  logo?: string // Opcional por enquanto, para permitir o placeholder
}

interface PropsSecaoParcerias {
  parceiros?: Parceiro[]
}

const parceirosPadrao: Parceiro[] = [
  { id: 1, nome: 'Empresa Parceira 1' },
  { id: 2, nome: 'Empresa Parceira 2' },
  { id: 3, nome: 'Empresa Parceira 3' },
  { id: 4, nome: 'Empresa Parceira 4' },
  { id: 5, nome: 'Empresa Parceira 5' },
]

export function SecaoParcerias({ parceiros = parceirosPadrao }: PropsSecaoParcerias) {
  return (
    <section className="secao-parcerias" aria-labelledby="titulo-parcerias">
      <div className="secao-parcerias-cabecalho">
        <h2 id="titulo-parcerias" className="secao-parcerias-titulo">
          Quem apoia a nossa causa
        </h2>
      </div>

      <div className="secao-parcerias-grid">
        {parceiros.map((parceiro) => (
          <div key={parceiro.id} className="parceiro-item">
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
          </div>
        ))}
      </div>
    </section>
  )
}
