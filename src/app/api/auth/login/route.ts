import { NextResponse } from 'next/server'

import clientPromise from '@/lib/mongodb'
import { comparePassword } from '@/lib/auth'
import { createSession } from '@/lib/session'

import type { Usuario } from '@/types/database'

const ADMIN_PUESTOS = ['Gerencia', 'Logística', 'RRHH']

export async function POST(request: Request) {
  try {
    const { usuario, password, tipoAcceso } = await request.json()

    if (!usuario || !password || !tipoAcceso) {
      return NextResponse.json(
        {
          success: false,
          message: 'Debe ingresar usuario, contraseña y tipo de acceso.',
        },
        {
          status: 400,
        },
      )
    }

    const client = await clientPromise

    const db = client.db(process.env.MONGODB_DB)

    const usuarios = db.collection<Usuario>('usuarios')

    const user = await usuarios.findOne({
      usuario,
      activo: true,
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Usuario incorrecto.',
        },
        {
          status: 401,
        },
      )
    }

    const passwordCorrecta = await comparePassword(password, user.password)

    if (!passwordCorrecta) {
      return NextResponse.json(
        {
          success: false,
          message: 'Contraseña incorrecta.',
        },
        {
          status: 401,
        },
      )
    }

    // Validación del tipo de acceso
    if (tipoAcceso === 'admin') {
      if (!ADMIN_PUESTOS.includes(user.puesto)) {
        return NextResponse.json(
          {
            success: false,
            message: 'Debe ingresar por Chofer.',
          },
          {
            status: 403,
          },
        )
      }
    }

    if (tipoAcceso === 'chofer') {
      if (user.puesto !== 'Chofer') {
        return NextResponse.json(
          {
            success: false,
            message: 'Debe ingresar por Administrador.',
          },
          {
            status: 403,
          },
        )
      }
    }

    await createSession({
      legajo: user.legajo,
      usuario: user.usuario,
      puesto: user.puesto,
    })

    return NextResponse.json({
      success: true,
      redirectTo: `/empleado/${user.usuario}/dashboard`,
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
