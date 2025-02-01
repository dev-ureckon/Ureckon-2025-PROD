import React from 'react'
import T from '../../../components/T'
import { motion } from 'framer-motion'
import events from "../../../lib/events.json"
import { Link } from 'react-router-dom'

const EventPage = () => {

    const hoverAnimation = {
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300 }
      }

  return (
    <div className='  '>
        <div className='mt-12 '>
            
            <T>
            <div className='  w-full mx-auto  '>
               


               <div className="    ">
               <div className="text-white font-bold text-xs lg:text-[10px] xl:text-[13px] 2xl:text-[14px] ">
                   <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4 lg:grid-rows-2 font-press">

                   {events.map((event, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-[#FF000033] opacity-80 w-full p-4 justify-center flex items-center text-center"
                                            whileHover={hoverAnimation}
                                        >
                                            <Link to={event.route} className="w-full h-full flex justify-center items-center">
                                                {event.name}
                                            </Link>
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

export default EventPage