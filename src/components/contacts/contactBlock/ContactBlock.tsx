import React from 'react';
import styles from './ContactBlock.module.scss';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type PropsType = {
    icon: IconProp
    title: string
    description: string
}

export function ContactsBlock(props: PropsType) {

    return (
        <div className={styles.contactsBlock}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className={styles.info}>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

