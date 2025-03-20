import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anna Schmidt - Portfolio",
  description: "Dance Producer & Researcher",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <style>{`
          body {
            background-color: black !important;
            color: white !important;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body style={{ backgroundColor: "black", color: "white" }}>{children}</body>
    </html>
  )
}

