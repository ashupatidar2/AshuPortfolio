"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, User, Briefcase, Code, Mail, Menu, X, Linkedin, Instagram } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMediaQuery } from "@/hooks/use-media-query"

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: User, href: "/about" },
  { name: "Portfolio", icon: Briefcase, href: "/portfolio" },
  { name: "Services", icon: Code, href: "/services" },
  { name: "Contact", icon: Mail, href: "/contact" },
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ashutosh-patidar-295a412aa" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ashu___patidar2" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [isDesktop])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && !isDesktop) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDesktop])

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleSidebar}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      <AnimatePresence>
        {(isOpen || isDesktop) && (
          <motion.aside
            ref={sidebarRef}
            className={cn(
              "fixed left-0 top-0 z-40 h-full w-64 bg-background/80 backdrop-blur-lg border-r",
              isDesktop ? "translate-x-0" : "",
            )}
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ duration: 0.3 }}
          >
            <ScrollArea className="h-full py-6">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">Ashutosh Patidar</h2>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => !isDesktop && setIsOpen(false)}>
                      <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="absolute bottom-20 left-4 flex space-x-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <div className="absolute bottom-4 left-4">
                <ThemeToggle />
              </div>
            </ScrollArea>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

