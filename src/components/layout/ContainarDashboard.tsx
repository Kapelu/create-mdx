'use client'

import type { ReactNode } from 'react'

interface ContainerDashboardProps {
  children: ReactNode
}

export default function ContainerDashboard({
  children,
}: ContainerDashboardProps) {
  return (
    <div className='relative z-10 flex h-full min-h-0 w-full p-1'>
      <div className='flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden rounded-xl  '>
        {children}
      </div>
    </div>
  )
}
