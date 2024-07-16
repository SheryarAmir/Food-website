import React, { useContext, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { PiHandbagFill } from "react-icons/pi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { assets } from "../Assest/assets"
import { Link} from "react-router-dom";
import './Navbar.css'
import { StoreContext } from "../Context/StoreContext";

function Navbar({ theme, setTheme, setShowLogin }) {
  const [menu, setMenu] = useState("Home");

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const{getTotalCartAmount}=useContext(StoreContext)



  return (
    <>
      <div className={`navbar  flex  w-[92%] mx-auto justify-between items-center ${theme}`}>
       <Link to='/'><img className="logo  w-28  rounded-full " src={assets.yak} alt="Logo" /></Link> 

        <ul className={`navbar-menu  list-none gap-10 xl:text-xl sm:hidden lg:flex lg:text-lg ${theme}`}>
          <Link to='/'
            onClick={() => setMenu("Home")}
            className={`cursor-pointer ${menu === "Home" ? "active border-b-2 pb-1" : ""}`}
          >
            Home
          </Link >
          <a href="#explore-menu"
            onClick={() => setMenu("Menu")}
            className={`cursor-pointer ${menu === "Menu" ? "active border-b-2 pb-1" : ""}`}
          >
            Menu
          </a>
          <a href="#app-Download"
            onClick={() => setMenu("Mobile-App")}
            className={`cursor-pointer ${menu === "Mobile-App" ? "active border-b-2 pb-1" : ""}`}
          >
            Mobile-App
          </a>
          <a href="#footer"
            onClick={() => setMenu("Contact Us")}
            className={`cursor-pointer ${menu === "Contact Us" ? "active border-b-2 pb-1" : ""}`}
          >
            Contact Us
          </a>
        </ul>

        <div className="navbar-right flex items-center md:gap-12 gap-4 ">
          <p className={`md:text-4xl  text-2xl   relative ${theme}`}>
            <RiSearchLine />
          </p>

          <div className="navbarsearchicon">
            <p className={`icons md:text-4xl  text-2xl  ${theme}`}>
              <Link to='/Cart'> <PiHandbagFill/></Link>
            </p>
          </div>
          <div onClick={toggle_mode} className=" md:text-4xl  text-2xl  cursor-pointer">
            {theme === "light" ? <MdDarkMode /> : <CiLight />}
          </div>




          <div className="signin">
            <button onClick={()=>{setShowLogin(true)}} className={`bg-transparent md:text-xl text-lg border px-5 py-2  rounded-3xl hover:bg-gray-200 transition-shadow border-orange-500  `}>
              Sign in
            </button>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Navbar;
