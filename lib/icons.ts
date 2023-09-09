import {
  FaBook,
  FaBusSimple,
  FaComputer,
  FaEllipsis,
  FaFilm,
  FaHouse,
  FaPills,
  FaShower,
  FaUtensils,
} from 'react-icons/fa6'

interface iconProps {
  id: number
  title: string
  icon: React.ReactNode
}

export const icons: Array<iconProps> = [
  {
    id: 1,
    title: 'Alimentação',
    icon: FaUtensils,
  },
  {
    id: 2,
    title: 'Estudo',
    icon: FaBook,
  },
  {
    id: 3,
    title: 'Higiene',
    icon: FaShower,
  },
  {
    id: 4,
    title: 'Lazer',
    icon: FaFilm,
  },
  {
    id: 5,
    title: 'Médico',
    icon: FaPills,
  },
  {
    id: 6,
    title: 'Moradia',
    icon: FaHouse,
  },
  {
    id: 7,
    title: 'Transporte',
    icon: FaBusSimple,
  },
  {
    id: 8,
    title: 'Profissional',
    icon: FaComputer,
  },
  {
    id: 9,
    title: 'Outros',
    icon: FaEllipsis,
  },
]
