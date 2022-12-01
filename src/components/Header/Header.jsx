import React, { useState } from 'react'

import Navbar from "../Navbar/Navbar"

import styles from "./Header.module.css"

import Logo from "../../assets/logo.svg"
import Hamburger from "../../assets/hamburger.svg"
import Close from "../../assets/close-menu.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {linkName:"features"},
    {linkName:"pricing"},
    {linkName:"resources"},
  ]

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div><img src={Logo} alt="" /></div>
        <Navbar links={links}/>
      </div>
      <div className={styles.loginSignUp}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signUpBtn}>Sign Up</button>
      </div>
      <div className={styles.hamburgerContainer}>
        {isOpen ? (
          <img src={Close} alt="close" className={styles.closeIcon} onClick={toggleIsOpen}/>
        ):(
          <img src={Hamburger} alt="hamburger" className={styles.hamburgerIcon} onClick={toggleIsOpen}/>
        )}
      </div>
    </header>
  )
}

export default Header