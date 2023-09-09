import { db } from 'db'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { categories } from 'schemas/category'

export async function PUT(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    const payload = await request.json()
    await db.update(categories).set(payload).where(eq(categories.id, id))
    return NextResponse.json({
      message: 'Category updated with sucessfull!',
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to update category',
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
    await db.delete(categories).where(eq(categories.id, id))
    return NextResponse.json({
      message: 'Category deleted with sucessfull!',
    })
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message ?? 'Failed to delete category',
      },
      { status: 400 },
    )
  }
}
