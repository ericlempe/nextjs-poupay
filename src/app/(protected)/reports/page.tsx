import ExpenseMonthChart from '@/components/Charts/ExpenseMonthChart'
import PaymentYearChart from '@/components/Charts/PaymentYearChart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

type monthsProps = {
  id: number
  name: string
}

export default function ReportsPage() {
  const months: Array<monthsProps> = [
    {
      id: 1,
      name: 'January',
    },
    {
      id: 2,
      name: 'February',
    },
    {
      id: 3,
      name: 'March',
    },
    {
      id: 4,
      name: 'April',
    },
    {
      id: 5,
      name: 'May',
    },
    {
      id: 6,
      name: 'June',
    },
    {
      id: 7,
      name: 'July',
    },
    {
      id: 8,
      name: 'August',
    },
    {
      id: 9,
      name: 'September',
    },
    {
      id: 10,
      name: 'October',
    },
    {
      id: 11,
      name: 'November',
    },
    {
      id: 12,
      name: 'December',
    },
  ]
  const years: Array<number> = [2022, 2023, 2024]

  return (
    <div className="flex h-full flex-col px-4 py-5">
      <h2 className="flex items-center justify-center pb-14 text-lg font-semibold text-foreground">
        Reports
      </h2>

      <div className="flex flex-col px-2">
        <div className="rounded-lg bg-card p-2">
          <div className="flex justify-end">
            <Select>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Months" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem value={month.id.toString()} key={month.id}>
                    {month.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <ExpenseMonthChart
              values={[44, 55, 13, 43, 22]}
              expenses={[
                'Celular',
                'Agua',
                'Energia',
                'Internet',
                'Comida do mês',
              ]}
            />
          </div>
        </div>
        <Separator className="my-6" />
        <div className="rounded-lg bg-card p-2">
          <div className="flex justify-end">
            <Select>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Years" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem value={year.toString()} key={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-12 flex items-center justify-center ">
            <PaymentYearChart
              values={[
                44.23, 55.0, 120.2, 97.89, 56.23, 150.23, 160.0, 143.2, 120.45,
                80.99, 34.23, 51.99,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
