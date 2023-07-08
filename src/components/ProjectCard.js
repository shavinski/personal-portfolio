import './ProjectCard.css'

function ProjectCard({ project }) {
    const cardImgStyle = {
        backgroundImage: `url(${project.image})`
    }

    return (
        <div className='project-card'>
            <div className='card-img' style={cardImgStyle}></div>
            <div className='card-info'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.note && 
                <small className='note'>{project.note}</small>
                }
                <div className='link-container'>
                    <a href={project.website} target='blank'><button className='card-btn'>Live</button></a>
                    <a href={project.github} target='blank'><button className='card-btn'>Code</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;