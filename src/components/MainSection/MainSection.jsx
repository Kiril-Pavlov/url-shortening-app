import React,{useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'

import styles from "./MainSection.module.css"

const MainSection = () => {

  const [urlInput, setUrlInput] = useState("")
  const [shortURLList, setShortURLList] = useState([])

    //get data from localStorage after reloading the page
    useEffect(() => {
      if (localStorage.getItem("localURLList")) {
        let localData = JSON.parse(localStorage.getItem("localURLList"));
        console.log(localData)
        setShortURLList(localData)
      }
    }, [])

  const getShortLink = () => {
    axios.get(`https://api.shrtco.de/v2/shorten?url=${urlInput}`)
      .then(res => {
        // console.log(res.data.result.original_link)
        let originalLink = res.data.result.original_link;
        // console.log(res.data.result.short_link)
        let shortLink = res.data.result.short_link;
        let newLink = { originalLink, shortLink }
        setShortURLList([...shortURLList, newLink])
        localStorage.setItem("localURLList", JSON.stringify([...shortURLList, newLink]))
      })
  }
  // console.log(shortURLList)

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
      <div className={styles.shorterLinksList}>
        {shortURLList.map(item => {
          return (
            <div className={styles.shorterLinkItem} key={item.shortLink}>
              <div className={styles.shorterLinkItemLeft}>
                <div className={styles.fullURL}>{item.originalLink}</div>
              </div>
              <div className={styles.shorterLinkItemRight}>
                <div className={styles.shortURL}>{item.shortLink}</div>
                <button className={styles.copyButton}>Copy</button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default MainSection