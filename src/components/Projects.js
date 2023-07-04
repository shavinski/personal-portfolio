import './Projects.css'

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className='projects-container'>
                <div className='projects-title title'>
                    My Work
                </div>

                <div className='project-card'>
                    <div className='card-img project-one'></div>
                    <div className='card-info'>
                        <h2>Warbler</h2>
                        <p>A twitter clone which allows users to login, make posts, and follow other users! </p>
                        <div className='link-container'>
                            <button className='card-btn'>Live</button>
                            <button className='card-btn'>Code</button>
                        </div>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='card-img project-two'></div>
                    <div className='card-info'>
                        <h2>Jobly</h2>
                        <p>A job searching app where users can login, search
                            for companies, and search for open jobs from
                            these companies!</p>
                        <div className='link-container'>
                            <button className='card-btn'>Live</button>
                            <button className='card-btn'>Code</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects