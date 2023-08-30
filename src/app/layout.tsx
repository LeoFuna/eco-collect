import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Ubuntu } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
});
const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu'
});

export const metadata: Metadata = {
  title: 'EcoCollect',
  description: 'Easy way to request your collect for recycible materials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
