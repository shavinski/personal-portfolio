import './EngineerCard.css'
import jobs from '../assets/tech/jobs';


function EngineerCard( {job, svg} ) {
    return (
        <div className='container-front-end'>
            {svg}
            <p>{job}</p>
        </div>
    )
}

export default EngineerCard;