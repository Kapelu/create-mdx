import { Gentium_Book_Plus } from 'next/font/google'

const gentium = Gentium_Book_Plus({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-gentium',
})

export default gentium