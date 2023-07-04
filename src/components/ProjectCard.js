import { v4 as uuidv4 } from 'uuid';
import './ProjectCard.css'

function ProjectCard({ image, title, description, note }) {
    const cardImgStyle = {
        backgroundImage: `url(${image})`
    }

    return (
        <div className='project-card'>
            <div className='card-img' style={cardImgStyle}></div>
            <div className='card-info'>
                <h2>{title}</h2>
                <p>{description}</p>
                {note && 
                <small className='note'>{note}</small>
                }
                <div className='link-container'>
                    <button className='card-btn'>Live</button>
                    <button className='card-btn'>Code</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;