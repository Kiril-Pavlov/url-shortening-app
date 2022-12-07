import React from 'react'

import styles from "./Hero.module.css"

import heroImg from "../../assets/illustration-working.svg"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>More than just shorter links</h1>
        <p className={styles.heroParagraph}>Bild your brand's recognition and get detailed insight on how your links are performing</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
      <div className={styles.heroRight}>
        <img src={heroImg} alt="Illustration Working" />
      </div>
    </div>
  )
}

export default Hero