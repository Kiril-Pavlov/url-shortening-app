import React from 'react'

import styles from "./Boost.module.css"

const Boost = () => {
  return (
    <div className={styles.boostContainer}>
      <div className={styles.boostTitle}>Boost your links today</div>
      <button className={styles.boostButton}>Get Started</button>
    </div>
  )
}

export default Boost