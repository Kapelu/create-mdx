import Link from 'next/link'

import clsx from 'clsx'

import type React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'menu'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  href?: string
  target?: string
  rel?: string
  download?: string
  backgroundColor?: string
  textSize?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-md border border-secondary font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 !no-underline [&>p]:m-0 [&>p]:leading-none'

const variants = {
  primary:
    'rounded-full bg-background px-4 py-1 text-title hover:bg-muted hover:text-link',

  secondary:
    'rounded-lg bg-muted text-link hover:border-secondary hover:brightness-105',

  ghost:
    'rounded-lg bg-background text-foreground hover:border-secondary hover:bg-muted hover:text-link',

  menu: 'block w-full p-4 text-center text-xl font-bold text-title transition hover:bg-muted',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  href,
  children,
  disabled,
  target,
  rel,
  download,
  backgroundColor,
  textSize,
  ...props
}: ButtonProps) {
  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    loading && 'cursor-wait opacity-70',
    className,
  )

  const style = {
    backgroundColor,
    fontSize: textSize,
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
        style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button
      disabled={disabled || loading}
      className={classes}
      style={style}
      {...props}>
      {loading ? 'Cargando...' : children}
    </button>
  )
}
