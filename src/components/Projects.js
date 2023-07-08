import './Projects.css'
import ProjectCard from './ProjectCard';
import projects from '../assets/projects'
import { v4 as uuidv4 } from 'uuid';

function Projects() {
    return (
        <section className="projects" id="projects">

            <div className='projects-container'>

                <div className='number-section'>03</div>

                <div className='projects-title title'>
                    My Work
                </div>

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