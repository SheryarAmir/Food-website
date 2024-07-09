import React from 'react'
import "./Header.css"
function Header() {
  return (

    <>
    <div className='header '   style={{  backgroundImage: "url('./Assest/pic4.jpg')",  }} >

<div className="headercontant absolute flex flex-col items-start gap-3  w-[50%] left-[6vw] bottom-[26%] ">
    <h2 className='font-bold text-7xl text-white  '>Order you favourite food here</h2>
    <p className='font-small text-2xl text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias facere distinctio nostrum harum eos numquam maiores quibusdam ullam reiciendis, perspiciatis, fugiat, perferendis optio corrupti.</p>

    <button className=' text-[#747474] border font-semiblod py-4 px-6 mt-5  text-xl rounded-full bg-white '> View Menu</button>
</div>


      
    </div>
    </>
  )
}

export default Header
