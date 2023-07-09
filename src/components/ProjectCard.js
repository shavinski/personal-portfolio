import './ProjectCard.css'
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  
    const cardImgStyle = {
        backgroundImage: `url(${project.image})`
    }

    return (
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1,  y: 0  }}
        transition={{ ease: "easeInOut", duration: .7 }}
        viewport={{ once: true }}
            className='project-card'>
            <div className='card-img' style={cardImgStyle}></div>
            <div className='card-info'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.note &&
                    <small className='note'>{project.note}</small>
                }
                <div className='link-container'>
                    <a className='web-link' href={project.website} aria-label='Link for project website' target='blank'><button className='card-btn'>Live</button></a>
                    <a className='web-link' href={project.github} aria-label='Link for project github' target='blank'><button className='card-btn'>Code</button></a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;