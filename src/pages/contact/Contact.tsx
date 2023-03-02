import React, {useEffect, useRef, useState} from "react";
import './Contact.scss'
import { ReactComponent as LinkedinIcon } from '../../assets/svgs/ic-linkedin.svg'
import { ReactComponent as GithubIcon } from '../../assets/svgs/ic-github.svg'
import emailjs from '@emailjs/browser';

export function Contact() {
    const [subjectText, setSubjectText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [contentText, setContentText] = useState('');
    const [sendingEmail, setSendingEmail] = useState(false);


    const form = useRef(null);
    const subjectInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLTextAreaElement>(null);

    const sentToast = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateFields = (): Boolean | undefined => {
        let toReturn;
        if(subjectText === '') {
            subjectInput.current!.classList.add("required")
            toReturn = false;
        }
        if(emailText === '') {
            emailInput.current!.classList.add("required")
            toReturn = false
        }
        if(contentText === '') {
            contentInput.current!.classList.add("required")
            toReturn = false
        }
        if(contentText !== '' && emailText !== '' && contentText !== '')
            toReturn = true;
        return toReturn;
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(validateFields()){
            setSendingEmail(true);
            sentToast.current!.classList.remove("toast__sent--trigger");
            emailjs.sendForm('service_lpht0s5', 'template_m8yj6bk', form.current!, 'Ng_lvRzLCb008pGkw')
                .then((result) => {
                    console.log(`Email sent. HTTP Status: ${result.status}`);
                    clearFields();
                    sentToast.current!.classList.add("toast__sent--trigger");
                    setSendingEmail(false);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    const clearFields = (): void => {
        setSubjectText('');
        setEmailText('');
        setContentText('');
    }

    return(
        <section id="contact" className='contact'>
            <form className='contact__form' onSubmit={sendEmail} ref={form}>
                <input
                    type='email'
                    name="email"
                    placeholder='Your email'
                    className='email__address'
                    disabled={sendingEmail}
                    ref={emailInput}
                    value={emailText}
                    onChange={ e => {
                        setEmailText(e.target.value);
                        emailInput.current!.classList.remove("required")
                    }}
                />
                <input
                    type='text'
                    name="subject"
                    placeholder='Subject'
                    className='email__subject'
                    disabled={sendingEmail}
                    ref={subjectInput}
                    value={subjectText}
                    onChange={ e => {
                        setSubjectText(e.target.value);
                        subjectInput.current!.classList.remove("required")
                    }}
                />

                <textarea
                    className="email__content"
                    name="message"
                    placeholder='Say something nice'
                    disabled={sendingEmail}
                    ref={contentInput}
                    value={contentText}
                    onChange={ e => {
                        setContentText(e.target.value);
                        contentInput.current!.classList.remove("required")
                    }}
                />

                <footer className='contact__footer'>
                    <button className="email__sendBtn" type="submit" disabled={sendingEmail} aria-label="Send Email">
                        <span>Send</span>
                    </button>
                    <ul className="contact__socials">
                        <li>
                            <a href="https://github.com/albertoramos1997" aria-label="Github" className="social" target="_blank" rel="noopener noreferrer" >
                                <GithubIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/alberto-s-ramos/" aria-label="Linkedin" className="social" target="_blank" rel="noopener noreferrer" >
                                <LinkedinIcon/>
                            </a>
                        </li>
                    </ul>
                </footer>
            </form>
            <div className='toast__sent' ref={sentToast}>
                <p>Sent ✅</p>
            </div>
        </section>
    )
}