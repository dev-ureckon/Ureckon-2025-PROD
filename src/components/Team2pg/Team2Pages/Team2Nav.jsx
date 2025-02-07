// import React from "react";
// import "./Team2Nav.css";

// const Team2Navbar = () => {
//     return (
//         <header className="navbar">
//             <div className="logo left-logo">
//                 <img src="/src/assets/svg/Pixel logo.svg" alt="Left Logo" />
//             </div>

//             <nav>
//                 <ul className="nav-links">
//                     <li><a href="#home">HOME</a></li>
//                     <li><a href="#about">ABOUT</a></li>
//                     <li><a href="#partners">PARTNERS</a></li>
//                     <li><a href="#register" className="register-btn">REGISTER NOW</a></li>
//                     <li><a href="#events">EVENTS</a></li>
//                     <li><a href="#team" className="active">TEAM</a></li>
//                     <li><a href="#contact">CONTACT US</a></li>
//                 </ul>
//             </nav>

//             <div className="logo right-logo">
//                 <img src="/src/assets/svg/Pixel logo.svg" alt="Right Logo" />
//             </div>
//         </header>
//     );
// };

// export default Team2Navbar;

import React, { useState } from "react";
import "./Team2Nav.css";

const Team2Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <header className="navbar">
            <div className="logo left-logo">
                <img src="/src/assets/svg/Pixel logo.svg" alt="Left Logo" />
            </div>

            {/* Hamburger button for mobile view */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <nav>
                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#partners">PARTNERS</a></li>
                    <li><a href="#register" className="register-btn">REGISTER NOW</a></li>
                    <li><a href="#events">EVENTS</a></li>
                    <li><a href="#team" className="active">TEAM</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                </ul>
            </nav>

            <div className="logo right-logo">
                <img src="/src/assets/svg/Pixel logo.svg" alt="Right Logo" />
            </div>
        </header>
    );
};

export default Team2Navbar;
