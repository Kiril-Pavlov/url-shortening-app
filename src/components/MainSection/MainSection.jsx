import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import styles from "./MainSection.module.css"

const MainSection = () => {

  const [urlInput, setUrlInput] = useState("")

  const getShortLink = () =>{
    axios.get(`https://api.shrtco.de/v2/shorten?url=${urlInput}`)
    .then(res=>{
      console.log(res.data.result)
    })
  }

  return (
    <main className={styles.mainSectionOuterContainer}>
      <div className={styles.mainSectionContainer}>
        <input
          type="text"
          className={styles.mainSectionInput}
          placeholder="Shorten a link here..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <button
          className={styles.mainSectionBtn}
          onClick={getShortLink}
        >
          Shorten it!
        </button>
      </div>
    </main>
  )
}

export default MainSection