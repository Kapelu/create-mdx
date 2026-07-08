'use client'

import Image from 'next/image'

interface HeroProps {
  imageLight: string
  imageDark?: string
  alt?: string
  lightOpacity?: number
  darkOpacity?: number
  variant?: 'default' | 'fixed'
  zIndex?: string
  sizes?: string
}

export default function Hero({
  imageLight,
  imageDark,
  alt = '',
  lightOpacity = 0.3,
  darkOpacity = 0.3,
  variant = 'default',
  zIndex = 'z-0',
  sizes = '100vw',
}: HeroProps) {
  return (
    <div
      className={[
        variant === 'fixed' ? 'fixed inset-0' : 'absolute inset-0',
        zIndex,
        'overflow-hidden pointer-events-none',
      ].join(' ')}
      aria-hidden='true'>
      <Image
        src={imageLight}
        alt={alt}
        fill
        priority
        sizes={sizes}
        style={{ opacity: lightOpacity }}
        className='object-cover dark:hidden'
      />

      <Image
        src={imageDark ?? imageLight}
        alt={alt}
        fill
        priority
        sizes={sizes}
        style={{ opacity: darkOpacity }}
        className='hidden object-cover dark:block'
      />
    </div>
  )
}
