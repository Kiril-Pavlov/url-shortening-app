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
        <div className={styles.headerTitleContainer}><img src={Logo} alt="" /></div>
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
      <div className={styles.hamburgerMenuContainer}>
          <div className={styles.hamburgerLinksContainer}>
            {links.map(item=>{
              return(
                <a href="#" className={styles.hamburgerLinkItem}>{item.linkName}</a>
              )
            })}
          </div>
          <div className={styles.hamburgerLogSignContainer}>
            <a href="#" className={styles.hamburgerLinkItem}>Login</a>
            <button className={styles.hamSignUpBtn}>Sign Up</button>
          </div>
      </div>
    </header>
  )
}

export default Header