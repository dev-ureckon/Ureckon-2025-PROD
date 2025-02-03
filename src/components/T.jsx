// import React from 'react'
// import TopMT from '../assets/TComp/TOP M T.svg';
// import RIGHTT from '../assets/TComp/RIGHT T.svg';
// import LEFTT from '../assets/TComp/LEFT T.svg';
// import DOTS from "../assets/TComp/TOP DOTS.svg"
// import  Cheery from "../assets/TComp/Cheery.svg"

// const T = () => {
//   return (
//     <div className=' p-6 hidden lg:block'>
  
//   <div className=" w-[45%] xl:w-[40%] mx-auto h-[56%] absolute top-[13%] left-[28%] xl:left-[30%]  rounded-full border-opacity-0">
//          <img src={TopMT} alt="TOP M T" className=" mx-auto w-[90%]  " />
//          <p className=' text-[#B01D15] font-press text-[8px] xl:text-xs  font-normal leading-[61px] text-left underline underline-offset-auto decoration-skip-ink-none drop-shadow-[0_4px_4px_#B01D15] absolute -top-[3%] xl:top-[5%] left-[100px] '>THE OFFICIAL EVENTS OF URECKON’25</p>

//          <img src={DOTS} alt='TOP DOTS' className=' absolute top-[40%]' />
//     </div>

//     <div className=' w-[80%] xl:w-[70%] h-[76vh] mx-auto flex justify-between '>

//     <div className="    rounded-full border-opacity-0">
//     <img src={RIGHTT} alt="right M T" className=" h-full  " />
//     </div>


//         <p className=" relative top-[42%] text-[#C0C0C0] font-press  font-normal leading-[44px] text-left underline text-lg  xl:text-xl underline-offset-auto decoration-skip-ink-none">
//             SELECT YOUR CHOICE
//         </p>



//     <div className=" rounded-full  border-opacity-0 ">
//     <img src={LEFTT} alt="left T" className=" h-full" />
//     </div>


//     <div className=" bg-rose-600 p-4 absolute w-[68.21px] h-[63px] top-[668px] left-[1196px] gap-0 opacity-0 text-white ">
//        {/* <img src={Cheery} alt="Cheery"  /> */}
//        cherry
//     </div>

   
 
//     </div>

//     <div className='  flex items-center justify-center w-[64%] mx-auto '>
//       <div className='bg-cyan-400 p-3 h-[30vh] w-[56%] absolute top-[54%]'>
//          {children}
//       </div>
     
//     </div>



    


    
//     <div className=' mx-auto w-[20%] flex items-center justify-center text-2xl    gap-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FBD60E] to-[#DD903D] font-pac text-[29.14px] font-normal leading-[37.59px] text-center underline underline-offset-auto decoration-skip-ink-none

    
//     '>
//       <div>1</div>
//       <div>............</div>
//       <div>9</div>
//     </div>
    





//     </div>
//   )
// }

// export default T


import React from 'react';
import TopMT from '../assets/TComp/TOP M T.svg';
import RIGHTT from '../assets/TComp/RIGHT T.svg';
import LEFTT from '../assets/TComp/LEFT T.svg';
import DOTS from "../assets/TComp/TOP DOTS.svg";
import Cheery from "../assets/TComp/Cheery.svg";

const T = ({ children }) => {
  return (
    <div className="p-6 ">

      
      <div className=" hidden lg:block  w-[45%] xl:w-[40%] mx-auto h-[56%] absolute top-[13%] left-[28%] xl:left-[30%] rounded-full border-opacity-0">
        <img src={TopMT} alt="TOP M T" className="mx-auto w-[90%]" />
        <p className="text-[#B01D15] font-press text-[8px] xl:text-xs font-normal leading-[61px] text-left underline underline-offset-auto decoration-skip-ink-none drop-shadow-[0_4px_4px_#B01D15] absolute -top-[3%] xl:top-[5%] left-[100px]">
          THE OFFICIAL EVENTS OF URECKON’25
        </p>

        <img src={DOTS} alt="TOP DOTS" className="absolute top-[40%]" />
      </div>

      <div className=" hidden  w-[80%] xl:w-[70%] h-[76vh] mx-auto lg:flex justify-between">
        <div className="rounded-full border-opacity-0">
          <img src={RIGHTT} alt="right M T" className="h-full" />
        </div>

        <p className="relative top-[42%] text-[#C0C0C0] font-press font-normal leading-[44px] text-left underline text-lg xl:text-xl underline-offset-auto decoration-skip-ink-none">
          SELECT YOUR CHOICE
        </p>

        <div className="rounded-full border-opacity-0">
          <img src={LEFTT} alt="left T" className="h-full" />
        </div>

        
      </div>

      <div className="flex items-center justify-center w-[68%] mx-auto">
        <div className="  p-2 lg:p-3 h-[30vh] w-[56%] absolute top-[6%] lg:top-[54%]  ">
          {children}
        </div>
      

      <div className=" hidden  mx-auto w-[22%] lg:flex items-center justify-center text-2xl gap-4 text-transparent bg-clip-text bg-gradient-to-b from-[#FBD60E] to-[#DD903D] font-pac text-[29.14px] font-normal leading-[37.59px] text-center underline underline-offset-auto decoration-skip-ink-none">

        <div className='  flex gap-3 w-full text-4xl '>
        <div>1</div>
        <div>............</div>
        <div>9</div>
        </div>

        </div>

      </div>
    </div>
  );
};

export default T;
