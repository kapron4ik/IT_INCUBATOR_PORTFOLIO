import React from 'react';
import styles from './CodingSkill.module.scss';
import ProgressBar from "../skillBlock/progressBar/ProgressBar";
import TitleList from "../skillBlock/titleList/TitleList";

export function CodingSkill() {
    const progressReact = {width: `65%`}
    const progressRedux = {width: `65%`}
    const progressFlux = {width: `65%`}
    const progressHTML = {width: `80%`}
    const progressCSS = {width: `80%`}
    const progressJS = {width: `70%`}
    const progressTS = {width: `65%`}
    const progressSass = {width: `65%`}
    const progressGit = {width: `60%`}
    const progressStory = {width: `40%`}
    const progressAPI = {width: `50%`}
    const progressMat = {width: `40%`}
    const progressAl = {width: `40%`}
    const progressUt = {width: `40%`}

    return (
        <div className={styles.skillsBlock}>
            <TitleList title={'Coding skill'}/>
            <ProgressBar progress={progressReact} skill={'React'} progressList={progressReact.width}/>
            <ProgressBar progress={progressRedux} skill={'Redux'} progressList={progressRedux.width}/>
            <ProgressBar progress={progressFlux} skill={'Flux'} progressList={progressFlux.width}/>
            <ProgressBar progress={progressHTML} skill={'HTML5'} progressList={progressHTML.width}/>
            <ProgressBar progress={progressCSS} skill={'CSS3'} progressList={progressCSS.width}/>
            <ProgressBar progress={progressJS} skill={'JavaScript'} progressList={progressJS.width}/>
            <ProgressBar progress={progressTS} skill={'TypeScript'} progressList={progressTS.width}/>
            <ProgressBar progress={progressSass} skill={'SASS/SCSS'} progressList={progressSass.width}/>
            <ProgressBar progress={progressGit} skill={'Git'} progressList={progressGit.width}/>
            <ProgressBar progress={progressStory} skill={'Storybook'} progressList={progressStory.width}/>
            <ProgressBar progress={progressAPI} skill={'RestAPI'} progressList={progressAPI.width}/>
            <ProgressBar progress={progressMat} skill={'Material-UA'} progressList={progressMat.width}/>
            <ProgressBar progress={progressAl} skill={'Adaptive layout'} progressList={progressAl.width}/>
            <ProgressBar progress={progressUt} skill={'Unit tests'} progressList={progressUt.width}/>
        </div>

    );
}

