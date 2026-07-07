'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'

type Props = {
  isOpen: boolean
  onClose: () => void

  icon: LucideIcon
  messages?: string[]

  redirectTo?: string
  redirectSeconds?: number
  buttonText?: string
}

export default function Modal({
  isOpen,
  onClose,
  icon: Icon,
  messages = [],
  redirectTo = '/',
  redirectSeconds = 5,
  buttonText = 'Aceptar',
}: Props) {
  const router = useRouter()

  const [countdown, setCountdown] = useState(redirectSeconds)

  useEffect(() => {
    if (!isOpen) return

    setCountdown(redirectSeconds)

    const timeout = setTimeout(() => {
      router.push(redirectTo)
      onClose()
    }, redirectSeconds * 1000)

    const interval = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0))
    }, 1000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [isOpen, redirectSeconds, redirectTo, router, onClose])

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-md'
      onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative w-[90%] max-w-lg rounded-2xl border border-border bg-surface shadow-2xl'>
        <button
          onClick={onClose}
          className='absolute right-5 top-5 text-muted transition hover:text-heading'>
          ✕
        </button>

        <div className='flex flex-col items-center gap-6 p-10 text-center'>
          <div className='flex h-20 w-20 items-center justify-center rounded-full bg-surface-2'>
            <Icon className='h-10 w-10 text-primary' />
          </div>

          <div className='space-y-3'>
            {messages.map((message, index) => (
              <p
                key={index}
                className='text-lg leading-relaxed text-foreground'>
                {message}
              </p>
            ))}
          </div>

          <p className='text-sm text-muted'>
            Serás redirigido en{' '}
            <span className='font-bold text-primary'>{countdown}</span> segundo
            {countdown !== 1 && 's'}.
          </p>

          <button
            onClick={() => {
              router.push(redirectTo)
              onClose()
            }}
            className='rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-opacity hover:opacity-80'>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
