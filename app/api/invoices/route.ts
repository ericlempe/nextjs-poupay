import { db } from 'db'
import { NextResponse } from 'next/server'
import { invoices } from 'schemas/invoice'

export async function GET() {
  try {
    const data = await db.select().from(invoices)
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to listen invoices',
      },
      { status: 400 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    await db.insert(invoices).values(payload)
    return NextResponse.json({ message: 'Invoice created with sucessfull!' })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to create invoice',
      },
      { status: 400 },
    )
  }
}
