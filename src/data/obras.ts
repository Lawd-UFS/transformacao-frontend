import antesNinha from '../assets/casas/antes-ninha.jpg'
import depoisNinha from '../assets/casas/depois-ninha.jpg'
import antesMirian from '../assets/casas/antes-mirian.jpg'
import depoisMirian from '../assets/casas/depois-mirian.jpg'
import antesMichelle from '../assets/casas/antes-michelle.png'
import depoisMichelle from '../assets/casas/depois-michelle.jpg'

export type StatusObra = 'andamento' | 'concluido'

export interface Obra {
  id: number
  titulo: string
  localizacao: string
  status: StatusObra
  ano: number
  imagemAntes: string
  imagemDepois: string
}

export const obrasData: Obra[] = [
  {
    id: 8,
    titulo: 'Casa da D. Ninha',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'andamento',
    ano: 2026,
    imagemAntes: antesNinha,
    imagemDepois: depoisNinha,
  },
  {
    id: 7,
    titulo: 'Casa da Mirian',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: antesMirian,
    imagemDepois: depoisMirian,
  },
  {
    id: 6,
    titulo: 'Casa da Michelle',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: antesMichelle,
    imagemDepois: depoisMichelle,
  },
  {
    id: 5,
    titulo: 'Casa da Ana',
    localizacao: 'Nossa Senhora do Socorro/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: null,
    imagemDepois: null,
  },
  {
    id: 4,
    titulo: 'Casa do Pequenino',
    localizacao: 'Aracaju/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: null,
    imagemDepois: null,
  },
  {
    id: 3,
    titulo: 'Apê dos Gêmeos',
    localizacao: 'Aracaju/SE',
    status: 'concluido',
    ano: 2025,
    imagemAntes: null,
    imagemDepois: null,
  },
]
