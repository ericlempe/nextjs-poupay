import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: '1',
        month: '1',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-01-01',
      },
      {
        id: '2',
        month: '2',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-02-01',
      },
      {
        id: '3',
        month: '3',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-03-01',
      },
      {
        id: '4',
        month: '4',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-04-01',
      },
      {
        id: '5',
        month: '5',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-05-01',
      },
      {
        id: '6',
        month: '6',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-05-01',
      },
      {
        id: '7',
        month: '7',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-01-01',
      },
      {
        id: '8',
        month: '8',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-07-01',
      },
      {
        id: '9',
        month: '9',
        year: '2023',
        userId: '1',
        wasPaid: false,
        createdAt: '2023-08-01',
      },
    ],
  })
}
