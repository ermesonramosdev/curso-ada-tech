import React from "react";
import logoImg from '../../assets/image/react.svg';
import './style.css';

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>
        <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About us</a></li>          
      </ul>
      </nav>        
    </header>
  )
}

