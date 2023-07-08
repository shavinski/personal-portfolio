import './AboutMe.css'
import EngineerCard from './EngineerCard';
import jobs from '../assets/jobs';
import { v4 as uuidv4 } from 'uuid';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AboutMe() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden")
        }
    }, [control, inView])

    const titleNumVariant = {
        visible: { opacity: .7, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
    }

    const titleVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
    }

    const paragraphVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
    }

    const cardVariant = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: 0 },
    }

    return (
        <section className='aboutme' id='aboutme'>
            <div className='container-aboutme'>

                <motion.div
                    ref={ref}
                    variants={titleNumVariant}
                    initial="hidden"
                    animate={control}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    className='number-section'>01</motion.div>

                <motion.div
                    ref={ref}
                    variants={titleVariant}
                    initial="hidden"
                    animate={control}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    className='aboutme-title title'>
                    <h1>About Me</h1>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={paragraphVariant}
                    initial="hidden"
                    animate={control}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    className='container-about-info'>
                    <p>Pinterest ramps affogato subway tile drinking vinegar hammock pariatur poke deserunt meditation pickled man braid. Locavore craft beer ugh cold-pressed PBR&B pop-up. Vibecession cray adaptogen aliquip live-edge in. Sustainable photo booth poutine, celiac bruh single-origin coffee aute shaman cillum plaid live-edge. </p>
                    <p>I'm baby dolore in sus vape activated charcoal officia PBR&B vegan veniam schlitz cred try-hard. Hell of knausgaard minim, lo-fi synth vinyl mustache. Drinking vinegar dolore knausgaard quis, VHS viral scenester culpa semiotics. Portland incididunt elit aute, activated charcoal laborum blackbird spyplane gentrify in waistcoat brunch cray gorpcore non slow-carb. Occaecat leggings try-hard readymade vaporware trust fund.</p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={cardVariant}
                    initial="hidden"
                    animate={control}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    className='container-about-knowledge'>
                    {jobs.map((job) => (
                        <EngineerCard
                            key={uuidv4()}
                            job={job.job}
                            svg={job.svg} />
                    ))}
                </motion.div>


            </div>
        </section>
    )
}

export default AboutMe