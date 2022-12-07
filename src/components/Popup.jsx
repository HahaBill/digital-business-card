import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './styling/Popup.css'

export default function Popup(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_djh2pvi', 'template_uya6k4g', form.current, 'PmS_gCazfNaZQkOxp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        props.triggerBtn(false)
    };

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h3>Contact me </h3>
                <button className='close-btn' onClick={() => props.triggerBtn(false)}>Close</button>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}