import { useState } from 'react';
import './Form.css'

function Form() {
    const startingData = {
        name: '',
        email: '',
        message: '',
    }
    const [formData, setFormData] = useState(startingData)

    function handleChange(evt) {
        console.log(formData);
        const { name, value } = evt.target;
        setFormData(currData => ({
            ...currData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form>
            <div className='form-field'>
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
            </div>
            <div htmlFor="email" className='form-field'>
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
            </div>
            <div htmlFor="message" className='form-field'>
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
            </div>
            <button
                type='click'
                onClick={handleSubmit}>
                Send <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg></button>
        </form>
    )
}

export default Form