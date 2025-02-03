"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications using Python and Django",
    price: "Starting at ₹80000",
    features: ["Responsive Design", "Database Integration", "API Development"],
  },
  {
    title: "API Development",
    description: "RESTful API design and implementation",
    price: "Starting at ₹70000",
    features: ["Authentication", "Rate Limiting", "Documentation"],
  },
  {
    title: "Database Design",
    description: "Efficient and scalable database solutions",
    price: "Starting at ₹45000",
    features: ["Schema Design", "Optimization", "Data Migration"],
  },
]

export default function Services() {
  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8">My Services</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">{service.price}</p>
                <ul className="list-disc list-inside">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button className="mt-4 w-full">Get Started</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

