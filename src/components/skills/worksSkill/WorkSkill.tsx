import React from 'react';
import styles from '../codingSkill/CodingSkill.module.scss';
import EducationBar from '../skillBlock/educationBar/EducationBar';
import TitleList from "../skillBlock/titleList/TitleList";

export function WorkSkill() {

    return (
        <div className={styles.skillsBlock}>
            <TitleList title={'Experince'}/>
            <EducationBar
                name={'Front-end developer'}
                degree={'Freelance'}
                year={'2021-Until now'}
                description={['- creating apps using React and TypeScript;',
                                '- redux state management and using REST API;',
                                '- engaged in refactoring, bug fixing;',
                                '- experience in cross-browser, adaptive;',
                                '- responsive development, CSS-preprocessors;',
                                '- forms (Formik and Redux-form);',
                                '- created Unit tests, Storybook.']}
            />
            <EducationBar
                name={'Design engineer'}
                degree={'Vents'}
                year={'2018-Until now'}
                description={['Production and sale of household, commercial and industrial ventilation.',
                              '- creation of 3D models of products;',
                              '- development of design documentation;',
                              '- support of products during production.',]}
            />
            <EducationBar
                name={'Deputy Head of the Design Department'}
                degree={'RASEC UKRAINE'}
                year={'2015-2018'}
                description={['Development and production of commercial equipment.',
                '- control and coordination of the department\'s work;',
                '- development of individual projects;',
                '- development of a detailed material specification;',
                '- creation of 3D models of products; ',
                '- development of design documentation;',
                '- calculation of the cost of the product;',
                '- implementation of international practices in production']}
            />
            <EducationBar
                name={'Head of the design department'}
                degree={'Argus-service'}
                year={'2014 - 2015'}
                description={['Development and production of boiler plants and complexes.',
                                '- organization of the department\'s work;',
                                '- organization of production work;',
                                '- working with a customer, developing individual projects;',
                                '- taking part in the installation and start-up of equipment at the customer\'s place;',
                                '- creation of 3D models of products;',
                                '- development of design documentation;',
                                '- calculation of the cost of the product.']}
            />
            <EducationBar
                name={'Design engineer'}
                degree={'Corum Group'}
                year={'2010 - 2014'}
                description={['Development and production of mining equipment.',
                              '- accompaniment of heading and cleaning group combines during production;',
                              '- creation of 3D models of products;',
                              '- development of design documentation;',
                              '- taking part in testing, installation, commissioning of new and serial equipment;',
                              '- monitoring at the customer\'s site during the operation of new and serial equipment;']}
            />

        </div>
    );
}

