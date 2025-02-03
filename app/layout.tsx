import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { InteractiveBackground } from "@/components/interactive-background"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ashutosh Patidar - Portfolio",
  description: "Python Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden">
            <InteractiveBackground />
            <div className="flex min-h-screen relative z-10">
              <Sidebar />
              <main className="flex-1 overflow-y-auto transition-all duration-300 ease-in-out flex flex-col">
                <div className="container mx-auto px-4 py-8 flex-grow">{children}</div>
                <Footer />
              </main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'