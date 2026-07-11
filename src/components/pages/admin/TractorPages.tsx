'use client'

import { Users } from 'lucide-react'

import AltaTractor from './tractor/AltaTractor'
import Header from '@/components/ui/components/Header'
import HeaderAlta from '@/components/ui/dashboard/HeaderAlta'
import Escritorio from '@/components/ui/Escritorio'

const links = [
  {
    label: 'Alta',
    href: '/tractor/alta',
  },
  {
    label: 'Consulta',
    href: '/tractor/consulta',
  },
  {
    label: 'Modificación',
    href: '/tractor/modicicacion',
  },
  {
    label: 'Baja',
    href: '/tractor/baja',
  },
]

export default function EmpleadosPage() {
  return (
    <Escritorio className='flex h-full min-h-0 w-full flex-col overflow-hidden'>
      <div className='shrink-0'>
        <Header
          icon={Users}
          title='Administración de Camion-Tractor'
          subtitle='Gestión de altas y datos de unidades tractoras'
          links={links}
        />
      </div>

      <section className='mx-16 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface'>
        <div className='shrink-0'>
          <HeaderAlta title='Alta de Tractor' />
        </div>

        <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain'>
          <AltaTractor />
        </div>
      </section>
    </Escritorio>
  )
}
