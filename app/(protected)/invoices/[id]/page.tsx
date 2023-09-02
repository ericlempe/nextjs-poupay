'use client'
import ExpenseCard from '@/components/ExpenseCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaAngleLeft, FaCheck } from 'react-icons/fa6'

type expenseProps = {
  id: number
  title: string
  description: string
  due_date: string
  value: number
  icon: React.ReactNode
}

export default function InvoiceDetailsPage() {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [expenses, setExpenses] = useState(Array<expenseProps>)

  useEffect(() => {
    setIsLoading(true)

    fetch('/api/expenses')
      .then((response) => response.json())
      .then((data) => console.log(data))

    setTimeout(() => {
      const expenses1: Array<expenseProps> = [
        {
          id: 1,
          title: 'Despesa 1',
          description: 'conta de luz',
          due_date: '10/07/2023',
          value: 150.0,
          icon: <FaCheck />,
        },
        {
          id: 2,
          title: 'Despesa 2',
          description: 'conta de agua',
          due_date: '12/07/2023',
          value: 120.0,
          icon: <FaCheck />,
        },
        {
          id: 3,
          title: 'Despesa 3',
          description: 'conta de internet',
          due_date: '07/07/2023',
          value: 100.0,
          icon: <FaCheck />,
        },
      ]
      setExpenses(expenses1)
      setIsLoading(false)
    }, 2000)
  }, [])

  const SkeletonExpenseCard = () => {
    return (
      <div className="flex justify-between rounded-lg px-2 py-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col space-y-1">
            <Skeleton className="mb-2 h-3 w-36 rounded-full" />
            <Skeleton className="w-45 mb-2 h-3 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-3 w-8 rounded-full" />
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col px-4 py-5">
      <div className="flex items-center justify-between pb-14">
        <Link className="text-secondary" href={'/invoices'}>
          <FaAngleLeft />
        </Link>
        <div className="flex flex-col space-y-1">
          <h2 className="text-lg font-semibold text-foreground">Detalhes</h2>
          <p className="text-sm text-muted-foreground">Invoice #{params.id}</p>
        </div>
        <span></span>
      </div>

      <ScrollArea className="my-10 h-96 w-full">
        <div className="flex flex-col p-4">
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <SkeletonExpenseCard />
                  <Separator className="my-2" />
                </div>
              ))}
            </>
          ) : (
            <>
              {expenses.map((expense: expenseProps) => (
                <div key={expense.id}>
                  <ExpenseCard {...expense} />
                  <Separator className="my-2" />
                </div>
              ))}
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-foreground">Incomes</p>
                <span className="text-sm text-muted-foreground">R$1230,00</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-foreground">
                  Expenses
                </p>
                <span className="text-sm text-muted-foreground">R$850,00</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-foreground">Balance</p>
                <span className="text-sm text-muted-foreground">R$320,00</span>
              </div>
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
