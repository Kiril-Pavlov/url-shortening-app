import React from 'react'

import styles from "./Statistics.module.css"

import brandIcon from "../../assets/icon-brand-recognition.svg"
import recordsIcon from "../../assets/icon-detailed-records.svg"
import customizableIcon from "../../assets/icon-fully-customizable.svg"

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statisticsContent}>
        <div className={styles.statisticsTitle}>Advanced Statistics</div>
        <p className={styles.statisticsParagraph}>
          Track how your links are performing across the web
          with our advanced statistics dashboard.
        </p>
        <div className={styles.statisticsCardsContainer}>
          <div className={styles.statisticsCard}>
            <div className={styles.statisticsCardSvgContainer}>
              <img src={brandIcon} alt="chart" />
            </div>
            <div className={styles.statisticsCardTitle}>Brand Recognition</div>
            <p className={styles.statisticsCardParagraph}>
              Boost your brand recognition with each click.
              Generic links don’t mean a thing. Branded
              links help instil confidence in your content.
            </p>
          </div>
          <div className={`${styles.statisticsCard} ${styles.two}`}>
            <div className={styles.statisticsCardSvgContainer}>
              <img src={recordsIcon} alt="Detailed records" />
            </div>
            <div className={styles.statisticsCardTitle}>Detailed Records</div>
            <p className={styles.statisticsCardParagraph}>
              Gain insights into who is clicking your links.
              Knowing when and where people
              engage with your content helps inform better decisions.
            </p>
          </div>
          <div className={`${styles.statisticsCard} ${styles.three}`}>
            <div className={styles.statisticsCardSvgContainer}>
              <img src={customizableIcon} alt="chart" />
            </div>
            <div className={styles.statisticsCardTitle}>Fully Customizable</div>
            <p className={styles.statisticsCardParagraph}>
              Improve brand awareness and content
              discoverability through customizable
              links, supercharging audience engagement.
            </p>
          </div>
          <div className={styles.cyanBackgroundLine}></div>
        </div>
      </div>
    </div>
  )
}

export default Statistics