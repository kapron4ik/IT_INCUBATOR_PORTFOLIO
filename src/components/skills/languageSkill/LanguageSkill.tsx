import React from 'react';
import styles from '../codingSkill/CodingSkill.module.scss';
import ProgressBar from "../skillBlock/progressBar/ProgressBar";
import TitleList from "../skillBlock/titleList/TitleList";

export function LanguageSkill() {
    const progressEn = {width: `20%`}
    const progressFr = {width: `25%`}
    const progressRu = {width: `100%`}
    const progressUk = {width: `85%`}


    return (
        <div className={styles.skillsBlock}>
            <TitleList title={'Language skill'}/>
            <ProgressBar progress={progressEn} skill={'English (Pre-Intermediate - in progress)'} progressList={progressEn.width}/>
            <ProgressBar progress={progressFr} skill={'French (Intermediate - in progress)'} progressList={progressFr.width}/>
            <ProgressBar progress={progressRu} skill={'Russian'} progressList={progressRu.width}/>
            <ProgressBar progress={progressUk} skill={'Ukrainian'} progressList={progressUk.width}/>
        </div>
    );
}

