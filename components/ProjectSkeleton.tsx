import { motion } from "framer-motion"

const ProjectSkeleton = () => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4" />
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2" />
      <div className="w-1/2 h-4 bg-gray-300 rounded" />
    </motion.div>
  )
}

export default ProjectSkeleton

