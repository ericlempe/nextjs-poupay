import { db } from 'db'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { expenses } from 'schemas/expense'

export async function PUT(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    const payload = await request.json()
    await db.update(expenses).set(payload).where(eq(expenses.id, id))
    return NextResponse.json({
      message: 'Expense updated with sucessfull!',
    })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to update expense',
      },
      { status: 400 },
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    await db.delete(expenses).where(eq(expenses.id, id))
    return NextResponse.json({
      message: 'Expense deleted with sucessfull!',
    })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to delete expense',
      },
      { status: 400 },
    )
  }
}
