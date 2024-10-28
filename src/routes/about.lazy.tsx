import { createLazyFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export const Route = createLazyFileRoute('/about')({
  component: About,
})

export function About() {
  const fullText = "I'm a Passionate Full Stack Developer dedicated to honing my skills through continual growth and improvement With a head full of Profound ideas, I'm on a journey to turn concept and ideas into reality through code."
  

  return (
    <div className='flex item-center justify-center h-screen'>
      <div className='text-left text-2xl w-[800px]'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{fullText}</span>
    </motion.div>
      </div>
    </div>
  )
}