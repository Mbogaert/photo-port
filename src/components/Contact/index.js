import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    // JSX
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={handleChange} name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" onChange={handleChange} name="email" defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" row="5" onChange={handleChange} defaultValue={message} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;