import { Badge } from '@/components/ui/badge'

type expenseProps = {
  id: number
  title: string
  description: string
  due_date: string
  value: number
  icon: React.ReactNode
}

export default function ExpenseCard(expense: expenseProps) {
  return (
    <div className="flex justify-between rounded-lg py-2">
      <div className="flex items-center gap-2">
        <Badge className="p-4" variant="secondary">
          {expense.icon}
        </Badge>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{expense.title}</p>
          <p className="text-xs text-muted-foreground">{expense.description}</p>
        </div>
      </div>
      <small className="text-xs text-muted-foreground">{expense.value}</small>
    </div>
  )
}
