import React from 'react'
import './App.css'
import styles from './appStyles.module.css'

const Stylesheets = () => {
    const Head = {
        fontSize: '72px'
    }

  return (
    <div>
      <p style={Head}>Styles</p>
      <p className={styles.success}>Styles</p>
    </div>
  )
}

export default Stylesheets
