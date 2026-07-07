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
          message: 'Debe ingresar usuario y contraseña.',
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

    // Buscar usuario para autenticar
    const user = await usuarios.findOne({
      usuario,
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

    // Validar contraseña
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

    // Buscar el empleado asociado
    const empleado = await empleados.findOne({
      legajo: user.legajo,
    })

    if (!empleado) {
      return NextResponse.json(
        {
          success: false,
          message: 'No existe un empleado asociado a este usuario.',
        },
        {
          status: 404,
        },
      )
    }

    // Validar que el empleado esté activo
    if (!empleado.activo) {
      return NextResponse.json(
        {
          success: false,
          message: 'El empleado se encuentra inactivo.',
        },
        {
          status: 403,
        },
      )
    }

    // Crear sesión
    await createSession({
      legajo: empleado.legajo,
      usuario: user.usuario,
      puesto: empleado.puesto,
    })

    // Decidir automáticamente el destino
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
        message: 'Error interno del servidor.',
      },
      {
        status: 500,
      },
    )
  }
}
