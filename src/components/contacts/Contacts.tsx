import React, {ChangeEvent, useState} from 'react';
import styles from './Contacts.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Project from "../projects/project/Project";
import Button from '../common/components/button/Button';
import axios from "axios";
import {ContactBlock} from "./contactBlock/ContactBlock";
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
// const Bounce = require('react-reveal/Bounce');

function Contacts() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeSubject = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.currentTarget.value)
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }


    function submit() {
        // axios.post('http://localhost:3010/sendMessage', {
        axios.post('https://smtp-nodejs-server-vs.herokuapp.com/sendMessage', {
            name, email, subject, message
        })
            .then(() => {
                alert('Ваше сообщение отправлено!')
            })
            .catch((res) => {
                alert(res)
            })
    }

    return (
        <div className={styles.wrapper} id={'contacts'}>
            <h2 className={styles.tittle}>Contact
                <span>me</span></h2>

            <div className={` ${styles.container}`}>
                <Bounce top>
                <ContactBlock icon={faPhone}
                              title={'PHONE NUMBER:'}
                              description={'+380 (50) 626-33-37'}/>
                <ContactBlock icon={faEnvelope}
                              title={'EMAIL ADDRESS:'}
                              description={'sapronov.vitalik@gmail.com'}/>
                <ContactBlock icon={faMapMarkerAlt}
                              title={'MY LOCATION:'}
                              description={'Kiev, Lomonosov Street 85A'}/>

                <div className={styles.formBlock}>
                    <div className={styles.box1}>
                        <input type='text' name='name' placeholder='Name' required={true} onChange={onChangeName}/>
                        <input type='email' name='email' placeholder='Email*' required={true}
                               onChange={onChangeEmail}/>
                    </div>
                    <input type='text' name='subject' placeholder='Subject*' required={true}
                           onChange={onChangeSubject}/>
                    <textarea name='message' placeholder='Message*' required={true}
                              onChange={onChangeMessage}></textarea>
                    <Button onClick={submit}>Submit</Button>
                </div>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.10887161205!2d30.460445416071863!3d50.38316897946606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8e2443a07c9%3A0xdbf91c9e0f52d796!2z0YPQuy4g0JzQuNGF0LDQuNC70LAg0JvQvtC80L7QvdC-0YHQvtCy0LAsIDg10JAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1624416981996!5m2!1sru!2sua"
                        allowFullScreen aria-hidden="false" tabIndex={0}
                    ></iframe>
                </div>
                </Bounce>
            </div>

        </div>
    );
}

export default Contacts;
