import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Navbar } from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Casualty Reporting Portal',
  description: 'Submit and manage marine incident reports for DGS Mumbai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`min-h-screen bg-gradient-to-b from-blue-50 to-white text-black `}
        >
          <Navbar />
          <main className="max-w-6xl mx-auto p-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
