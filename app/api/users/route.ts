import { db } from 'db'
import { NextResponse } from 'next/server'
import { users } from 'schemas/user'

export async function GET() {
  try {
    const data = await db.select().from(users)
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
    await db.insert(users).values(payload)
    return NextResponse.json({ message: 'User created with sucessfull!' })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to create user',
      },
      { status: 400 },
    )
  }
}
