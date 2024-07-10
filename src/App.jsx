import { useState } from 'react';
import Navbar from './Compounents/Navbar';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Home } from './Compounents/Pages/Home/Home';
import { Cart } from './Compounents/Pages/Cart/Cart';
import { PlaceOrder } from './Compounents/Pages/PlaceOrder/PlaceOrder';


function App() {
  const [theme, setTheme] = useState('light');
  

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
       
        
      </Routes>
    </div>
  );
}

export default App;
