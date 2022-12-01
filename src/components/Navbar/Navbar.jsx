import React from 'react'

import styles from "./Navbar.module.css"

const Navbar = ({links}) => {
  return (
    <nav className={styles.navbarContainer}>
      {links.map(item =>{
        return(
          <a href="#" className={styles.linkItem}>{item.linkName}</a>
        )
      })}
    </nav>
  )
}

export default Navbar