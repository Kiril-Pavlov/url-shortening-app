import React from 'react'

import Navbar from "../Navbar/Navbar"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className='headerContainer'>
        <div>LOGO</div>
        <Navbar />
        <div>Login/Sign Up</div>
    </header>
  )
}

export default Header