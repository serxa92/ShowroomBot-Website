import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShowroomBot',
  description: 'ShowroomBot es un bot de Discord para publicar y compartir proyectos dentro de un canal showroom. Ideal para comunidades de programadores o estudiantes que quieren mostrar lo que están construyendo . ',
  
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
