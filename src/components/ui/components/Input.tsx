import clsx from 'clsx'
import type React from 'react'

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  floating?: boolean
  icon?: React.ReactNode
  className?: string
}

const base =
  'peer h-12 w-full rounded-md border border-border bg-background text-foreground outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 focus:border-primary focus:ring-1 focus:ring-primary'

const withIcon = 'pl-12 pr-5'
const withoutIcon = 'px-5'

const floatingLabel =
  'pointer-events-none absolute top-1/2 -translate-y-1/2 bg-background px-1 text-muted transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-semibold'

export function Input({
  floating = false,
  icon,
  className,
  type = 'text',
  placeholder = '',
  required = false,
  ...props
}: InputProps) {
  return (
    <label className="relative flex w-full items-center">
      {icon && (
        <span className="absolute left-5 z-10 text-muted">
          {icon}
        </span>
      )}

      <input
        type={type}
        placeholder={floating ? ' ' : placeholder}
        required={required}
        className={clsx(
          base,
          icon ? withIcon : withoutIcon,
          !floating && 'placeholder:text-muted',
          className,
        )}
        {...props}
      />

      {floating && (
        <span
          className={clsx(
            floatingLabel,
            icon ? 'left-12' : 'left-4',
          )}>
          {placeholder}
          {required && <span className="p-2 text-red-500">*</span>}
        </span>
      )}
    </label>
  )
}


{
  /*
  Ejemplos de uso:
        * Input simple
            <Input />

        * Input normal:

            <Input placeholder="Usuario" />

        * Input con ícono:
            import { User } from 'lucide-react'

            <Input
              icon={<User className="h-4 w-4" />}
              placeholder="Usuario"
            />

        * Input con floating label:

            <Input
              floating
              label="Usuario"
            />

        * Input con floating label e ícono:

            <Input
              floating
              icon={<User className="h-4 w-4" />}
              label="Usuario"
            />
        * Con label flotante e ícono
            import { User } from 'lucide-react'

            <Input
              floating
              icon={<User className="h-4 w-4" />}
              placeholder="Usuario"
            />
        * Password
            import { Lock } from 'lucide-react'

            <Input
              floating
              icon={<Lock className="h-4 w-4" />}
              type="password"
              placeholder="Contraseña"
            />
        * Formulario controlado
            import { Mail } from 'lucide-react'

            <Input
              floating
              icon={<Mail className="h-4 w-4" />}
              type="email"
              placeholder="Correo electrónico"
              autoComplete="email"
            />

        *  Buscar
            import { Search } from 'lucide-react'
            
            <Input
              icon={<Search className="h-4 w-4" />}
              placeholder="Buscar..."
            />

        * Con cualquier propiedad nativa
            <Input
              icon={<User className="h-4 w-4" />}
              label="Usuario"
              autoComplete="username"
              maxLength={30}
              disabled={false}
            />
        * Agregar clases propias
            <Input
              icon={<Search className="h-4 w-4" />}
              label="Buscar"
              className="mt-6"
            />
*/
}