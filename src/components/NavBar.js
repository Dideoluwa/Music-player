import React from 'react'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>Music Player</div>
                <nav>
                    <ul>
                        <li>
                            <button>User</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar