import { NextResponse } from 'next/server'

import clientPromise from '@/lib/mongodb'
import { getSession } from '@/lib/session'
import { getEmployeeByLegajo } from '@/lib/employee'
import type { Empleado } from '@/types/database'

export async function GET() {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: 'No autenticado.',
        },
        {
          status: 401,
        },
      )
    }

    const empleado = await getEmployeeByLegajo(session.legajo)

    if (!empleado) {
      return NextResponse.json(
        {
          success: false,
          message: 'Empleado no encontrado.',
        },
        {
          status: 404,
        },
      )
    }

    return NextResponse.json({
      success: true,
      empleado,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor.',
      },
      {
        status: 500,
      },
    )
  }
}
