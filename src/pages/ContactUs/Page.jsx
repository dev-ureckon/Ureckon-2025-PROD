import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Contactpic from "../../assets/ContactUs/ILLUATRATED MAP.png";
import Dots from "../../assets/ContactUs/TOP DOTS.png";
import pacman from "../../assets/ContactUs/PAC MAN.png";
import { PinContainer } from "../../components/ui/3d-pin";
import ghost from "../../assets/ContactUs/PAC MAN GHOST.png";
import SectionContainer from "../../components/SectionContainer";
import BackgroundParticles from "../../components/BackgroundParticles";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

console.log(SERVICE_ID);
const ContactsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const templateParams = {
      to_name: formData.get("user_name"),
      from_name: formData.get("user_email"),
      message: formData.get("message"),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        toast.success("Message sent successfully! ✅");
        form.current.reset();
      },
      (error) => {
        console.error("Email sending error:", error);
        toast.error("Failed to send message. ❌ Try again!");
      }
    );
  };

  return (
    <BackgroundParticles>
      <SectionContainer>
        <div className="h-auto">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastStyle={{ backgroundColor: "#000", color: "#fff" }} // Custom styles
          />
          <div className="p-1 lg:p-4 mx-auto max-w-full">
            <h1 className="text-lg text-center uppercase md:text-4xl mb-5 lg:mb-12 lg:text-6xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
              Contact Us
            </h1>

            <div className="w-[92%] xl:w-[98%] 2xl:w-[76%] mx-auto flex justify-center">
              <div className="items-center justify-center flex gap-4 md:gap-8 lg:gap-10 xl:gap-18 2xl:gap-24 mb-6 lg:mb-8">
                <div className="flex flex-col justify-center items-center mt-5 md:mt-5 lg:mt-0">
                  <img src={Dots} className="" />
                  <img
                    src={pacman}
                    className="absolute top-9 lg:top-12 md:top-5 mb-10 w-20 h-20 md:h-36 md:w-36 lg:w-40 lg:h-40"
                  />
                </div>
              </div>
            </div>

            <div className="opacity-60 max-w-full mx-auto flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-8 mt-10">
              <div className="flex flex-col items-center p-0 lg:p-3 w-full lg:w-[60%]">
                <h1 className="text-[#C0C0C0] font-press text-sm lg:text-xl font-normal leading-[44px] lg:text-left underline mb-1 text-center drop-shadow-[0_0_40px_rgba(220,240,255,0.9)] lg:mb-6 md:mb-4">
                  HERE ARE WE!
                </h1>
                <div className="w-full flex items-center justify-center">
                  <PinContainer
                    title="uem kolkata"
                    href="https://maps.app.goo.gl/KFRT3UGtFcYqjbyL7"
                  >
                    <div className="text-slate-100/50 w-[11rem] lg:w-[18rem] h-[16rem] md:w-[15rem] md:h-[22rem] flex justify-center items-center">
                      <img src={Contactpic} className="h-full w-full" />
                    </div>
                  </PinContainer>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-4 w-full lg:w-[60%]">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-4 relative z-10"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-press leading-[27px] underline text-[#FDFDFD]"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full bg-transparent text-[#FDFDFD] border-b border-gray-400 border-dashed focus:outline-none text-sm tracking-widest placeholder:underline"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-press leading-[27px] underline text-[#FDFDFD]"
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none text-xs md:text-sm tracking-widest border-dashed"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs md:text-sm font-press leading-[27px] underline text-[#FDFDFD]"
                    >
                      PHONE
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      className="w-full bg-transparent border-b border-dashed border-gray-400 focus:outline-none text-sm tracking-widest"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-press leading-[27px] underline text-[#FDFDFD] mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
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

            <div className="flex justify-center items-center">
              <img src={ghost} className="" />
            </div>
          </div>
        </div>
      </SectionContainer>
    </BackgroundParticles>
  );
};

export default ContactsPage;
