'use client'

import { SelectHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  className?: string
  selectClassName?: string
  labelClassName?: string
  icon?: ReactNode
  children: ReactNode
}

export default function FormSelect({
  label,
  className,
  selectClassName,
  labelClassName,
  icon,
  children,
  required,
  ...props
}: FormSelectProps) {
  return (
    <div className={className}>
      <label
        className={clsx(
          'mb-2 flex items-center text-sm font-medium text-heading',
          labelClassName,
        )}>
        <span>{label}</span>

        {required && (
          <span
            className='ml-2 text-base font-bold text-red-500'
            title='Campo obligatorio'>
            *
          </span>
        )}
      </label>

      <div className='relative'>
        <select
          required={required}
          className={clsx(
            'h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary appearance-none',
            icon && 'pr-12',
            selectClassName,
          )}
          {...props}>
          {children}
        </select>

        {icon && (
          <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted'>
            {icon}
          </span>
        )}
      </div>
    </div>
  )
}

{
  /*
  Uso básico
<FormSelect
  label="Puesto"
  className="col-span-6"
  required
>
  <option value="">Seleccionar...</option>
  <option>RRHH</option>
  <option>Logística</option>
  <option>Gerencia</option>
  <option>Chofer</option>
  <option>Mecánico</option>
</FormSelect>
Con valor por defecto
<FormSelect
  label="Estado Civil"
  defaultValue="soltero"
>
  <option value="soltero">Soltero</option>
  <option value="casado">Casado</option>
  <option value="separado">Separado</option>
  <option value="divorciado">Divorciado</option>
</FormSelect>
Con icono
import { BriefcaseBusiness } from 'lucide-react'

<FormSelect
  label="Puesto"
  icon={<BriefcaseBusiness size={18} />}
  required
>
  <option value="">Seleccionar...</option>
  <option>RRHH</option>
  <option>Logística</option>
  <option>Gerencia</option>
  <option>Chofer</option>
  <option>Mecánico</option>
</FormSelect>
Con clases personalizadas
<FormSelect
  label="Puesto"
  className="col-span-6"
  labelClassName="text-primary"
  selectClassName="bg-surface"
  required
>
  ...
</FormSelect>

La ventaja es que FormSelect hereda todas las propiedades nativas de un <select>, por ejemplo:

required
disabled
defaultValue
value
name
id
multiple
size
autoFocus
onChange
onBlur
onFocus
aria-*
data-*

exactamente igual que FormInput, por lo que ambos componentes tienen una API consistente.
*/
}