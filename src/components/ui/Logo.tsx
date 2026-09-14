import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  href?: string
  className?: string
  imageLight?: `/${string}`
  imageDark?: `/${string}`
}

export default function Logo({
  href = '/',
  className = '',
  imageLight = '/icons/logo.png',
  imageDark = '/icons/logo.png',
}: LogoProps) {
  return (
    <Link href={href} className={`flex items-center gap-2 ${className}`}>
      <Image
        src={imageLight}
        width={36}
        height={36}
        alt='Daniel Calderon'
        priority
        className='rounded-full object-cover dark:hidden'
      />

      <Image
        src={imageDark}
        width={36}
        height={36}
        alt='Daniel Calderon'
        priority
        className='hidden rounded-full object-cover dark:block'
      />

      <span className='hidden text-2xl font-bold lg:block'></span>
    </Link>
  )
}
