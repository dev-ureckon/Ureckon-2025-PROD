import React from 'react';
import { motion } from 'framer-motion';

function Counter({start,end}) {
  return (
    <motion.p 
    className='text-center font-press text-2xl md:text-3xl font-semibold text-red-700 statistics-text-shadow'
    initial={{number:start}}
    animate={{number:end}}
    transition={{duration: 2, ease : "easeOut"}}>
    {({number}) => Math.floor(number)}
    </motion.p>
  )
}

export default Counter