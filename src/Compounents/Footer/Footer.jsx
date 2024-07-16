import React from 'react'

import "./Footer.css"
import { assets } from '../../Assest/assets'
const Footer = () => {
  return (
    <div className='footer ' id='footer'>
      
      <div className="footer-Content md:flex justify-center md:justify-between  ">

        <div className="footer-left md:w-2/5 flex  mx-auto md:mx-0 ">
            <img className='flex justify-center mx-auto md:mx-0 rounded-full w-28' src={assets.yak} alt="" />
            <p className=' md:w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa consectetur minima mollitia molestiae temporibus,sit amet consectetur adipisicing elit. Ipsa consectetur minima  </p>
            <div className="footer-social-icon flex gap-5 mx-auto md:mx-0">
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="mx-auto text-center mt-5 md:mt-0">
            <h2 className='text-2xl font-medium mb-2'>COMPANY</h2>
            <ul className=' flex  md:block gap-3  text-center justify-center'>
                <li className='mt-1'>Home</li>
                <li className='mt-1'>AboutUs</li>
                <li className='mt-1'>Devlivery</li>
                <li className='mt-1'>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-right ">
            <h2 className='text-2xl font-semibold text-center mx-auto md:mx-0 mt-4 md:mt-0'>Get in Touch</h2>

            <ul className='mx-auto md:mx-0'>
                <li>03144546496748</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>



      </div>

<hr />
<p className='footer-copy-write mb-10 text-center'>© CopyRight 2024 Tomato.com - All Rights Reserved</p>

    </div>
  )
}

export default Footer
