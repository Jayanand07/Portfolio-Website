import type React from "react"
import "@/app/globals.css"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/components/layout/SmoothScroll"
import Preloader from "@/components/layout/Preloader"
import GrainOverlay from "@/components/layout/GrainOverlay"
import Nav from "@/components/layout/Nav"
import ScrollToTop from "@/components/layout/ScrollToTop"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata = {
  title: "Jay Anand | Software Engineer — Cybersecurity & Cloud",
  description: "Portfolio of Jay Anand, a Computer Science Engineer specializing in cybersecurity, cloud computing, and full-stack development. Building secure, scalable, and cloud-native systems.",
  keywords: ["Jay Anand", "Software Engineer", "Cybersecurity", "Cloud Engineer", "Full Stack Developer", "Java Developer", "Portfolio", "Spring Boot", "React"],
  authors: [{ name: "Jay Anand" }],
  openGraph: {
    title: "Jay Anand | Software Engineer — Cybersecurity & Cloud",
    description: "Building secure, scalable, and cloud-native systems with a security-first mindset.",
    url: "https://portfolio-website-six-jade-46.vercel.app",
    siteName: "Jay Anand Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Anand | Software Engineer",
    description: "Cybersecurity & Cloud Engineer building secure, scalable systems.",
    creator: "@jayanand42634",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-accent-cyan/30 selection:text-white overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          <Preloader />
          <GrainOverlay />
          <Nav />
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
