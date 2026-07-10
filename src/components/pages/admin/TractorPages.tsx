'use client'

import { Truck } from 'lucide-react'
import Header from '@/components/ui/components/Header'
import Escritorio from '@/components/ui/Escritorio'

const links = [
  { label: 'Alta', href: '/unidad/alta' },
  { label: 'Consulta', href: '/unidad/consulta' },
  { label: 'Modificación', href: '/unidad/modificacion' },
]

export default function TractorPage() {
  return (
    <Escritorio>
      <main className='grid gap-1'>
        <Header
          icon={Truck}
          title='Administración de Camión'
          subtitle='Gestión de unidades tractoras'
          links={links}
        />
      </main>
    </Escritorio>
  )
}
