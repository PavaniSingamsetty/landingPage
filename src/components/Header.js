import React from 'react';
import { RiShoppingCart2Fill, RiHeartFill, RiUserSettingsFill } from 'react-icons/ri';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/your-logo.png" alt="Company Logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">Children</a></li>
          <li><a href="/">Best Sellers</a></li>
        </ul>
      </nav>
      <nav className="user-nav">
        <ul>
          <li><a href="/"><RiShoppingCart2Fill /> Cart</a></li>
          <li><a href="/"><RiHeartFill /> Wishlist</a></li>
          <li><a href="/"><RiUserSettingsFill /> SignIn</a></li>
          <li><a href="/"><RiUserSettingsFill /> Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

