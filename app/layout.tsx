import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ines Charef - Portfolio | Étudiante en Génie Logiciel",
  description:
    "Portfolio d'Ines Charef, étudiante en génie logiciel passionnée par le développement full-stack et l'intelligence artificielle.",
  openGraph: {
    url: "https://inescharef-portfolio.netlify.app",
  },
  alternates: {
    canonical: "https://inescharef-portfolio.netlify.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
