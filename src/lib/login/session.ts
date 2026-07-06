import { createToken, verifyToken, type SessionPayload } from '@/lib/login/auth'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'session'

export async function createSession(payload: SessionPayload): Promise<void> {
  const token = await createToken(payload)

  const cookieStore = await cookies()

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  })
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()

  const token = cookieStore.get(COOKIE_NAME)?.value

  if (!token) {
    return null
  }

  return await verifyToken(token)
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies()

  cookieStore.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  })
}
