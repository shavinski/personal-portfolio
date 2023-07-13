import './AboutMe.css'
import EngineerCard from './EngineerCard';
import jobs from '../assets/jobs';
import resume from '../images/Resume.pdf'
import { v4 as uuidv4 } from 'uuid';

import { motion } from "framer-motion";


function AboutMe() {

    return (
        <section className='aboutme' id='aboutme'>
            <div
                className='container-aboutme'>

                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='number-section'>01</motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='aboutme-title title'>
                    About Me
                </motion.h2>

                <div className='container-about-info'>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                    >
                        My current goal as an engineer is to always be learning
                        and expanding my skill set. Whether this involves
                        learning new technologies or expanding my knowledge
                        on the inner workings of the tech I use day to day; I am
                        always happy absorbing new information.
                        While I am not coding though I do love to spend time
                        with my family and friends. Typical activities that
                        I enjoy partaking in are going to the gym, playing basketball,
                        golfing, fishing (freshwater and ocean) and hopefully
                        starting Muay Thai soon!
                    </motion.p>
                </div>


                <div className='container-about-knowledge'>
                    {jobs.map((job) => (
                        <EngineerCard
                            key={uuidv4()}
                            job={job.job}
                            svg={job.svg} />
                    ))}
                </div>

                <a className='resume-link' target='blank' href={resume}>
                    <motion.button
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='button-resume slide-right'><p>Resume</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg></motion.button>
                </a>
            </div>
        </section>
    )
}

export default AboutMe