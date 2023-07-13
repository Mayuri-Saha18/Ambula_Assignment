import React from 'react'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
        <nav className={styles.navbar}>

            <div className={styles.navDiv}>
          
            
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Todo</h2>
                    <h2>Shopping Bag</h2>
                    <h2>Contact</h2>
            
            </div>

        </nav>
    </div>
  )
}

export default Home