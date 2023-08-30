'use client'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import {
  FaUtensils,
  FaBook,
  FaShower,
  FaFilm,
  FaPills,
  FaBusSimple,
  FaComputer,
  FaHouse,
  FaEllipsis,
} from 'react-icons/fa6'

interface iCategory {
  id: number
  title: string
  icon: React.ReactNode
}

export default function FormExpense() {
  const categorias: Array<iCategory> = [
    {
      id: 1,
      title: 'Alimentação',
      icon: <FaUtensils />,
    },
    {
      id: 2,
      title: 'Estudo',
      icon: <FaBook />,
    },
    {
      id: 3,
      title: 'Higiene',
      icon: <FaShower />,
    },
    {
      id: 4,
      title: 'Lazer',
      icon: <FaFilm />,
    },
    {
      id: 5,
      title: 'Médico',
      icon: <FaPills />,
    },
    {
      id: 6,
      title: 'Moradia',
      icon: <FaHouse />,
    },
    {
      id: 7,
      title: 'Transporte',
      icon: <FaBusSimple />,
    },
    {
      id: 8,
      title: 'Profissional',
      icon: <FaComputer />,
    },
    {
      id: 9,
      title: 'Outros',
      icon: <FaEllipsis />,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 py-14">
      <div className="grid grid-cols-1 gap-6">
        <Input placeholder="Title" />
        <Input placeholder="Due date" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categorias.map((item) => (
              <SelectItem value={item.id.toString()} key={item.id}>
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Switch id="fixed-expense" />
          <Label htmlFor="fixed-expense">Fixed expense?</Label>
        </div>
        <Textarea rows={8} placeholder="Description.."></Textarea>
        <Button className="mt-6">Create</Button>
        <SheetClose asChild>
          <Button variant={'secondary'}>Cancel</Button>
        </SheetClose>
      </div>
    </div>
  )
}
