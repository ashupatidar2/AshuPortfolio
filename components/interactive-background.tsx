"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const moonRef = useRef({ x: 0, y: 0, radius: 50 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      moonRef.current = { x: canvas.width * 0.8, y: canvas.height * 0.2, radius: 50 }
      initParticles()
    }

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 2000)
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random(),
      }))
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + Math.pow(particle.y - mousePosition.y, 2),
        )
        const maxDistance = 100

        if (distanceToMouse < maxDistance) {
          const force = (maxDistance - distanceToMouse) / maxDistance
          particle.x += (mousePosition.x - particle.x) * force * 0.03
          particle.y += (mousePosition.y - particle.y) * force * 0.03
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle =
          theme === "dark"
            ? `rgba(255, 255, 255, ${particle.opacity * 0.5})`
            : `rgba(0, 0, 0, ${particle.opacity * 0.3})`
        ctx.fill()
      })

      // Draw connections
      ctx.beginPath()
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 60) {
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
          }
        }
      }
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
      ctx.stroke()

      // Draw moon
      const moonGradient = ctx.createRadialGradient(
        moonRef.current.x,
        moonRef.current.y,
        0,
        moonRef.current.x,
        moonRef.current.y,
        moonRef.current.radius,
      )
      moonGradient.addColorStop(0, theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)")
      moonGradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.fillStyle = moonGradient
      ctx.beginPath()
      ctx.arc(moonRef.current.x, moonRef.current.y, moonRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme, mousePosition])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
    />
  )
}

