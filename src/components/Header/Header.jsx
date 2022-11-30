import React from 'react'

import Navbar from "../Navbar/Navbar"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className='headerContainer'>
        <Navbar />
    </header>
  )
}

export default Header