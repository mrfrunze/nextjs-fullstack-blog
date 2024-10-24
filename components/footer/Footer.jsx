import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  const years = new Date()
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Agency</div>
        <div className={styles.text}>
          Creative thoughts agency <span className="year">{years.getFullYear()}</span> © All rights reserved.
        </div>
      
    </div>
  )
}

export default Footer