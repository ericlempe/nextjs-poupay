import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: '1',
        name: 'Category 1',
        description: 'description category 1',
        userId: '1',
        createdAt: '2023-01-01',
      },
      {
        id: '2',
        name: 'Category 2',
        description: 'description category 2',
        userId: '1',
        createdAt: '2023-01-01',
      },
      {
        id: '3',
        name: 'Category 3',
        description: 'description category 3',
        userId: '1',
        createdAt: '2023-01-01',
      },
      {
        id: '4',
        name: 'Category 4',
        description: 'description category 4',
        userId: '1',
        createdAt: '2023-01-01',
      },
      {
        id: '5',
        name: 'Category 5',
        description: 'description category 5',
        userId: '1',
        createdAt: '2023-01-01',
      },
    ],
  })
}
