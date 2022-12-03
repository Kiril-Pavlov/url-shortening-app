import React from 'react'

import styles from "./Footer.module.css"

import Logo from "../../assets/logo.svg"
import FBicon from "../../assets/icon-facebook.svg"
import TwitterIcon from "../../assets/icon-twitter.svg"
import PinterestIcon from "../../assets/icon-pinterest.svg"
import IGicon from "../../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoContainer}>
          <img src={Logo} alt="Logo" className={styles.footerLogo}/>
        </div>
        <div className={styles.footerLinksList}>
          <div className={styles.footerSubtitle}>Features</div>
          <ul className={styles.footerSubList}>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className={styles.footerLinksList}>
          <div className={styles.footerSubtitle}>Resources</div>
          <ul className={styles.footerSubList}>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.footerLinksList}>
          <div className={styles.footerSubtitle}>Company</div>
          <ul className={styles.footerSubList}>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footerSocialIcons}>
          <img src={FBicon} alt="Facebook" className={styles.footerSocialIcon}/>
          <img src={TwitterIcon} alt="Twitter" className={styles.footerSocialIcon}/>
          <img src={PinterestIcon} alt="Pinterest" className={styles.footerSocialIcon}/>
          <img src={IGicon} alt="Instagram" className={styles.footerSocialIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Footer