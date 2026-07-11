'use client'

import { UserPlus } from 'lucide-react'

interface HeaderAltaProps {
  title: string
}

export default function HeaderAlta({ title }: HeaderAltaProps) {
  return (
    <header className='flex items-center gap-3 border-b border-border px-8 py-1'>
      <UserPlus className='text-primary' size={28} />

      <h2 className='text-xl font-semibold text-heading'>{title}</h2>
    </header>
  )
}
