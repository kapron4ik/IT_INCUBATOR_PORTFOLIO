import React from 'react';
import styles from './Main.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Button from '../common/components/button/Button';
import myFoto from '../../assets/image/MyFoto.jpg'

function Main() {
    return (
        <div className={styles.mainBlock} id={'main'}>
            <div className={`${stylesContainer.container} ${styles.mainContainer}`}>
                <div className={styles.photo}>
                    {/*<img src="https://geniusdevs.com/themeforest/icard/icard/assets/images/main-img.jpg" alt=""/>*/}
                    <img src={myFoto} alt=""/>
                </div>
                <div className={styles.boxInfo}>
                    <span className={styles.greeting}>HELLO</span>
                    <h2 className={styles.name}>I'M
                        <span>SAPRONOV VITALIY</span></h2>
                    <span>A front-end developer</span>
                    <Button onClick={()=>{window.location.href = "#"+'projects'}}>Portfolio</Button>
                </div>

            </div>
        </div>
    );
}

export default Main;
