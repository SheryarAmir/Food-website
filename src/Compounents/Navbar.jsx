import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { PiHandbagFill } from "react-icons/pi";
function Navbar() {

const[ menu , setMenu] = useState("Home")

  return (
    <>
      <div className="navbar flex   justify-between items-center  ">
        <img className="w-40" src="./Assest/logo1.jpg" alt="" />

        <ul className="navba-menu flex list-none gap-10 text-[#49557e] text-2xl">
          <li onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active border-b-2 pb-1 border-[#49557e] cursor-pointer ": ""}>Home</li>
          <li onClick={()=>{setMenu("Menu")}}  className={menu=== "Menu"?"active border-b-2 pb-1 border-[#49557e] cursor-pointer": ""}>Menu</li>
          <li onClick={()=>{setMenu("Mobile-App")}} className={menu=== "Mobile-App"?"active border-b-2 pb-1 border-[#49557e] cursor-pointer": ""}>Moble-App</li>
          <li onClick={()=>{setMenu("Contact Us")}}  className={menu=== "Contact Us"?"active border-b-2 pb-1 border-[#49557e] cursor-pointer": ""}>Contact Us</li>
        </ul>

        <div className="navbar-right flex items-center gap-12 ">
        <p className="text-4xl text-[#49557e] relative "> <RiSearchLine /></p>
       
          <div className="navbarserchicon">
          <p className="text-4xl text-[#49557e] ">  < PiHandbagFill /> </p>

            <div className="dot absolute min-w-4 min-h-4 border rounded-xl  top-[50px] right-[310px] bg-red-400"></div>
            </div>
            <button className=" bg-transparent text-xl  text-[#49557e] border px-5 py-2 border-[tomato]   rounded-3xl hover:bg-gray-200 transition-shadow ">Sign in</button>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;
