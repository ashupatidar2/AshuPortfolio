"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Zap, User } from "lucide-react"
import Link from "next/link"

const skills = ["Python", "Django", "React", "Next.js", "JavaScript", "HTML", "CSS", "SQL", "Github"]

const projects = [
  { title: "Photo Studio", description: "Advanced Django-based event booking system" },
  { title: "College Website", description: "Result management system with CAPTCHA validation" },
  { title: "Aaradhyadharma", description: "Digital agency website blending ancient wisdom with modern tech" },
]

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  }

  const welcomeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  }

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="space-y-24 pb-24">
      <motion.section
        ref={heroRef}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text mb-2" variants={welcomeVariants}>
          WELCOME TO MY PORTFOLIO
        </motion.h2>
        <motion.h1 className="text-5xl md:text-7xl font-bold text-primary mb-4" variants={itemVariants}>
          Ashutosh Patidar
        </motion.h1>
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={["Python Developer", 2000, "BCA Student", 2000, "Problem Solver", 2000]}
            wrapper="h2"
            cursor={true}
            repeat={Number.POSITIVE_INFINITY}
            className="text-2xl md:text-3xl text-primary mb-8"
          />
        </motion.div>
        <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl" variants={itemVariants}>
          Passionate about creating robust web applications and contributing to innovative tech solutions.
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariants}>
          <Button size="lg" asChild>
            <Link href="/portfolio">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
