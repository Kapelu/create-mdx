import AppConfig from './AppConfig'
import contact from './contact'

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Transporte Libertador',
    url: AppConfig.url,
    logo: `${AppConfig.url}/logo.png`,
    email: contact.email,
    telephone: contact.phone,
    sameAs: [contact.portfolio, contact.blog, contact.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mendoza',
      addressCountry: 'AR',
    },
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
