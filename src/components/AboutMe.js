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
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                    >Pinterest ramps affogato subway tile drinking vinegar hammock pariatur poke deserunt meditation pickled man braid. Locavore craft beer ugh cold-pressed PBR&B pop-up. Vibecession cray adaptogen aliquip live-edge in. Sustainable photo booth poutine, celiac bruh single-origin coffee aute shaman cillum plaid live-edge. </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: .7 }}
                        viewport={{ once: true }}
                    >I'm baby dolore in sus vape activated charcoal officia PBR&B vegan veniam schlitz cred try-hard. Hell of knausgaard minim, lo-fi synth vinyl mustache. Drinking vinegar dolore knausgaard quis, VHS viral scenester culpa semiotics. Portland incididunt elit aute, activated charcoal laborum blackbird spyplane gentrify in waistcoat brunch cray gorpcore non slow-carb. Occaecat leggings try-hard readymade vaporware trust fund.</motion.p>
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