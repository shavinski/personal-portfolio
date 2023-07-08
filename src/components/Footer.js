import './Footer.css'
import {socials} from '../assets/socials';
import SocialLogo from './SocialLogo';
import { v4 as uuidv4 } from 'uuid';

function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="container-footer">
                <div>
                    <p className='footer-name'>Jakob Shavinski ©2023</p>
                    <p className='footer-title'>Fullstack Engineer</p>
                </div>
                <div className='footer-menu-links'>
                    <ul>
                        <li className="footer-item"><a href="#home" className="footer-link">Home</a></li>
                        <li className="footer-item"><a href="#aboutme" className="footer-link">About Me</a></li>
                        <li className="footer-item"><a href="#projects" className="footer-link">Projects</a></li>
                        <li className="footer-item"><a href="#contact" className="footer-link">Contact</a></li>
                    </ul>
                </div>
                <div className='container-socials'>
                    {socials.map((s) => (
                        <SocialLogo key={uuidv4()} social={s} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer;