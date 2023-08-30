'use client'
import React from 'react'
import {
  FaChartSimple,
  FaGear,
  FaHouse,
  FaMoneyCheck,
  FaReceipt,
} from 'react-icons/fa6'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNavigator() {
  const pathname = usePathname()

  function handleColorPageIcon(route: string): string {
    return route === pathname ? 'text-primary' : 'text-secondary'
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full">
      <div className="mx-auto flex max-w-lg justify-around px-4 pt-2 font-medium">
        <Link
          className={`text-2xl ${handleColorPageIcon('/dashboard')}`}
          href={'/dashboard'}
        >
          <FaHouse />
        </Link>
        <Link
          className={`text-2xl ${handleColorPageIcon('/invoices')}`}
          href={'/invoices'}
        >
          <FaReceipt />
        </Link>
        <div className="relative -top-10 rounded-full bg-primary px-4 py-4 ">
          <Link
            className={`text-2xl ${handleColorPageIcon('/')}`}
            href={'/dashboard'}
          >
            <FaMoneyCheck />
          </Link>
        </div>
        <Link
          className={`text-2xl ${handleColorPageIcon('/reports')}`}
          href={'/reports'}
        >
          <FaChartSimple />
        </Link>
        <Link
          className={`text-2xl ${handleColorPageIcon('/settings')}`}
          href={'/settings'}
        >
          <FaGear />
        </Link>
      </div>
    </div>
  )
}
