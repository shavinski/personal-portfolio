import './AboutMe.css'
import EngineerCard from './EngineerCard';
import jobs from '../assets/jobs';
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

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='aboutme-title title'>
                    <h1>About Me</h1>
                </motion.div>

                <div className='container-about-info'>
                    {/* <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}>
                            My coding journey began in May of 2022 right after I graduated
                            from Pepperdine University. I first started learning 
                            how to code by utilizing a free online source called 
                            "The Odin Project" and quickly fell in love. Several
                            months after starting I wanted to accelerate my learning 
                            and decided to start interviewing 
                            for coding bootcamps. Fast forward to today and I have 
                            now completed the full stack program from Rithm School
                            and could not be more eager to start my career as a
                            software engineer!
                        </motion.p> */}
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
            </div>
        </section>
    )
}

export default AboutMe