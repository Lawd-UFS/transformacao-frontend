import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import foto1 from '../../assets/home/galeria/galeria-1.jpg'
import foto2 from '../../assets/home/galeria/galeria-2.jpg'
import foto3 from '../../assets/home/galeria/galeria-3.jpg'
import foto4 from '../../assets/home/galeria/galeria-4.jpg'
import foto5 from '../../assets/home/galeria/galeria-5.jpg'
import foto6 from '../../assets/home/galeria/galeria-6.jpg'
import foto7 from '../../assets/home/galeria/galeria-7.jpg'
import foto8 from '../../assets/home/galeria/galeria-8.jpg'
import './SecaoFacaParte.css'

/* ── Tipos ── */
interface CardEngajamento {
  titulo: string
  descricao: string
  href: string
}

interface PropsSecaoFacaParte {
  cards?: CardEngajamento[]
  fotos?: string[]
  exibirGaleria?: boolean
}

/* ── Dados padrão ── */
const cardsPadrao: CardEngajamento[] = [
  {
    titulo: 'Fazer doação',
    descricao:
      'Contribua com qualquer valor para ajudar a tirar as obras do papel. Toda doação faz diferença.',
    href: '/doacao',
  },
  {
    titulo: 'Ser voluntário',
    descricao:
      'Participe dos mutirões e ações do projeto ou das equipes que fazem tudo acontecer nos bastidores.',
    href: '/voluntariado',
  },
  {
    titulo: 'Ser empresa parceira',
    descricao:
      'Sua empresa pode contribuir com materiais, mobiliário ou apoio financeiro e ajudar a realizar sonhos.',
    href: '/parceiras',
  },
]

const fotosPadrao: string[] = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8]

/* ── Componente ── */
export function SecaoFacaParte({
  cards = cardsPadrao,
  fotos = fotosPadrao,
  exibirGaleria = true,
}: PropsSecaoFacaParte) {

  return (
    <section className="secao-faca-parte" aria-label="Faça parte da transformação">

      {/* ── Bloco 1: CTA cards ── */}
      <div className="faca-parte-cta">
        <h2 className="faca-parte-titulo">
          Faça parte dessa{' '}
          <span className="faca-parte-titulo-destaque">transformação!</span>
        </h2>

        <div className="faca-parte-grid">
          {cards.map((card) => (
            <div key={card.href} className="faca-parte-card">
              <div className="faca-parte-card-header">
                <h3 className="faca-parte-card-titulo">{card.titulo}</h3>
              </div>
              <div className="faca-parte-card-corpo">
                <p className="faca-parte-card-descricao">{card.descricao}</p>
                <Link to={card.href} className="faca-parte-card-btn">
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bloco 2: Carrossel de fotos ── */}
      {exibirGaleria && fotos.length > 0 && (
        <div className="faca-parte-galeria" aria-label="Fotos dos mutirões">
          <div className="reformas-carousel-wrapper faca-parte-carousel-override">
            <div className="swiper-button-prev custom-swiper-prev"></div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.custom-swiper-next',
                prevEl: '.custom-swiper-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="reformas-swiper"
            >
              {fotos.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="reforma-slide-content">
                    <img
                      src={src}
                      alt={`Foto do mutirão ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next custom-swiper-next"></div>
          </div>
        </div>
      )}

    </section>
  )
}
