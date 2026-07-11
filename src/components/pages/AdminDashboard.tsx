'use client'

import { useMemo, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Container, LogOut, Route, Truck, Users } from 'lucide-react'

import ContainerDashboard from '@/components/layout/ContainerDashboard'
import Hero from '@/components/layout/Hero'
import EmpleadosPage from '@/components/pages/admin/EmpleadosPage'
import TractorPage from '@/components/pages/admin/TractorPages'
import SemiPage from './admin/SemiPage'
import Fecha from '@/components/ui/Fecha'
import Hora from '@/components/ui/Hora'
import LogoutButton from '@/components/ui/login/LogoutButtons'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

import type { Empleado } from '@/types/database'

interface AdminDashboardProps {
  empleado: Empleado
}

interface MenuItem {
  label: string
  icon: LucideIcon
}

export default function AdminDashboard({ empleado }: AdminDashboardProps) {
  const puesto = empleado.puesto.toLowerCase()

  const menu = useMemo<MenuItem[]>(() => {
    if (puesto === 'rrhh') {
      return [
        {
          label: 'Empleados',
          icon: Users,
        },
        {
          label: 'Salir',
          icon: LogOut,
        },
      ]
    }

    if (puesto === 'log' || puesto === 'logística') {
      return [
        {
          label: 'tractor',
          icon: Truck,
        },
        {
          label: 'Semi',
          icon: Container,
        },
        {
          label: 'Viajes',
          icon: Route,
        },
        {
          label: 'Salir',
          icon: LogOut,
        },
      ]
    }

    return [
      {
        label: 'Empleados',
        icon: Users,
      },
      {
        label: 'tractor',
        icon: Truck,
      },
      {
        label: 'Semi',
        icon: Container,
      },
      {
        label: 'Viajes',
        icon: Route,
      },
      {
        label: 'Salir',
        icon: LogOut,
      },
    ]
  }, [puesto])

  const [activo, setActivo] = useState(menu[0].label)

  return (
    <div className='h-full min-h-0 bg-background'>
      <div className='hidden h-full min-h-0 flex-col p-2 lg:flex'>
        <header className='flex h-20 shrink-0 items-center justify-between rounded-tl rounded-tr border border-border bg-surface px-6'>
          <div className='flex h-full flex-col items-center justify-center font-semibold'>
            <div>
              {empleado.apellido}, {empleado.nombres}
            </div>

            <div>{empleado.puesto}</div>
          </div>

          <div className='flex h-full flex-col items-center justify-center font-semibold'>
            <Fecha />
            <Hora />
          </div>

          <ThemeToggle />
        </header>

        <div className='flex min-h-0 flex-1'>
          <aside className='w-50 shrink-0 border-x border-b border-border bg-surface'>
            <nav className='flex flex-col py-4'>
              {menu.map((item) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.label}
                    type='button'
                    onClick={() => setActivo(item.label)}
                    className={`flex items-center gap-5 px-6 py-4 text-left transition-colors ${
                      activo === item.label
                        ? 'bg-primary text-text'
                        : 'hover:bg-muted'
                    }`}>
                    <Icon className='h-5 w-5 shrink-0' />

                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </aside>

          <main className='relative min-h-0 min-w-0 flex-1 overflow-hidden border-r border-b border-border bg-background'>
            <Hero
              imageLight='/images/login-bg.webp'
              imageDark='/images/login-bg.webp'
              alt='Hero background'
              lightOpacity={0.7}
              variant='default'
              zIndex='z-0'
              sizes='calc(100vw - 16rem)'
            />

            <ContainerDashboard>
              {activo === 'Empleados' && <EmpleadosPage />}

              {activo === 'tractor' && <TractorPage />}

              {activo === 'Semi' && <SemiPage />}

              {activo === 'Viajes' && (
                <div className='flex h-full items-center justify-center'>
                  <h1 className='text-4xl font-bold'>Viajes</h1>
                </div>
              )}

              {activo === 'Salir' && (
                <div className='flex h-full items-center justify-center'>
                  <LogoutButton />
                </div>
              )}
            </ContainerDashboard>
          </main>
        </div>
      </div>
    </div>
  )
}