import './Projects.css'
import ProjectCard from './ProjectCard';
import projects from '../assets/tech/projects';
import { v4 as uuidv4 } from 'uuid';

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className='projects-container'>
                <div className='projects-title title'>
                    My Work
                </div>

                {projects.map((project) => (
                    <ProjectCard
                        key={uuidv4()}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        note={project.note} />
                ))}

            </div>
        </section>
    )
}

export default Projects