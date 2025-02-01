import React from 'react';
import Contactpic from "../../assets/ContactUs/ILLUATRATED MAP.png";
import Dots from "../../assets/ContactUs/TOP DOTS.png";
import pacman from "../../assets/ContactUs/PAC MAN.png"
import { PinContainer } from '../../components/ui/3d-pin';
import ghost from "../../assets/ContactUs/PAC MAN GHOST.png"

const ContactsPage = () => {
  return (
    <div className='bg-[#05071A]  h-auto '>
    <div className="p-4 mx-auto lg:w-[80%] max-w-full  ">
    <h1
        className="text-[#ff0000] text-center text-2xl md:text-4xl font-mono uppercase "
        style={{
          textShadow: `
            0 0 7px #ff0000,
            0 0 10px #ff0000,
            0 0 21px #ff0000,
            0 0 42px #ff0000
          `,
          fontFamily: "'Press Start 2P', monospace",
        }}
      >
        Contact Us
      </h1>

      <div className="   w-[92%] xl:w-[98%] 2xl:w-[76%] mx-auto flex justify-center  ">
        <div className="items-center justify-center flex gap-4 md:gap-8 lg:gap-10 xl:gap-18 2xl:gap-24 mb-6 lg:mb-8">
          <div className='flex flex-col justify-center items-center mt-12'>
          <img src={Dots} className="  " />
         
         <img src={pacman} className='absolute top-12 lg:top-10 md:top-10 mb-10 w-28 h-28 md:h-36 md:w-36 lg:w-40 lg:h-40'/>
          </div>
         
        
          
        </div>
      </div>


      <div className=' opacity-60 max-w-full mx-auto flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-8 mt-10 '>

        <div className=' flex flex-col items-center p-4 max-w-full'>

        <h1 className="text-[#C0C0C0] font-press text-sm lg:text-xl font-normal leading-[44px] lg:text-left underline underline-offset-auto decoration-skip-ink-none  mb-1 lg:mb-2 text-center [text-shadow:0_0_10px_rgb(255_255_255/30%),_0_0_20px_rgb(220_240_255/50%),_0_0_30px_rgb(200_230_255/40%),_0_0_40px_rgb(180_220_255/_20%)]
        drop-shadow-[0_0_40px_rgba(220,240,255,0.9)] ">
            HERE ARE WE!
          </h1>


          <div>
          <PinContainer
              title="https://maps.app.goo.gl/KFRT3UGtFcYqjbyL7"
              href="https://maps.app.goo.gl/KFRT3UGtFcYqjbyL7"
              className="max-w-full"
            >
              
              <div className="basis-full   text-slate-100/50 sm:basis-1/2 w-[15rem] lg:w-[18rem] h-[18rem] flex justify-center items-center ">

              
              <img src={Contactpic} className="h-full w-full" />
            </div>

          
            </PinContainer>
            </div>

        </div>

        <div className=" bg- emerald-400 p-4 w-full lg:w-[60%]">
          <form className="space-y-4 relative z-10">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-press leading-[27px] underline underline-offset-auto decoration-skip-ink-none text-[#FDFDFD]"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-transparent text-[#FDFDFD] border-b border-gray-400 border-dashed  focus:outline-none text-sm tracking-widest placeholder:underline placeholder:decoration-dashed placeholder:decoration-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-press leading-[27px] underline underline-offset-auto decoration-skip-ink-none text-[#FDFDFD]"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none text-sm tracking-widest border-dashed "
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-press leading-[27px] underline underline-offset-auto decoration-skip-ink-none text-[#FDFDFD]"
              >
                PHONE
              </label>
              <input
                type="text"
                id="phone"
                className="w-full bg-transparent border-b border-dashed  border-gray-400 focus:outline-none text-sm tracking-widest"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-press leading-[27px] underline underline-offset-auto decoration-skip-ink-none text-[#FDFDFD] mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full bg-[#300000] text-gray-300 placeholder-gray-500 p-2 h-[10rem] border border-red-700 focus:outline-none text-sm"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="p-2 bg-orange-500 hover:bg-orange-600 text-black text-sm font-bold tracking-widest leading-5 py-2"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      

      </div>

      <div className='flex justify-center items-center '>
      <img src={ghost} className='' />
      </div>
    </div>
    </div>
  );
};

export default ContactsPage;