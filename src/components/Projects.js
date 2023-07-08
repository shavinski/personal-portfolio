import './Projects.css'
import ProjectCard from './ProjectCard';
import projects from '../assets/projects'
import { v4 as uuidv4 } from 'uuid';

import { motion } from "framer-motion";

function Projects() {
    return (
        <section className="projects" id="projects">

            <div className='projects-container'>

                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: .7, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }} className='number-section'>03</motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .7 }}
                    viewport={{ once: true }}
                    className='projects-title title'>
                    My Work
                </motion.div>

                {projects.map((project) => (
                    <ProjectCard
                        key={uuidv4()}
                        project={project} />
                ))}

            </div>
        </section>
    )
}

export default Projects