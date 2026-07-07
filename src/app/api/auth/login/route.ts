import { NextResponse } from 'next/server'

import { comparePassword } from '@/lib/login/auth'
import clientPromise from '@/lib/login/mongodb'
import { createSession } from '@/lib/login/session'

import type { Empleado, Usuario } from '@/types/database'

const ADMIN_PUESTOS = ['Gerencia', 'Logística', 'RRHH']

export async function POST(request: Request) {
  try {
    const { usuario, password } = await request.json()

    if (!usuario || !password) {
      return NextResponse.json(
        {
          success: false,
          icon: 'warning',
          messages: ['Debe ingresar usuario y contraseña.'],
        },
        {
          status: 400,
        },
      )
    }

    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)

    const usuarios = db.collection<Usuario>('usuarios')
    const empleados = db.collection<Empleado>('empleados')

    const user = await usuarios.findOne({
      usuario,
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          icon: 'error',
          messages: ['Usuario incorrecto.'],
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
          icon: 'error',
          messages: ['Contraseña incorrecta.'],
        },
        {
          status: 401,
        },
      )
    }

    const empleado = await empleados.findOne({
      legajo: user.legajo,
    })

    if (!empleado) {
      return NextResponse.json(
        {
          success: false,
          icon: 'warning',
          messages: ['No existe un empleado asociado a este usuario.'],
        },
        {
          status: 404,
        },
      )
    }

    if (!empleado.activo) {
      return NextResponse.json(
        {
          success: false,
          icon: 'warning',
          messages: ['El empleado se encuentra inactivo.'],
        },
        {
          status: 403,
        },
      )
    }

    await createSession({
      legajo: empleado.legajo,
      usuario: user.usuario,
      puesto: empleado.puesto,
    })

    const redirectTo = ADMIN_PUESTOS.includes(empleado.puesto)
      ? `/empleado/${user.usuario}/dashboard`
      : `/empleado/${user.usuario}/main`

    return NextResponse.json({
      success: true,
      redirectTo,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        icon: 'error',
        messages: ['Error interno del servidor.'],
      },
      {
        status: 500,
      },
    )
  }
}
