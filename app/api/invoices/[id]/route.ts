import { db } from 'db'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { invoices } from 'schemas/invoice'
import { invoicesExpenses } from 'schemas/invoiceExpense'

export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    const data = await db
      .select()
      .from(invoices)
      .innerJoin(invoicesExpenses, eq(invoices.id, invoicesExpenses.invoiceId))
      .where(eq(invoices.id, id))

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to listen invoice`s detail',
      },
      { status: 400 },
    )
  }
}
