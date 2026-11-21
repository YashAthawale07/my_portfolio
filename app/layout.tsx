import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
// import { ThemeProvider } from "@/components/ThemeProvider";
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Athawale — Full-Stack & AI Software Engineer',
  description: 'Computer Engineering graduate building scalable Java and Spring Boot backends, React frontends, and RAG-powered Generative AI applications.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yash Athawale — Full-Stack & AI Software Engineer',
    description: 'Building scalable backends, thoughtful frontends, and RAG-powered AI applications.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" >
       <body className="antialiased">
        {/* Clean wrapper without extra props */}
        
          {children}
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
