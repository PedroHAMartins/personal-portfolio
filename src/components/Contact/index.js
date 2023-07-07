import '../../style/components/_contact.sass'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function ContactForm() {

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const [state, handleSubmit] = useForm("mbjvjlvl");
    if (state.succeeded) {
        return (
            <div className='contact__form__success'>
                <AiOutlineCheckCircle className='contact__form__success__icon'/>
                <p>Thanks for reaching out. I'll get back to you shortly!</p>
            </div>
        )
    }
    return (
        <form onSubmit={handleSubmit} className={`contact__form ${inView ? 'contact__form__fade-in' : ''}`} ref={ref}>
            <input type="text" name="name" placeholder="Your name" className='contact__form__input'/>
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <input type="email" name="email" placeholder="Your email" className='contact__form__input'/>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea name="message" placeholder="Your message" className='contact__form__input contact__form__input-message'/>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className='contact__form__button'>Submit</button>
        </form>
    );
}

const Contact = () => {



    const [ref, inView] = useInView({
        triggerOnce: true
    })

    return (
        <section className='contact section' id='contact_id'>
            <h1 className={`section__title ${inView ? 'section__title__fade-in' : ''}`} ref={ref}>Contact</h1>
            <div className='contact__container'>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;