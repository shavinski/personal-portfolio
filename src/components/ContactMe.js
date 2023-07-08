import Form from './Form';
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard';
import { contactInfo } from '../assets/socials';
import { v4 as uuidv4 } from 'uuid';

function ContactMe() {
    return (
        <section className="contact" id="contact">
            <div className='number-section'>04</div>
            <div className='connect-title title'>Contact Me</div>
            <div className='container-contact'>
                <div className='container-contact-info'>
                    {contactInfo.map((info) => (
                        <ContactInfoCard key={uuidv4()} info={info} />
                    ))}
                </div>

                <div className='container-form'>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;