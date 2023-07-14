import React from 'react'
import styles from "./Home.module.css"


const Home = () => {
  return (
    <div>
        <div className={styles.divbox}>


        <p>Welcome to the Home page</p>
        </div>
        <div className={styles.divbox2}>
            <p>This app consists of todo app and also shopping app.</p>
            <p>Enjoy this app.</p>
        </div>
    </div>
  )
}

export default Home