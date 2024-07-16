import { useState } from 'react';
import Navbar from './Compounents/Navbar';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Home } from './Compounents/Pages/Home/Home';
import Cart  from "./Compounents/Pages/Cart/Cart"
import PlaceOrder from "./Compounents/Pages/PlaceOrder/PlaceOrder"
import Footer from './Compounents/Footer/Footer'
import LoginPop from './Compounents/LoginPopUp/LoginPop';

function App() {
  const [theme, setTheme] = useState('light');
  
  const [showLogin, setShowLogin] = useState(false);
  return (

    <>
    {showLogin ? <LoginPop setShowLogin={setShowLogin} showLogin={showLogin} /> : <> </>  }
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}  setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home setShowLogin={setShowLogin}showLogin={showLogin}  />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder/>} />
       
        
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
