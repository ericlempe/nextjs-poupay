'use client'
import GoalChart from '@/components/Charts/GoalChart'
import IconDialog from '@/components/IconDialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  FaCheck,
  FaDollarSign,
  FaHandHoldingDollar,
  FaTags,
} from 'react-icons/fa6'
import FormCategory from '../categories/page'
import FormIncome from '../incomes/page'
import FormExpense from '../expenses/page'
import { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import ExpenseCard from '@/components/ExpenseCard'

type expenseProps = {
  id: number
  title: string
  description: string
  due_date: string
  value: number
  icon: React.ReactNode
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [expenses, setExpenses] = useState(Array<expenseProps>)

  useEffect(() => {
    setIsLoading(true)
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
      <div className="flex justify-between rounded-lg py-2">
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

  // <div className="flex py-20">
  //       <IconDialog
  //         icon={<FaReceipt className="h-4 w-4" />}
  //         title="Register Expense"
  //         subTitle=""
  //         content={<FormRegisterPayment />}
  //       />
  //       <IconDialog
  //         icon={<FaHandHoldingDollar className="h-4 w-4" />}
  //         title="Register Income"
  //         subTitle=""
  //         content={<FormRegisterIncome />}
  //       />
  //     </div>

  return (
    <div className="my-4 flex h-full flex-col px-6 py-5">
      <div className="flex justify-start space-x-5">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-foreground">Hello Eric</p>
          <p className="text-sm text-muted-foreground">Welcome Back!</p>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <GoalChart total={75} paid={45} />
      </div>

      <div className="flex h-full items-center justify-around py-4">
        <IconDialog
          icon={<FaTags className="h-4 w-4" />}
          iconTitle="Categories"
          title="Categories"
          subTitle=""
          content={<FormCategory />}
        />
        <IconDialog
          icon={<FaDollarSign className="h-4 w-4" />}
          iconTitle="Incomes"
          title="Incomes"
          subTitle=""
          content={<FormIncome />}
        />
        <IconDialog
          icon={<FaHandHoldingDollar className="h-4 w-4" />}
          iconTitle="Expenses"
          title="Expenses"
          subTitle=""
          content={<FormExpense />}
        />
      </div>

      <h2 className="text-md my-4 font-semibold text-muted-foreground">
        Pendings
      </h2>

      <ScrollArea className="h-48 w-full">
        <div className="flex flex-col">
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
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
