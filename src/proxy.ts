import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('session')?.value

  if (!token) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  try {
    const { payload } = await jwtVerify(token, secret)

    const usuario = payload.usuario as string

    const pathname = request.nextUrl.pathname

    const match = pathname.match(/^\/empleado\/([^/]+)\/dashboard$/)

    if (!match) {
      return NextResponse.rewrite(new URL('/404', request.url))
    }

    const usuarioUrl = match[1]

    if (usuario !== usuarioUrl) {
      return NextResponse.rewrite(new URL('/404', request.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.rewrite(new URL('/404', request.url))
  }
}

export const config = {
  matcher: ['/empleado/:path*'],
}
