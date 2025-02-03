import { motion } from "framer-motion"

interface TimelineItemProps {
  title: string
  company: string
  date: string
  description: string
}

export function TimelineItem({ title, company, date, description }: TimelineItemProps) {
  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-primary-foreground"></h1>
      </div>
      <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
        <h4 className="mb-3 font-semibold text-primary text-md">{company}</h4>
        <p className="text-sm leading-snug tracking-wide text-muted-foreground text-opacity-100">{description}</p>
        <p className="mt-2 text-xs text-muted-foreground">{date}</p>
      </div>
    </motion.div>
  )
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-primary h-full border"
          style={{ left: "50%" }}
        ></div>
        {children}
      </div>
    </div>
  )
}

