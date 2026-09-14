import type { Metadata } from 'next'
import Providers from '@/components/layout/providers'
import StructuredData from '@/data/StructuredData'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AppConfig from '@/data/AppConfig'
import gentium from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.site_name}`,
  },
  description: AppConfig.description,
  manifest: '/manifest.json',
  keywords: [...AppConfig.keywords],
  authors: [{ name: AppConfig.author }],
  creator: AppConfig.author,
  publisher: AppConfig.site_name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: AppConfig.url },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: AppConfig.url,
    siteName: AppConfig.site_name,
    locale: AppConfig.locale,
    type: 'website',
    images: [
      { url: AppConfig.image, width: 1200, height: 630, alt: AppConfig.title },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: AppConfig.title,
    description: AppConfig.description,
    images: [AppConfig.image],
  },
  category: 'transportation',
  applicationName: AppConfig.site_name,
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='es'
      data-scroll-behavior='smooth'
      className={`scroll-smooth dark ${gentium.variable}`}
      suppressHydrationWarning>
      <body className='font-gentium bg-background text-text'>
        <Providers>
          <StructuredData />
          <div className='flex min-h-screen flex-col pb-16 lg:pb-0'>
            <Header />
            <main id='main-content' className='flex-1'>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
