import React from 'react';
import styles from './TitleList.module.scss';


type PropsType = {
    title: string
}

function TitleList(props: PropsType) {

    return (
        <>
            <h4 className={styles.title}>{props.title}</h4>
        </>
    );
}

export default TitleList;
