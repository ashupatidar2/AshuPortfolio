import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import InteractiveBackground from "./InteractiveBackground"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <InteractiveBackground />
      <main className="ml-16 md:ml-64 p-8">{children}</main>
    </div>
  )
}

export default Layout

