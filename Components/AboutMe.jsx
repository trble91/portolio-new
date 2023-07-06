import React from 'react'
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <>
   <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl sm:text-gray-500'>
        Bio
    </h3>    
    </motion.div>
    </>
  )
}
