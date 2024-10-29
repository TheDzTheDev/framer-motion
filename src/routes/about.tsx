import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion';


export const Route = createFileRoute('/about')({
  component: About,
})

export function About() {
  const fullText = "I'm a Passionate Full Stack Developer dedicated to honing my skills through continual growth and improvement With a head full of Profound ideas, I'm on a journey to turn concept and ideas into reality through code."
  

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
    <div className='text-center text-2xl font-bold font-chivo'>
      <span>About Me</span>
    </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
    <div className='text-center text-4xl font-bold font-chivo mt-4 text-[#57AD5B]'>
      <span>A Path Through My Domain</span>
    </div>
    </motion.div>
    <div className='flex flex-row item-center justify-center h-screen font-chivo'>
      <div className='text-center text-2xl w-[800px] mt-8'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <span>{fullText}</span>
    </motion.div>
      </div>
    </div>
    </>
  )
}