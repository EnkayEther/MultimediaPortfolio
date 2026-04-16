import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Neon Curator | Kenjih Creative Collective',
  description: 'A multi-disciplinary creative hub where music, design, and cinema converge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}