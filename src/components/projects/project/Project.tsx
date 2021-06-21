import React, {CSSProperties} from 'react';
import styles from './Project.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import Button from "../../common/components/button/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import ModalContainer from "../../modals/ModalContainer";

type PropsType = {
    style: CSSProperties
    title: string
    description: string
    stack: string
    imageModal: CSSProperties
}

function Project(props: PropsType) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.style}>
                {/*<img src={props.image} alt="Snow"/>*/}
                {/*<a href="" className={styles.btn}>View</a>*/}
                {/*<Button onClick={()=>{}}>View</Button>*/}

                {/*<div className={styles.tittleBefore}><h4>{props.title}</h4></div>*/}
                <ModalContainer
                    title={props.title}
                    stack={props.stack}
                    description={props.description}
                    imageModal={props.imageModal}
                />

                {/*<div className={styles.tittle}>*/}
                {/*    <h3 >{props.title}</h3>*/}
                {/*</div>*/}
                {/*<div className={styles.technologyStack}>*/}
                {/*    <h3>Technology Stack:</h3>*/}
                {/*    <span>{props.stack}</span>*/}
                {/*</div>*/}
                {/*<div className={styles.description}>*/}
                {/*    <h3>Description</h3>*/}
                {/*    <span>{props.description}</span>*/}
                {/*</div>*/}
                {/*<div className={styles.icFirst}>*/}
                {/*    <a href="https://github.com/kapron4ik/Registration-form.git" target="_blank">*/}
                {/*        <FontAwesomeIcon icon={faGithub} className={styles.centre}/>*/}
                {/*        <FontAwesomeIcon icon={faSpinner} className={styles.circle}/>*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<div className={styles.icSecond}>*/}
                {/*    <a href="https://kapron4ik.github.io/Registration-form" target="_blank">*/}
                {/*        <FontAwesomeIcon icon={faLink} className={styles.centre}/>*/}
                {/*        <FontAwesomeIcon icon={faSpinner} className={styles.circle}/>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>


            {/*<div className={styles.projectInfo}>*/}
            {/*    <h3>{props.title}</h3>*/}
            {/*    <span className={styles.description}>{props.description}</span>*/}
            {/*</div>*/}
        </div>
    );
}


export default Project;
