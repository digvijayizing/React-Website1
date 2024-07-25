import React from 'react';
import Header from './components/Header';
import Patte from './components/Patte';
import "./App.css";
import Center from './components/Center';
import CPage from './components/CPage';
import Footer from './components/Footer';
import Bas from "./components/Bas";
import Sticker from './components/Sticker';
import Cara from './components/Cara'
export default function App() {
  return (
    <div >
      <Header/>
      <Center/>
      
      <div className='cardkicss'>
           <Patte/>
      </div>
      <h1 className='How'>Security Services</h1>
      <Sticker/>
      <h1 className='How'>
How Our Customers Achieved Success
      </h1>
      <div className='cp'>
        <Cara/>
      </div>
     <div className='st'><Bas/></div> 
     <Footer/>
</div>
  )
}
