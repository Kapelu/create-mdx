import Image from 'next/image'
import clsx from 'clsx'

type HeroProps = {
  imageLight?: `/${string}`
  imageDark?: `/${string}`
  backgroundLight?: string
  backgroundDark?: string
  alt?: string
  opacityLight?: number
  opacityDark?: number
  className?: string
}

export default function Hero({
  imageLight,
  imageDark,
  backgroundLight,
  backgroundDark,
  alt = '',
  opacityLight = 0.95,
  opacityDark = 0.5,
  className,
}: HeroProps) {
  return (
    <div className={clsx('absolute inset-0 -z-10 overflow-hidden', className)}>
      <div
        className='absolute inset-0 dark:hidden'
        style={{
          backgroundColor: backgroundLight,
        }}
      />

      {imageLight && (
        <Image
          src={imageLight}
          alt={alt}
          fill
          priority
          sizes='(max-width: 768px) 100vw, 1280px'
          style={{ opacity: opacityLight }}
          className='object-cover dark:hidden'
        />
      )}

      <div
        className='absolute inset-0 hidden dark:block'
        style={{
          backgroundColor: backgroundDark,
        }}
      />

      {imageDark && (
        <Image
          src={imageDark}
          alt={alt}
          fill
          priority
          sizes='(max-width: 768px) 100vw, 1280px'
          style={{ opacity: opacityDark }}
          className='hidden object-cover dark:block'
        />
      )}

      <div className='absolute inset-0 bg-black/10' />
    </div>
  )
}
