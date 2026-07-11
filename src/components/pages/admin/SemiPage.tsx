'use client'

import { Users } from 'lucide-react'

import AltaSemi from './semi/AltaSemi'
import Header from '@/components/ui/components/Header'
import HeaderAlta from '@/components/ui/dashboard/HeaderAlta'
import Escritorio from '@/components/ui/Escritorio'

const links = [
  {
    label: 'Alta',
    href: '/semi/alta',
  },
  {
    label: 'Consulta',
    href: '/semi/consulta',
  },
  {
    label: 'Modificación',
    href: '/semi/modicicacion',
  },
  {
    label: 'Baja',
    href: '/semi/baja',
  },
]

export default function SemiPage() {
  return (
    <Escritorio className='flex h-full min-h-0 w-full flex-col overflow-hidden'>
      <div className='shrink-0'>
        <Header
          icon={Users}
          title='Administración de Semiremolques'
          subtitle='Gestión de altas y datos de unidades semiremolques'
          links={links}
        />
      </div>

      <section className='mx-16 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface'>
        <div className='shrink-0'>
          <HeaderAlta title='Alta de Tractor' />
        </div>

        <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain'>
          <AltaSemi />
        </div>
      </section>
    </Escritorio>
  )
}
