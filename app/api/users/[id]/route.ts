import { db } from 'db'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { users } from 'schemas/user'

export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    const data = await db.select().from(users).where(eq(users.id, id))
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to listen user',
      },
      { status: 400 },
    )
  }
}
