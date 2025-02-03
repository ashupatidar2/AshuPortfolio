"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const projects = [
  {
    title: "Photo Studio",
    description: "Advanced website using Django framework for booking events like pre-wedding and birthday shoots.",
    link: "https://example.com/photo-studio",
    image: "/homepage.jpg",
  },
  {
    title: "College Website",
    description: "Django project allowing users to enter roll numbers to view results, including CAPTCHA validation.",
    link: "https://example.com/college-website",
    image: "/collegephoto.jpg",
  },
  {
    title: "Aaradhyadhrma Website",
    description:
      "Digital agency website blending ancient wisdom with modern technology for web, mobile, and software development services.",
    link: "https://aaradhyadhrma.life",
    image: "/slide1.jpg",
  },
]

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Skeleton className="h-[200px] w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px] mt-2" />
                  </CardContent>
                </Card>
              ))
          : projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[200px] object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 mt-2 hover:underline"
                    >
                      View Project
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
      </div>
    </motion.div>
  )
}
