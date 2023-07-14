import React from 'react'
import styles from "./Home.module.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>

            <div className={styles.navDiv}>

            <Link to={"/"}>   
                    <h2>Home</h2>
                    </Link>
                    <Link to={"/about"}>
                    <h2>About</h2>
                    </Link>
                    <Link to={"/todo"}>
                    <h2>Todo</h2>
                    </Link>
                    <Link to={"/bag"}>
                    <h2>Shopping Bag</h2>
                    </Link>
                    <Link to={"/cart"}>
                    <h2>Shopping Cart</h2>
                    </Link>
                    <Link to={"/contact"}>
                    <h2>Contact</h2>
                    </Link>

            </div>

        </nav>

    </div>
  )
}

export default Navbar