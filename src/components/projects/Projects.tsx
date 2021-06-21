import React from 'react';
import styles from './Projects.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import socialImage from '../../assets/image/social-network.png'

function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`
    }

    const projects = [
        {
            image: {backgroundImage: `url(${socialImage})`},
            imageModal: {backgroundImage: `url(${socialImage})`},
            title: 'My first project',
            stack: 'HTML, REACT, REDUX',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing ptatem.'
        },
        {
            image: {backgroundImage: `url(${socialImage})`},
            imageModal: {backgroundImage: `url(${socialImage})`},
            title: 'My second project',
            stack: 'HTML, REACT, REDUX',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing ptatem.'
        },
        {
            image: {backgroundImage: `url(${socialImage})`},
            imageModal: {backgroundImage: `url(${socialImage})`},
            title: 'My third project',
            stack: 'HTML, REACT, REDUX',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing ptatem.'
        }
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
                                description={p.description}/>
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Projects;
