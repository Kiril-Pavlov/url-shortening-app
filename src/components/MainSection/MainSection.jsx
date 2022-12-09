import React from 'react'

import styles from "./MainSection.module.css"

const MainSection = () => {
  return (
    <main className={styles.mainSectionOuterContainer}>
      <div className={styles.mainSectionContainer}>
        <input type="text" className={styles.mainSectionInput} placeholder="Shorten a link here..."/>
        <button className={styles.mainSectionBtn}>Shorten it!</button>
      </div>
    </main>
  )
}

export default MainSection