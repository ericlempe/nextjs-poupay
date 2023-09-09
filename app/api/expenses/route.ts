import { db } from 'db'
import { NextResponse } from 'next/server'
import { expenses } from 'schemas/expense'

export async function GET() {
  try {
    const data = await db.select().from(expenses)
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to listen expenses',
      },
      { status: 400 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    await db.insert(expenses).values(payload)
    return NextResponse.json({ message: 'Expense created with sucessfull!' })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to create expense',
      },
      { status: 400 },
    )
  }
}
