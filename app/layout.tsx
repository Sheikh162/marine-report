// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ibmPlexMono, inter } from './font';
import { ThemeProvider } from "@/components/ThemeProvider"; // Import the provider

export const metadata: Metadata = {
  title: 'Sheikh Abdullah - Portfolio',
  description: 'Full-Stack Developer building modern, performant web applications.',
};


/* export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans text-foreground antialiased",
            inter.variable, 
            ibmPlexMono.variable
          )}
        >
          <Navbar />
          <main className="flex flex-col min-h-screen px-4 pt-20 md:px-8">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
} */


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans text-foreground antialiased",
            inter.variable, 
            ibmPlexMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex flex-col min-h-screen px-4 pt-20 md:px-8">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}