'use client'

import { Users } from 'lucide-react'
import Header from '@/components/ui/components/Header'
import AltaEmpleado from '@/components/pages/admin/empleados/AltaEmpleado'
import Escritorio from '@/components/ui/Escritorio'

const links = [
  { label: 'Alta Empleado', href: '/' },
  { label: 'Consulta Empleado', href: '/simpson' },
  { label: 'Modificación Empleado', href: '/todolist' },
]

export default function EmpleadosPage() {
  return (
    
    <Escritorio>
      <main className='grid gap-1'>
        <Header
          title='Administración de Empleados'
          subtitle='Gestión de altas y datos del personal'
          links={links}
        />
        <AltaEmpleado />
      </main>
    </Escritorio>
  )
}
