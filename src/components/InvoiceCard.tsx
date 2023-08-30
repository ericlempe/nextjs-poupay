import { Badge } from './ui/badge'

type invoiceCardProps = {
  title: string
  value: number
  icon: React.ReactNode
}

export default function InvoiceCard({ title, value, icon }: invoiceCardProps) {
  return (
    <div className="flex justify-between rounded-lg px-2 py-2">
      <div className="flex items-center gap-2">
        <Badge className="p-4" variant="secondary">
          {icon}
        </Badge>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
        </div>
      </div>
      <small className="text-xs text-muted-foreground">{value}</small>
    </div>
  )
}
