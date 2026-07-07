import { notFound, redirect } from 'next/navigation'

import { getEmployeeByLegajo } from '@/lib/login/employee'
import { getSession } from '@/lib/login/session'

const ADMIN_PUESTOS = ['Gerencia', 'Logística', 'RRHH']

interface PageProps {
  params: Promise<{
    usuario: string
  }>
}

export default async function EmpleadoPage({ params }: PageProps) {
  const { usuario } = await params

  const session = await getSession()

  if (!session) {
    notFound()
  }

  const empleado = await getEmployeeByLegajo(session.legajo)

  if (!empleado) {
    notFound()
  }

  if (ADMIN_PUESTOS.includes(empleado.puesto)) {
    redirect(`/empleado/${usuario}/dashboard`)
  }

  redirect(`/empleado/${usuario}/main`)
}
