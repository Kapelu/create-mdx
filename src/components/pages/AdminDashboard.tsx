'use client'
import { useMemo, useState } from 'react'
import type { Empleado } from '@/types/database'
import LogoutButton from '@/components/ui/login/LogoutButtons'
import { ThemeToggle } from '../ui/ThemeToggle'
import EmpleadosPage from './admin/EmpleadosPage'
import Hero from '../layout/Hero'
import Fecha from '../ui/Fecha'
import Hora from '../ui/Hora'

interface AdminDashboardProps {
  empleado: Empleado
}

export default function AdminDashboard({ empleado }: AdminDashboardProps) {
  const puesto = empleado.puesto.toLowerCase()

  const menu = useMemo(() => {
    if (puesto === 'rrhh') {
      return ['Empleados', 'Salir']
    }

    if (puesto === 'log') {
      return ['Camión', 'Semi', 'Viajes', 'Salir']
    }

    return ['Empleados', 'Camión', 'Semi', 'Viajes', 'Salir']
  }, [puesto])

  const [activo, setActivo] = useState(menu[0])

  return (
    <div className='min-h-screen bg-background'>
      <div className='hidden h-screen lg:flex flex-col p-2'>
        {/* Header */}
        <header className='flex h-20 items-center justify-between rounded-tl rounded-tr border border-border bg-surface px-6'>
          <div className='flex h-full flex-col items-center justify-center font-semibold'>
            <div>
              {empleado.apellido}, {empleado.nombres}
            </div>

            <div>{empleado.puesto}</div>
          </div>

          <div className='flex h-full flex-col items-center justify-center font-semibold'>
            <div>
              <Fecha />
            </div>

            <div>
              <Hora />
            </div>
          </div>

          <div className='font-semibold'>
            <ThemeToggle />
          </div>
        </header>

        {/* Cuerpo */}
        <div className='flex flex-1'>
          {/* Menú */}
          <aside className='w-64 border-x border-b border-border bg-surface'>
            <nav className='flex flex-col py-4'>
              {menu.map((item) => (
                <button
                  key={item}
                  onClick={() => setActivo(item)}
                  className={`px-6 py-4 text-left transition-colors ${
                    activo === item
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}>
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          {/* Contenido */}
          <main className='relative flex-1 overflow-hidden border-r border-b border-border bg-background'>
            <Hero
              imageLight='/images/login-bg.webp'
              imageDark='/images/login-bg.webp'
              alt='Hero background'
              lightOpacity={0.7}
              variant='default'
              zIndex='z-0'
              sizes='calc(100vw - 16rem)'
            />

            <div className='relative z-10 flex h-full items-center justify-center p-8'>
              {activo === 'Empleados' && <EmpleadosPage />}

              {activo === 'Camión' && (
                <div className='flex flex-col items-center'>
                  <h1 className='text-4xl font-bold'>Camión</h1>
                </div>
              )}

              {activo === 'Semi' && (
                <div className='flex flex-col items-center'>
                  <h1 className='text-4xl font-bold'>Semi</h1>
                </div>
              )}

              {activo === 'Viajes' && (
                <div className='flex flex-col items-center'>
                  <h1 className='text-4xl font-bold'>Viajes</h1>
                </div>
              )}

              {activo === 'Salir' && <LogoutButton />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
