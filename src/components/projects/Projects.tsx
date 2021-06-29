import React from 'react';
import styles from './Projects.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import shophia from '../../assets/image/cover/shophia.png'
import shophiaPw from '../../assets/image/preview/shophia_Pw.jpg'
import pingbuller from '../../assets/image/cover/pingbuller.jpg'
import pingbullerPw from '../../assets/image/preview/pingbuller_Pw.jpg'
import accordion from '../../assets/image/cover/acordion.jpg'
import accordionPw from '../../assets/image/preview/acordion_Pw.jpg'
import todolist1 from '../../assets/image/cover/todolist1.jpg'
import todolist1Pw from '../../assets/image/preview/todolist1_Pw.jpg'
import sn from '../../assets/image/cover/sn.png'
import snPw from '../../assets/image/preview/sn_Pw.jpg'
import counter from '../../assets/image/cover/counter.png'
import counterPw from '../../assets/image/preview/counter_Pw.jpg'
import todolist2 from '../../assets/image/cover/todolist2.jpg'
import todolist2Pw from '../../assets/image/preview/todolist2_Pw.jpg'
import cardPack from '../../assets/image/cover/cardPack.png'
import cardPackPw from '../../assets/image/preview/cardPack_Pw.jpg'



function Projects() {

    const projects = [
        {
            image: {backgroundImage: `url(${shophia})`},
            imageModal: {backgroundImage: `url(${shophiaPw})`},
            title: 'Adaptive layout - Store',
            stack: 'CSS, HTML, JS, Adaptive layout',
            description: 'Work media with popUp, toTop, slider',
            linkGH: 'https://github.com/kapron4ik/Shophia',
            linkPr: 'https://kapron4ik.github.io/Shophia/'
        },
        {
            image: {backgroundImage: `url(${pingbuller})`},
            imageModal: {backgroundImage: `url(${pingbullerPw})`},
            title: 'Adaptive layout - Landing page',
            stack: 'CSS, HTML, Adaptive layout',
            description: 'Training project for practicing responsive layout',
            linkGH: 'https://github.com/kapron4ik/Pingbuller',
            linkPr: 'https://kapron4ik.github.io/Pingbuller/'
        },
        {
            image: {backgroundImage: `url(${accordion})`},
            imageModal: {backgroundImage: `url(${accordionPw})`},
            title: 'CSS Accordion Slider',
            stack: 'CSS, HTML, JS',
            description: 'A feature of this project is the CSS accordion slider, adaptive layout is also applied',
            linkGH: 'https://github.com/kapron4ik/Accordion',
            linkPr: 'https://kapron4ik.github.io/Accordion/'
        },
        {
            image: {backgroundImage: `url(${todolist1})`},
            imageModal: {backgroundImage: `url(${todolist1Pw})`},
            title: 'To do List - JS',
            stack: 'CSS, HTML, JS',
            description: 'Where are we without a daily to-do list. It is executed in Java script and stores its data in the local storage',
            linkGH: 'https://github.com/kapron4ik/ToDo',
            linkPr: 'https://kapron4ik.github.io/ToDo/'
        },
        {
            image: {backgroundImage: `url(${sn})`},
            imageModal: {backgroundImage: `url(${snPw})`},
            title: 'Social Network',
            stack: 'CSS, HTML, JS, REACT, REDUX, TS',
            description: 'ЗАПОЛНИТЬ!!!',
            linkGH: 'https://github.com/kapron4ik/IT_INCUBATOR_SN_TS',
            linkPr: 'https://kapron4ik.github.io/IT_INCUBATOR_SN_TS/'
        },
        {
            image: {backgroundImage: `url(${counter})`},
            imageModal: {backgroundImage: `url(${counterPw})`},
            title: 'Counter',
            stack: 'ЗАПОЛНИТЬ!!!',
            description: '',
            linkGH: 'https://github.com/kapron4ik/IT_INCUBATOR_COUNTER_REDUX2',
            linkPr: 'https://kapron4ik.github.io/IT_INCUBATOR_COUNTER_REDUX2/'
        },
        {
            image: {backgroundImage: `url(${todolist2})`},
            imageModal: {backgroundImage: `url(${todolist2Pw})`},
            title: 'ToDo',
            stack: 'ЗАПОЛНИТЬ!!!',
            description: '',
            linkGH: 'https://github.com/kapron4ik/IT_INCUBATOR_TodoList_TS',
            linkPr: 'https://kapron4ik.github.io/IT_INCUBATOR_TodoList_TS/'
        },
        {
            image: {backgroundImage: `url(${cardPack})`},
            imageModal: {backgroundImage: `url(${cardPackPw})`},
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
