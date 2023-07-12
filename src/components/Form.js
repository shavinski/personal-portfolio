import { useState } from 'react';
import './Form.css'

import { motion } from "framer-motion";

function Form() {
    const [errorMessages, setErrorMessages] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(currData => ({
            ...currData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const errors = {}

        // Email regex 
        const regex = /^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\].,;:\s@\"]+)*)|(".+"))@(([^<>()[\].,;:\s@\"]+\.)+[^<>()[\].,;:\s@\"]{2,})$/i;

        if (formData.name === '') {
            errors.name = 'Please input your name!'
        } else {
            errors.name = ''
        }

        if (formData.email === '' || regex.test(formData.email) === false) {
            errors.email = 'Please input a valid email!'
        } else {
            errors.email = ''
        }

        if (formData.message.length <= 9) {
            errors.message = 'Please write a message longer than 10 characters!'
        } else {
            errors.message = ''
        }

        setErrorMessages({ ...errors })

        if (errors.length > 0) return

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    }

    return (
        <form name='contact' method='POST' data-netlify='true'>
            {/* Netlify form */}
            <input type='hidden' name='form-name' value='contact'></input>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: .7 }}
                viewport={{ once: true }}
                className='form-field'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input
                    className='form-input'
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    required ></input>
                <span className='error-form'>{errorMessages.name}</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: .7 }}
                viewport={{ once: true }}
                htmlFor="email"
                className='form-field'>
                <label className='form-label'>Email</label>
                <input
                    className='form-input'
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your email'
                    required ></input>
                <span className='error-form'>{errorMessages.email}</span>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: .7 }}
                viewport={{ once: true }}
                htmlFor="message" className='form-field'>
                <label className='form-label'>Message</label>
                <textarea
                    className='form-input'
                    rows={5}
                    id='message'
                    name='message'
                    type='text'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='What would you like to say?'
                    required ></textarea>
                <span className='error-form'>{errorMessages.message}</span>

            </motion.div>
            <motion.button
                className="form-button slide-right"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: .7 }}
                viewport={{ once: true }}
                type='click'
                onClick={handleSubmit}>
                Send
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                    <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                    <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
                </svg>
            </motion.button>
        </form>
    )
}

export default Form