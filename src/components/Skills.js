import './Skills.css'
import TechContainer from './TechContainer'
import languages from '../assets/languages'
import libraries from '../assets/libraries'
import tools from '../assets/tools'
import { v4 as uuidv4 } from 'uuid';
import resume from '../images/Resume.pdf'

import { motion } from "framer-motion";


function Skills() {

    return (
        <section className="skills" id="skills">
            <div className='container-skills'>

                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='number-section'>02</motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='skills-title title'>
                    My Skills
                </motion.div>

                <div className='tech-container'>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeInOut", duration: .7 }}
                            viewport={{ once: true }}
                            className='tech-container-title'>Languages
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='container-languages'>
                        {languages.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </motion.div>
                </div>

                <div className='tech-container'>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeInOut", duration: .7 }}
                            viewport={{ once: true }}
                            className='tech-container-title'>Libraries</motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='container-languages'>
                        {libraries.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </motion.div>
                </div>

                <div className='tech-container'>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeInOut", duration: .7 }}
                            viewport={{ once: true }} className='tech-container-title'>Tools / Frameworks </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='container-languages'>
                        {tools.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </motion.div>
                </div>

                <a className='resume-link' target='blank' href={resume}>
                    <motion.button
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                        className='button-resume'>Resume <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg></motion.button>
                </a>
            </div>
        </section>
    )
}

export default Skills