import React from 'react'
import "./AppDowmload.css"
import { assets } from '../../Assest/assets'
const AppDownload = () => {
  return (
    <div className='download' id='app-Download'>
        <p>For the better Expreience Download  <br /> Tomato App</p>
<div className="App-Downloadplateform ">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
</div>
    </div>
  )
}

export default AppDownload
