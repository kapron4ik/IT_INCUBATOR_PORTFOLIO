import React, {CSSProperties} from 'react';
import styles from './ProgressBar.module.scss';


type PropsType = {
    progress: CSSProperties
    skill: string
    progressList: string
}

function ProgressBar(props: PropsType) {

    return (
        <div className={styles.singleSkill}>
            <div className={styles.label}>
                <span>{props.skill}</span>
                <span>{props.progressList}</span>
            </div>
            <div>
                <div className={styles.progress}>
                    <div style={props.progress}
                         className={styles.progressBar}>
                        {/*<span>Primary</span>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
