import React from 'react';
import styles from './Main.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Button from '../common/components/button/Button';
import myFoto from '../../assets/image/MyFoto.jpg'
import {Icon, InlineIcon} from '@iconify/react';
import portfolioIcon from '@iconify-icons/zondicons/portfolio';
import Particles from "react-tsparticles"
import ReactTypingEffect from "react-typing-effect";
// @ts-ignore
import Tilt from 'react-tilt'

// const Tilt = require('react-tilt')

function Main() {
    return (
        <div className={`${styles.mainBlock} ${stylesContainer.container}`} id={'main'}>
            <Particles className={styles.particles}
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 4,
                                size_min: 0.3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            enable: true,
                            random: true,
                            speed: 1,
                            direction: "top",
                            out_mode: "out"
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 0,
                                opacity: 0
                            },
                            repulse: {
                                distance: 400,
                                duration: 4
                            }
                        }
                    }
                }} />

            <div className={styles.photo}>
                <Tilt className="Tilt" options={{ max : 10, scale:0.98 }}>
                <img src={myFoto} alt="myFoto"/>
                </Tilt>
            </div>

            <div className={styles.boxInfo}>
                <span className={styles.greeting}>HELLO</span>
                <h2 className={styles.name}>I'M
                    <span>SAPRONOV VITALIY</span></h2>
                {/*<h4>A front-end developer</h4>*/}
                <h4>A <ReactTypingEffect
                    text={["front-end developer", "react developer"]}
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={1500}
                    typingDelay={1500}
                /></h4>

                <h5>Personal qualities</h5>
                <ul>
                    <li>focused on the result: worked for 3 months seven days a week to complete the project;</li>
                    <li>self-disciplined: I go to training 4 times a week;</li>
                    <li>purposeful: I changed my life to be here;</li>
                    <li>communicative: at each place of work I found a common language with the team.</li>
                </ul>
                <Button onClick={() => {
                    window.location.href = "#" + 'projects'
                }}><Icon icon={portfolioIcon}/> Portfolio</Button>
            </div>
        </div>
    );
}

export default Main;
