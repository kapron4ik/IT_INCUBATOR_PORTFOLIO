import React from 'react';
import styles from './Main.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Button from '../common/components/button/Button';
import myFoto from '../../assets/image/MyFoto.jpg'
import {Icon, InlineIcon} from '@iconify/react';
import portfolioIcon from '@iconify-icons/zondicons/portfolio';


function Main() {
    return (
        <div className={`${styles.mainBlock} ${stylesContainer.container}`} id={'main'}>
            <div className={styles.photo}>
                <img src={myFoto} alt="myFoto"/>
            </div>
            <div className={styles.boxInfo}>
                <span className={styles.greeting}>HELLO</span>
                <h2 className={styles.name}>I'M
                    <span>SAPRONOV VITALIY</span></h2>
                <span>A front-end developer</span>
                <Button onClick={() => {
                    window.location.href = "#" + 'projects'
                }}><Icon icon={portfolioIcon}/> Portfolio</Button>
            </div>
        </div>
    );
}

export default Main;
