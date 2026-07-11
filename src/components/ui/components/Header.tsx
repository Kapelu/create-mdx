'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'

interface HeaderLink {
  label: string
  href: string
}

interface HeaderProps {
  title: string
  subtitle: string
  links: HeaderLink[]
  icon: LucideIcon
}

export default function Header({
  title,
  subtitle,
  links,
  icon: Icon,
}: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className='mb-2 overflow-hidden rounded-xl border border-border bg-surface shadow-lg'>
      <div className='relative flex items-center bg-linear-to-r from-surface via-surface to-surface-2 px-8 py-1'>
        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-background shadow-sm'>
          <Icon size={34} className='text-primary' />
        </div>

        <div className='flex flex-1 flex-col items-center text-center'>
          <h2 className='text-2xl font-bold tracking-wide text-heading'>
            {title}
          </h2>

          <p className='mt-2 text-sm tracking-wide text-muted'>{subtitle}</p>
        </div>

        <div className='h-16 w-16' />
      </div>

      <div className='h-px bg-border' />

      <nav className='flex h-10 items-center justify-center gap-10 bg-background'>
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl border px-15 py-1 font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-primary bg-primary text-background shadow-md'
                  : 'border-transparent text-heading hover:border-border hover:bg-surface-2 hover:shadow-sm'
              }`}>
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

{
  /*
  USO:
  import { Users, Truck, ClipboardList } from 'lucide-react'

  <Header
    title='Empleados'
    subtitle='Administración de empleados'
    icon={Users}
    links={links}
  />

  <Header
    title='Camiones'
    subtitle='Administración de camiones'
    icon={Truck}
    links={links}
  />

  <Header
    title='Viajes'
    subtitle='Administración de viajes'
    icon={ClipboardList}
    links={links}
  />
*/
}
