import React from 'react';
import styles from '../codingSkill/CodingSkill.module.scss';
import EducationBar from '../skillBlock/educationBar/EducationBar';
import TitleList from "../skillBlock/titleList/TitleList";

export function EducationSkill() {

    return (
        <div className={styles.skillsBlock}>
            <TitleList title={'Education'}/>
            <EducationBar
                name={'Donetsk National Technical University'}
                degree={'Road transport'}
                year={'2005-2010'}
                description={'Technical education in the specialty "Automobiles and Automotive Industry", ' +
                'received basic knowledge for a design engineer, mechanical engineer.'}
            />
            <TitleList title={'additional education'}/>
            <EducationBar
                name={'ITEA'}
                degree={'Front-end developer'}
                year={'2019 - 4 months'}
                description={'Fundamentals of front-end development, HTML & CSS, JS'}
            />
            <EducationBar
                name={'IT-incubator'}
                degree={'React + Redux'}
                year={'2021 - 6 months'}
                description={'JS, React, Redux, TS, Git, RestAPI, Storybook, Material UI'}
            />

        </div>
    );
}

