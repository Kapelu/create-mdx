'use client'

import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface FormSectionProps {
  title: string
  children: ReactNode
  icon?: LucideIcon
  iconClassName?: string
  titleClassName?: string
}

export default function FormSection({
  title,
  children,
  icon: Icon,
  iconClassName,
  titleClassName,
}: FormSectionProps) {
  return (
    <fieldset className='rounded-xl border border-border p-6'>
      <legend className='inline-flex items-center gap-2 px-3'>
        {Icon && <Icon size={20} className={iconClassName ?? 'text-primary'} />}

        <span className={titleClassName ?? 'font-semibold text-heading'}>
          {title}
        </span>
      </legend>

      {children}
    </fieldset>
  )
}

{
  /*
  * Uso básico
    <FormComponent title='Datos Personales'>
      ...
    </FormComponent>

  * Con icono
    import { User } from 'lucide-react'

    <FormComponent
      title='Datos Personales'
      icon={User}>
      ...
    </FormComponent>

  * Con icono y color
    import { User } from 'lucide-react'

    <FormComponent
      title='Datos Personales'
      icon={User}
      iconClassName='text-blue-500'>
      ...
    </FormComponent>

  * Cambiando sólo el título
    <FormComponent
      title='Datos Personales'
      titleClassName='text-xl font-bold text-primary'>
      ...
    </FormComponent>

  * Cambiando icono y título
    import { Shield } from 'lucide-react'

    <FormComponent
      title='Datos de Acceso'
      icon={Shield}
      iconClassName='text-emerald-500'
      titleClassName='text-lg font-bold text-emerald-500'>
      ...
    </FormComponent>

  * Otro ejemplo
    import { Truck } from 'lucide-react'

    <FormComponent
      title='Datos del Camión'
      icon={Truck}
      iconClassName='text-orange-500'
      titleClassName='text-orange-500 font-semibold uppercase tracking-wider'>
      ...
    </FormComponent>

  * Con esta implementación, todas las props son opcionales excepto title y children:

    icon → icono de lucide-react (opcional).
    iconClassName → clases del icono (opcional).
    titleClassName → clases del texto del título (opcional).

  * gap

  * gap agrega espacio entre los hijos de un contenedor flex o grid.

    <div className="flex items-center gap-8">
      <Icon />
      <span>Título</span>
    </div>
    gap-2 → 0.5rem (8px)
    gap-4 → 1rem (16px)
    gap-8 → 2rem (32px)

  * En este caso:

    className="inline-flex items-center gap-8"

  * el icono y el texto quedan separados 2rem.
*/
}
