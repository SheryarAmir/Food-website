import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { PiHandbagFill } from "react-icons/pi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Navbar({ theme, setTheme }) {
  const [menu, setMenu] = useState("Home");

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={`navbar flex  w-[92%] mx-auto justify-between items-center ${theme}`}>
        <img className="w-28 rounded-t-full" src="./Assest/logo1.jpg" alt="Logo" />

        <ul className={`navbar-menu flex list-none gap-10 text-2xl ${theme}`}>
          <li
            onClick={() => setMenu("Home")}
            className={`cursor-pointer ${menu === "Home" ? "active border-b-2 pb-1" : ""}`}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={`cursor-pointer ${menu === "Menu" ? "active border-b-2 pb-1" : ""}`}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Mobile-App")}
            className={`cursor-pointer ${menu === "Mobile-App" ? "active border-b-2 pb-1" : ""}`}
          >
            Mobile-App
          </li>
          <li
            onClick={() => setMenu("Contact Us")}
            className={`cursor-pointer ${menu === "Contact Us" ? "active border-b-2 pb-1" : ""}`}
          >
            Contact Us
          </li>
        </ul>

        <div className="navbar-right flex items-center gap-12">
          <p className={`text-4xl relative ${theme}`}>
            <RiSearchLine />
          </p>

          <div className="navbarsearchicon">
            <p className={`text-4xl ${theme}`}>
              <PiHandbagFill />
            </p>
          </div>
          <div onClick={toggle_mode} className="text-4xl cursor-pointer">
            {theme === "light" ? <MdDarkMode /> : <CiLight />}
          </div>

          <div className="dot absolute min-w-4 min-h-4 border rounded-xl top-[45px] right-[340px] bg-red-400"></div>

          <div className="signin">
            <button className={`bg-transparent text-xl border px-5 py-2 rounded-3xl hover:bg-gray-200 transition-shadow border-orange-500  `}>
              Sign in
            </button>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Navbar;
