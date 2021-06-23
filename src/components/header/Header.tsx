import React, {useState} from 'react';
import styles from './Header.module.scss';
import Nav from "./nav/Nav";

function Header() {
    const [isActive, setIsActive] = useState<boolean>(false)

    const isMenuChange = () => setIsActive(!isActive)

    return (
        <div className={styles.headerBlock}>
            <div className={styles.toggle}
                 tabIndex={1}
                 onClick={isMenuChange}>
                <div className={isActive ? `${styles.navIcon} ${styles.open}` : styles.navIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={isActive ? styles.menu : `${styles.menu} ${styles.close}`}><Nav/></div>
        </div>
    );
}

export default Header;
