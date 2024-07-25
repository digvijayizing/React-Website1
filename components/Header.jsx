import React from 'react'
import "./Header.css";
export default function Header() {
  return (
    <div className='bg' style={{ backgroundImage: `url("https://media.istockphoto.com/id/1518867055/photo/portrait-of-two-programmers-working-in-a-monitoring-control-room-surrounded-by-big-screens.jpg?s=612x612&w=0&k=20&c=eonVCs0-4H0z-elOwEeWGkETX3rzvK04Sm1K3McORaY="})` }}>
           <div className='logo1'>Logo</div>
           <div className='logo'>SURAKSHIT</div>
            <div className="navbar">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">Contact</a>
      <a href="#" className="nav-item">Solutions</a>
      <a href="#" className="nav-item">Address</a>
      <a href="#" className="nav-item l">Careers</a>
    </div>

  </div>)
}
