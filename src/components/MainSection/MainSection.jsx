import React from 'react'
import { useState } from 'react'

import styles from "./MainSection.module.css"

const MainSection = () => {

  const [urlInput,setUrlInput] = useState("")

  return (
    <main className={styles.mainSectionOuterContainer}>
      <div className={styles.mainSectionContainer}>
        <input 
            type="text" 
            className={styles.mainSectionInput} 
            placeholder="Shorten a link here..."
            value={urlInput} 
            onChange={(e)=>setUrlInput(e.target.value)}/>
        <button className={styles.mainSectionBtn}>Shorten it!</button>
      </div>
    </main>
  )
}

export default MainSection