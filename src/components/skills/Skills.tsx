import React from 'react';
import styles from './Skills.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import {CodingSkill} from "./codingSkill/CodingSkill";
import {LanguageSkill} from './languageSkill/LanguageSkill';
import {EducationSkill} from './educationSkill/EducationSkill';
import {WorkSkill} from "./worksSkill/WorkSkill";
import Button from "../common/components/button/Button";
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
// const Bounce = require('react-reveal/Bounce');


function Skills() {
    return (
        <div className={styles.skillsBlock} id={'skills'}>

            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.tittle}>My
                    <span>skills</span></h2>
                <Bounce top>
                    <div className={styles.cv}>
                        <Button>
                            <a href="https://drive.google.com/file/d/1XjtV5maps_tAQ69U2rrffFKBKDUMgw5z/view?usp=sharing"
                               target="_blank">
                                <FontAwesomeIcon icon={faDownload}/> Download My CV</a>
                        </Button>
                    </div>
                </Bounce>
                <div className={styles.skills}>
                    <div className={styles.box1}>
                        <Bounce top>
                            <CodingSkill/>
                            <LanguageSkill/>
                            <EducationSkill/>
                        </Bounce>
                    </div>
                    <div className={styles.box2}>
                        <Bounce top>
                            <WorkSkill/>
                        </Bounce>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
