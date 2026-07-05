import { NextResponse } from 'next/server'

import clientPromise from '@/lib/mongodb'
import { comparePassword } from '@/lib/auth'
import { createSession } from '@/lib/session'

import type { Usuario } from '@/types/database'

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

    const user = await usuarios.findOne({
      usuario,
      activo: true,
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Usuario incorrectos.',
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
          message: 'Contraseña incorrectos.',
        },
        {
          status: 401,
        },
      )
    }

    await createSession({
      legajo: user.legajo,
      usuario: user.usuario,
      puesto: user.puesto,
    })

    return NextResponse.json({
      success: true,
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
