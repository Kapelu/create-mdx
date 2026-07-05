import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value

  if (!token) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  try {
    await jwtVerify(token, secret)

    return NextResponse.next()
  } catch {
    return NextResponse.rewrite(new URL('/404', request.url))
  }
}

export const config = {
  matcher: ['/empleado/:path*'],
}
