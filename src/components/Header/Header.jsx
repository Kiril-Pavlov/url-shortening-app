import React from 'react'

import Navbar from "../Navbar/Navbar"

import styles from "./Header.module.css"

import Logo from "../../assets/logo.svg"

const Header = () => {
  const links = [
    {linkName:"features"},
    {linkName:"pricing"},
    {linkName:"resources"},
  ]

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
    </header>
  )
}

export default Header