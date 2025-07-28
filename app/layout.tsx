import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShowroomBot - Website',
  description:
    'ShowroomBot es un bot de Discord para publicar y compartir proyectos dentro de un canal showroom. Ideal para comunidades de programadores o estudiantes que quieren mostrar lo que están construyendo.',
  keywords: ['ShowroomBot', 'Discord bot', 'proyectos', 'programadores', 'comunidad', 'estudiantes', 'dev'],
  authors: [{ name: 'Serxa92' }],
  creator: 'Serxa92',
  metadataBase: new URL('https://showroom-bot-website.vercel.app/'),
  openGraph: {
    title: 'ShowroomBot - Website',
    description:
      'ShowroomBot es un bot de Discord para publicar y compartir proyectos dentro de un canal showroom. Ideal para comunidades de programadores o estudiantes que quieren mostrar lo que están construyendo.',
    url: 'https://showroom-bot-website.vercel.app/',
    siteName: 'ShowroomBot - Website',
    images: [
      {
        url: '/captura.png', 
        width: 1200,
        height: 630,
        alt: 'Vista previa de la Web',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShowroomBot',
    description:
      'ShowroomBot es un bot de Discord para publicar y compartir proyectos dentro de un canal showroom. Ideal para comunidades de programadores o estudiantes que quieren mostrar lo que están construyendo.',
    creator: '@Serxa92',
    images: ['/captura.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  themeColor: '#0a0a0a',
  verification: {
    google: 'PCZFkAFxrHWqttkP04UDdvjBeygrldvPdPYxH-QSH58',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
