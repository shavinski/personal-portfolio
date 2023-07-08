import './Footer.css'
import { socials } from '../assets/socials';
import SocialLogo from './SocialLogo';
import ContactInfoCard from './ContactInfoCard';
import { contactInfo } from '../assets/socials';
import { v4 as uuidv4 } from 'uuid';

function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="container-footer">
                <div>
                    <p className='footer-name'>Jakob Shavinski ©2023</p>
                    <p className='footer-title'>Fullstack Engineer</p>
                </div>
                <div className='container-socials'>
                    {socials.map((s) => (
                        <SocialLogo key={uuidv4()} social={s} />
                    ))}
                </div>
                <div className='container-contact-info'>
                    {contactInfo.map((info) => (
                        <ContactInfoCard key={uuidv4()} info={info} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer;