import React from 'react'
import T from '../../components/T'
import { motion } from 'framer-motion'
import { PinContainer } from '../../components/ui/3d-pin'

const TeamsPage = () => {

    const hoverAnimation = {
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300 }
      }

  return (
    <div className='  '>
    <div className='mt-12 '>
       
        <T>
        <div className='  w-full mx-auto -mt-10  '>
           


           <div className="    ">
           <div className="text-white font-bold text-xs lg:text-[14px] 2xl:text-base ">
               <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 md:grid-rows-2 font-press">

               {['CODING', 'FLAGSHIP', 'ROBOTICS', 'QUIZ', 'GAMING', 'INITIATIVES','BIO-TECH', 'BIZ EVENTS','CODING','QUIZ','QUIZ', 'QUIZ' ].map((item, index) => (
               
          <motion.div
            key={index}
            className="bg-[#FF000033] opacity-80 w-full p-4 justify-center flex items-center text-center"
            whileHover={hoverAnimation}
          >
            {item}
          </motion.div>




        ))}
        


                       
               
                               </div>
                               </div>  
           </div>
               
           </div>

        </T>

        
    </div>

  </div>
  )
}

export default TeamsPage