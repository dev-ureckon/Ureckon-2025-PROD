import { FaDiscord, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white p-6 md:p-8 font-mono">
      {/* Main footer content with blue border */}
      <div className="relative p-4 md:p-6 rounded-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* EVENTS Section */}
          <div>
            <h3 className="bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text  text-transparent font-press mb-4 text-lg tracking-wider">
              EVENTS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/events/coding"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  CODING
                </a>
              </li>
              <li>
                <a
                  href="/events/robotics"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  ROBOTICS
                </a>
              </li>
              <li>
                <a
                  href="/events/bio-tech"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  BIO-TECH
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  SEE MORE
                </a>
              </li>
            </ul>
          </div>

          {/* PARTNERS Section */}
          <div>
            <h3 className="bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text  text-transparent font-press mb-4 text-lg tracking-wider">
              PARTNERS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#00a2ff] transition-colors">
                  COMING SOON
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  SEE MORE
                </a>
              </li>
            </ul>
          </div>

          {/* TEAM Section */}
          <div>
            <h3 className="bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text  text-transparent font-press mb-4 text-lg tracking-wider">
              TEAM
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/teams/core"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  CORE
                </a>
              </li>
              <li>
                <a
                  href="/teams/tech-team"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  TECH
                </a>
              </li>
              <li>
                <a
                  href="/teams/taskforce"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  TASKFORCE
                </a>
              </li>
              <li>
                <a
                  href="/teams"
                  className="hover:text-[#00a2ff] transition-colors"
                >
                  SEE MORE
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT WITH US Section */}
          <div>
            <h3 className="bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text  text-transparent font-press mb-4 text-lg tracking-wider">
              CONNECT WITH US
            </h3>
            <div className="flex gap-4 mb-6">
              {/* Social Media Icons */}
              <a
              target="_blank"
                href="https://www.linkedin.com/company/ureckon/posts/?feedView=all"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
              target="_blank"
                href="https://www.instagram.com/ureckon.uemk/?hl=en"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
              target="_blank"
                href="https://x.com/Ureckon_Uemk"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
             
              <a
              target="_blank"
                href="https://www.youtube.com/@UreckonUEMKolkata"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a 
              target="_blank"
              href="https://discord.gg/Ztyvqyda7n"
              className="text-purple-500 hover:text-purple-400 transition-colors">
              <FaDiscord className="text-2xl"/>
              </a>
              <a 
              target="_blank"
              href="https://whatsapp.com/channel/0029VaBYereHFxP3CiIpRo1H"
              className="text-purple-500 hover:text-purple-400 transition-colors">
              <FaWhatsapp className="text-2xl" />
              </a>
              <a 
              target="_blank"
              href="https://www.facebook.com/ureckon.uemk/"
              className="text-purple-500 hover:text-purple-400 transition-colors">
              <FaFacebook className="text-2xl"/>
              </a>
            </div>
            {/* Contact Us Button */}
            <a
              href="/contact-us"
              className="inline-block px-6 py-2   transition-colors rounded-full bg-[#030418] border-[0.688px] border-solid border-white w-fit font-press bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text text-transparent uppercase text-[0.85938rem] font-normal "
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center mt-6 text-sm opacity-70">
        All rights reserved Ureckon 2025
      </div>
    </footer>
  );
}
