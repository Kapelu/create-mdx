import { NextResponse } from 'next/server'
import clientPromise from '@/lib/login/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const client = await clientPromise

    const db = client.db('transporte')

    const result = await db.collection('empleados').insertOne(body)

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Error al guardar empleado' },
      { status: 500 },
    )
  }
}
