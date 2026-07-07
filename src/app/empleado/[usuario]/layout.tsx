import { notFound } from 'next/navigation'

import { getSession } from '@/lib/login/session'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    usuario: string
  }>
}

export default async function EmpleadoLayout({
  children,
  params,
}: LayoutProps) {
  const { usuario } = await params

  const session = await getSession()

  if (!session) {
    notFound()
  }

  if (session.usuario !== usuario) {
    notFound()
  }

  return <>{children}</>
}
