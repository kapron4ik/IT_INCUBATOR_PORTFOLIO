import React from 'react';
import styles from './Skills.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import {CodingSkill} from "./codingSkill/CodingSkill";
import { LanguageSkill } from './languageSkill/LanguageSkill';
import { EducationSkill } from './educationSkill/EducationSkill';


function Skills() {
    return (
        <div className={styles.skillsBlock} id={'skills'}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.tittle}>My
                    <span>skills</span></h2>
                <div className={styles.skills}>
                    {/*    <Skill*/}
                    {/*        title={"Sass/Scss"}*/}
                    {/*        icon={faEnvelope}*/}
                    {/*        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam molestiae," +*/}
                    {/*        "optio repellat rerum similique sint veniam voluptatibus? Amet debitis odio reprehenderit"}/>*/}
                </div>

                <CodingSkill/>
                <LanguageSkill/>
                <EducationSkill/>

            </div>
        </div>
    );
}

export default Skills;
