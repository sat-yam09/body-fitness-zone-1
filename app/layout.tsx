import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { App } from "@/components/chatbot"

export const metadata: Metadata = {
  title: "Body Fitness Zone - Professional Gym & Fitness Center",
  description:
    "Transform your fitness journey at Body Fitness Zone. Professional trainers, state-of-the-art equipment, and a supportive community await you.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <App />
      </body>
    </html>
  )
}
