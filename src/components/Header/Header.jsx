import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <div className='header'>
      <a href='/' className='logo'>
        <FaHeart />
      </a>
      <input
        type='search'
        id='site-search'
        name='q'
        aria-label='Search through site content'
      />

      <button>Search</button>
      <div className='header-right'>
        <a href='#shop'>
          <FaShoppingCart />
        </a>
      </div>
    </div>
  );
}
