import React from 'react';
import styles from './Footer.module.scss';
import stylesContainer from "../common/styles/Container.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import codewarsIcon from '@iconify-icons/cib/codewars';

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container}  ${styles.footerContainer}`}>
                <h3>Sapronov Vitaliy</h3>
                <div className={styles.iconsBlock}>
                    <a href="https://www.facebook.com/kapron4ik" target="_blank"><FontAwesomeIcon icon={faFacebook}
                                                                                                  className={styles.icon}/></a>
                    <a href="https://www.instagram.com/kapron4ik" target="_blank"><FontAwesomeIcon icon={faInstagram}
                                                                                                   className={styles.icon}/></a>
                    <a href="https://www.linkedin.com/in/vitaliy-sapronov-447339162" target="_blank"><FontAwesomeIcon
                        icon={faLinkedin} className={styles.icon}/></a>
                    <a href="https://github.com/kapron4ik/" target="_blank"><FontAwesomeIcon icon={faGithub}
                                                                                             className={styles.icon}/></a>
                    <a href="https://www.codewars.com/users/kapron4ik" target="_blank">
                        <Icon icon={codewarsIcon} className={styles.icon}/>
                </a>
                </div>
                <span>© 2021 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
