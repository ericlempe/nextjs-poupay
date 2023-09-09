import { db } from 'db'
import { NextResponse } from 'next/server'
import { categories } from 'schemas/category'

export async function GET() {
  try {
    const data = await db.select().from(categories)
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to listen categories',
      },
      { status: 400 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    await db.insert(categories).values(payload)
    return NextResponse.json({ message: 'Category created with sucessfull!' })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to create category',
      },
      { status: 400 },
    )
  }
}
