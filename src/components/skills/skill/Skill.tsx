import React from 'react';
import styles from './Skill.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";


type PropsType = {
    title: string
    icon: IconProp
    description: string
}

function Skill(props: PropsType) {
    return (
        <div className={styles.skillsBlock}>
            <FontAwesomeIcon icon={props.icon} className={styles.icon}/>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
