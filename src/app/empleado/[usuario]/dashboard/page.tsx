import { redirect } from 'next/navigation'

import AdminDashboard from '@/components/pages/AdminDashboard'

import { getSession } from '@/lib/login/session'
import { getEmployeeByLegajo } from '@/lib/login/employee'

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  const empleado = await getEmployeeByLegajo(session.legajo)

  if (!empleado) {
    redirect('/login')
  }

  return <AdminDashboard empleado={empleado} />
}
