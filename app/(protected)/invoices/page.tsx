'use client'
import InvoiceCard from '@/components/InvoiceCard'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaCheck, FaMagnifyingGlass } from 'react-icons/fa6'

type invoiceProps = {
  id: number
  month: number
  year: number
  wasPaid: boolean
  total: number
}

export default function InvoicesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [invoices, setInvoices] = useState(Array<invoiceProps>)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const invoices1: Array<invoiceProps> = [
        {
          id: 1,
          month: 1,
          year: 2023,
          wasPaid: false,
          total: 200.0,
        },
        {
          id: 2,
          month: 2,
          year: 2023,
          wasPaid: true,
          total: 200.0,
        },
        {
          id: 3,
          month: 3,
          year: 2023,
          wasPaid: true,
          total: 200.0,
        },
      ]
      setInvoices(invoices1)
      setIsLoading(false)
    }, 2000)
  }, [])

  const SkeletonInvoiceCard = () => {
    return (
      <div className="flex justify-between rounded-lg px-2 py-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="mb-2 h-3 w-40 rounded-full" />
        </div>
        <Skeleton className="h-3 w-8 rounded-full" />
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col px-4 py-5">
      <h2 className="flex items-center justify-center pb-14 text-lg font-semibold text-foreground">
        Invoices
      </h2>

      <div className="flex items-center justify-center">
        <Input className="ml-5" />
        <FaMagnifyingGlass className="relative -left-7 mb-1 text-muted-foreground" />
      </div>

      <ScrollArea className="my-10 h-96 w-full">
        <div className="flex flex-col p-4">
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <SkeletonInvoiceCard />
                  <Separator className="my-2" />
                </div>
              ))}
            </>
          ) : (
            <>
              {invoices.map((invoice: invoiceProps) => (
                <Link href={`invoices/${invoice.id}`} key={invoice.id}>
                  <InvoiceCard
                    title={`Invoice ${invoice.month}/${invoice.year}`}
                    value={invoice.total}
                    icon={<FaCheck />}
                  />
                  <Separator className="my-2" />
                </Link>
              ))}
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
