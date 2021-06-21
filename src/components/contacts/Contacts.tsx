import React, {ChangeEvent, useState} from 'react';
import styles from './Contacts.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import Project from "../projects/project/Project";
import Button from '../common/components/button/Button';
import axios from "axios";

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
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={`${stylesContainer.container}  ${styles.skillsContainer}`}>
                <h2 className={styles.tittle}>Contact
                    <span>me</span></h2>
                <div className={styles.formBlock}>
                    <form action="handler.php">
                        <div>
                            <input type='text' name='name' placeholder='Name' required={true} onChange={onChangeName}/>
                            <span></span>
                            <input type='email' name='email' placeholder='Email*' required={true}
                                   onChange={onChangeEmail}/>
                        </div>
                        <input type='text' name='subject' placeholder='Subject*' required={true}
                               onChange={onChangeSubject}/>
                        <textarea name='message' placeholder='Message*' required={true}
                                  onChange={onChangeMessage}></textarea>
                    </form>
                    <Button onClick={submit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
