import React from 'react';
import styles from './Projects.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import socialImage from '../../assets/image/cover/social-network.png'
import ModalContainer from "../modals/ModalContainer";
import adaptiveImage from '../../assets/image/cover/adaptive-layout.png'
import shophia from '../../assets/image/preview/shophia.jpg'
import pingbuller from '../../assets/image/preview/pingbuller.jpg'
import landingPage from '../../assets/image/cover/landing-page-v2.png'
import accordion from '../../assets/image/preview/acordion.jpg'
import todolist from '../../assets/image/cover/todolistimage.jpg'
import todolist1 from '../../assets/image/cover/todolistimage-v1.jpg'
import todolist2 from '../../assets/image/cover/todolistimage-v2.jpg'
import todo from '../../assets/image/preview/todo.jpg'


function Projects() {

    const projects = [
        {
            image: {backgroundImage: `url(${adaptiveImage})`},
            imageModal: {backgroundImage: `url(${shophia})`},
            title: 'Adaptive layout - Store',
            stack: 'CSS, HTML, JS, Adaptive layout',
            description: 'Work media with popUp, toTop, slider',
            linkGH: 'https://github.com/kapron4ik/Shophia',
            linkPr: 'https://kapron4ik.github.io/Shophia/'
        },
        {
            image: {backgroundImage: `url(${adaptiveImage})`},
            imageModal: {backgroundImage: `url(${pingbuller})`},
            title: 'Adaptive layout - Landing page',
            stack: 'CSS, HTML, Adaptive layout',
            description: 'Training project for practicing responsive layout',
            linkGH: 'https://github.com/kapron4ik/Pingbuller',
            linkPr: 'https://kapron4ik.github.io/Pingbuller/'
        },
        {
            image: {backgroundImage: `url(${landingPage})`},
            imageModal: {backgroundImage: `url(${accordion})`},
            title: 'CSS Accordion Slider',
            stack: 'CSS, HTML, JS',
            description: 'A feature of this project is the CSS accordion slider, adaptive layout is also applied',
            linkGH: 'https://github.com/kapron4ik/Accordion',
            linkPr: 'https://kapron4ik.github.io/Accordion/'
        },
        {
            image: {backgroundImage: `url(${todolist1})`},
            imageModal: {backgroundImage: `url(${todo})`},
            title: 'To do List - JS',
            stack: 'CSS, HTML, JS',
            description: 'Where are we without a daily to-do list. It is executed in Java script and stores its data in the local storage',
            linkGH: 'https://github.com/kapron4ik/ToDo',
            linkPr: 'https://kapron4ik.github.io/ToDo/'
        },
        {
            image: {backgroundImage: `url(${socialImage})`},
            imageModal: {backgroundImage: `url(${todo})`},
            title: 'Social Network',
            stack: 'CSS, HTML, JS, REACT, REDUX, TS',
            description: 'ЗАПОЛНИТЬ!!!',
            linkGH: 'https://github.com/kapron4ik/IT_INCUBATOR_SN_TS',
            linkPr: 'https://kapron4ik.github.io/IT_INCUBATOR_SN_TS/'
        },
        {
            image: {backgroundImage: `url(${todolist})`},
            imageModal: {backgroundImage: `url(${todo})`},
            title: 'Counter',
            stack: 'ЗАПОЛНИТЬ!!!',
            description: '',
            linkGH: 'https://github.com/kapron4ik/IT_INCUBATOR_COUNTER_REDUX2',
            linkPr: 'https://kapron4ik.github.io/IT_INCUBATOR_COUNTER_REDUX2/'
        },
        {
            image: {backgroundImage: `url(${todolist2})`},
            imageModal: {backgroundImage: `url(${todo})`},
            title: 'ToDo',
            stack: 'ЗАПОЛНИТЬ!!!',
            description: '',
            linkGH: 'https://github.com/kapron4ik/IT_INCUBATOR_TodoList_TS',
            linkPr: 'https://kapron4ik.github.io/IT_INCUBATOR_TodoList_TS/'
        },
        {
            image: {backgroundImage: `url(${todolist})`},
            imageModal: {backgroundImage: `url(${todo})`},
            title: 'Card PACK',
            stack: 'ЗАПОЛНИТЬ!!!',
            description: '',
            linkGH: 'https://github.com/kapron4ik/homeworks_16',
            linkPr: 'https://kapron4ik.github.io/homeworks_16/'
        },
    ]

    return (
        <div className={styles.projectsBlock} id={'projects'}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.tittle}>My
                    <span>projects</span></h2>
                <div className={styles.skills}>
                    {/*<Project*/}
                    {/*    style={social}*/}
                    {/*    title={"My first project"}*/}
                    {/*    stack={'HTML, REACT, REDUX'}*/}
                    {/*    description={"Lorem ipsum dolor sit amet, consectetur adipisicing ptatem."}/>*/}
                    {
                        projects.map(p => {
                            return <Project
                                imageModal ={p.imageModal}
                                style={p.image}
                                title={p.title}
                                stack={p.stack}
                                description={p.description}
                                linkGH={p.linkGH}
                                linkPr={p.linkPr}/>
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Projects;
