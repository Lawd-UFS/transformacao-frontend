import { Link } from 'react-router-dom'
import './BannerFacaParte.css'

const botoes = [
  { label: 'Fazer doação',       href: '/doacao' },
  { label: 'Ser voluntário',     href: '/voluntariado' },
  { label: 'Ser empresa parceira', href: '/parceria' },
]

export function BannerFacaParte() {
  return (
    <section className="banner-faca-parte" aria-label="Faça parte da transformação">
      <h2 className="banner-faca-parte-titulo">
        Faça parte dessa{' '}
        <span className="banner-faca-parte-destaque">transformação</span>!
      </h2>

      <div className="banner-faca-parte-botoes">
        {botoes.map((btn) => (
          <Link key={btn.href} to={btn.href} className="banner-faca-parte-btn">
            {btn.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
