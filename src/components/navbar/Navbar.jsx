import React from 'react'
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='wellness__navbar'>
      <div className='wellness__navbar-links'>
        <div className='wellness__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='wellness__navbarLinks-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#intro'>Welcome</a></p>
          <p><a href='#wellnessForAll'>About</a></p>
          <p><a href='#blog'>Blog</a></p>
          <p><a href='#features'>Gallery</a></p>




        </div>
      </div>
      <div className='wellness__navbar-sign'>
        <p> Sign In</p>
        <button type="button">Register</button>
      </div>
    </div>
  )
}

export default Navbar
