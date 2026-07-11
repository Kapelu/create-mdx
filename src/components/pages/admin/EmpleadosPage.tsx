'use client'

import { Users } from 'lucide-react'

import AltaEmpleado from '@/components/pages/admin/empleados/AltaEmpleado'
import Header from '@/components/ui/components/Header'
import HeaderAlta from '@/components/ui/dashboard/HeaderAlta'
import Escritorio from '@/components/ui/Escritorio'

const links = [
  {
    label: 'Alta Empleado',
    href: '/',
  },
  {
    label: 'Consulta Empleado',
    href: '/simpson',
  },
  {
    label: 'Modificación Empleado',
    href: '/todolist',
  },
]

export default function EmpleadosPage() {
  return (
    <Escritorio className='flex h-full min-h-0 w-full flex-col overflow-hidden'>
      <div className='shrink-0'>
        <Header
          icon={Users}
          title='Administración de Empleados'
          subtitle='Gestión de altas y datos del personal'
          links={links}
        />
      </div>

      <section className='mx-16 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface'>
        <div className='shrink-0'>
          <HeaderAlta title='Alta de Empleado' />
        </div>

        <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain'>
          <AltaEmpleado />
        </div>
      </section>
    </Escritorio>
  )
}
