import { NextResponse } from 'next/server'

import { deleteSession } from '@/lib/login/session'

export async function POST() {
  try {
    await deleteSession()

    return NextResponse.json(
      {
        success: true,
      },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        icon: 'error',
        messages: ['Error al cerrar la sesión.'],
      },
      {
        status: 500,
      },
    )
  }
}
