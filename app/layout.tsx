import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
 import { ThemeProvider       } from "next-themes";
import { Provider as JotaiProvider } from "jotai";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DreamMusic",
  description: "Your favorite music app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <JotaiProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          </ThemeProvider>
          </JotaiProvider>
      </body>
    </html>
  )
}

