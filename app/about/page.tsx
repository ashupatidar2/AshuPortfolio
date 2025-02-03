"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/timeline"
import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function About() {
  const [imageError, setImageError] = useState(false)
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 80 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Python", percentage: 90 },
    { name: "Django", percentage: 85 },
    { name: "Next.js", percentage: 75 },
    { name: "SQL", percentage: 80 },
    { name: "React", percentage: 70 },
    { name: "GitHub", percentage: 80 },
  ]

  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      date: "2023 - Present",
      description: "Developing custom web applications for clients using Python and Django.",
    },
    {
      title: "Web Development Intern",
      company: "Tech Innovators",
      date: "2022 - 2023",
      description: "Assisted in the development of responsive websites and learned industry best practices.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Application (3rd Year)",
      institution: "Government Madhav Science College, Ujjain",
      year: "2025 - Present",
    },
    {
      degree: "Python Full Stack Certification",
      institution: "Cybergrow Programming and Computer Training Institute, Indore",
      year: "2024",
      certificateLink: "c:\\Users\\ashup\\Downloads\\ASHUTOSH PATIDAR_certificate.pdf", 
    },
    {
      degree: "12th Grade",
      institution: "Sanskar Valley School, Garoth",
      year: "2021",
    },
    {
      degree: "10th Grade",
      institution: "Sanskar Valley School, Garoth",
      year: "2019",
    },
  ]

  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Profile and Summary Section */}
        <Card>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-200 flex items-center justify-center">
              {!imageError ? (
                <Image
                  src="/ASHUTOSH.webp"
                  alt="Ashutosh Patidar"
                  width={192}
                  height={192}
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-gray-400 dark:text-gray-600">Image not available</span>
              )}
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">Ashutosh Patidar</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Python Developer / BCA Student</p>
            <div className="flex gap-4 mt-3 text-gray-700 dark:text-gray-300 text-lg">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="mailto:ashupatidar23220@gmail.com"><FaEnvelope /></a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Location: Indore</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Languages: Hindi, English</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              I am a passionate and highly motivated Python developer with a strong background in full-stack development. My primary expertise lies in building scalable and efficient web applications using technologies like Python, Django, and SQL. I have a deep understanding of software development principles, and I continually strive to improve my skills by learning new technologies and frameworks. I believe in writing clean, maintainable, and efficient code to deliver the best possible results for my clients and users.
            </p>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              Over the years, I have worked on multiple personal and freelance projects, ranging from simple websites to complex web applications. My work focuses on providing solutions that not only meet the functional requirements but also enhance the overall user experience. My passion for coding extends to experimenting with new tools and techniques, which has led me to explore modern frameworks like React and Next.js. I am committed to delivering high-quality, user-friendly applications that contribute to solving real-world problems.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Experience Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                title={<span className="font-bold text-lg text-gray-900 dark:text-white">{experience.title}</span>}
                company={<span className="text-sm italic text-gray-600 dark:text-gray-300">{experience.company}</span>}
                date={<span className="text-xs text-gray-500 dark:text-gray-400">{experience.date}</span>}
                description={
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {experience.description}
                  </p>
                }
              />
            ))}
          </Timeline>
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={<span className="font-bold text-lg text-gray-900 dark:text-white">{edu.degree}</span>}
                company={<span className="text-sm italic text-gray-600 dark:text-gray-300">{edu.institution}</span>}
                date={<span className="text-xs text-gray-500 dark:text-gray-400">{edu.year}</span>}
              />
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </motion.div>
  )
}
