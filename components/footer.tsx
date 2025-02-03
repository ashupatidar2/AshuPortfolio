import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/ashutosh-patidar-295a412aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/ashu___patidar2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashutosh Patidar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

