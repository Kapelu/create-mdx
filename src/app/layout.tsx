import Footer from '@/components/layout/Footer'
import { ModalProvider } from '@/components/layout/ModalProvider'
import { ComeBack } from '@/components/ui/ComeBack'
import { AppConfig } from '@/lib/app/AppConfig'
import type { Metadata } from 'next'
import { Providers } from '../components/layout/providers'
import { gentium } from '../lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),

  title: {
    default: AppConfig.title,
    template: '%s | Daniel Calderon',
  },

  description: AppConfig.description,

  manifest: '/manifest.json',

  keywords: AppConfig.keywords,

  authors: [
    {
      name: AppConfig.author,
    },
  ],

  creator: AppConfig.author,
  publisher: AppConfig.author,

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: AppConfig.url,
  },

  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: AppConfig.url,
    siteName: AppConfig.site_name,
    locale: AppConfig.locale,
    type: 'website',

    images: [
      {
        url: AppConfig.image,
        width: 1200,
        height: 630,
        alt: AppConfig.title,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: AppConfig.title,
    description: AppConfig.description,
    creator: '@kapelu',
    images: [AppConfig.image],
  },

  category: 'technology',
  applicationName: AppConfig.site_name,
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='es'
      data-scroll-behavior='smooth'
      className={`scroll-smooth dark ${gentium.variable}`}
      suppressHydrationWarning>
      <body className='font-gentium bg-background text-text'>
        <Providers>
          <ModalProvider>
            <div className='flex min-h-screen flex-col'>
              <ComeBack />

              <main id='main-content' className='flex-1'>
                {children}
              </main>

              <Footer />
            </div>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  )
}
