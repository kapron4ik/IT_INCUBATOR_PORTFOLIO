import React from 'react';
import styles from './EducationBar.module.scss';


type PropsType = {
    name: string
    degree: string
    description: Array<string>
    year: string
}

function EducationBar(props: PropsType) {

    return (
        <div className={styles.education}>
            <h4 className={styles.name}>{props.name}</h4>
            <p className={styles.degree}>{props.degree}
                <span className={styles.year}>
                        {props.year}
                </span>
            </p>
            <div className={styles.description}>
                <ul>
                    {props.description.map(d  => <li>{d}</li>)}
                </ul>
                {/*<p>{props.description}</p>*/}
            </div>
        </div>
    );
}

export default EducationBar;
