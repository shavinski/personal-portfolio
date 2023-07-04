import './Skills.css'
import TechContainer from './TechContainer'
import languages from '../assets/tech/languages'
import libraries from '../assets/tech/libraries'
import tools from '../assets/tech/tools'
import { v4 as uuidv4 } from 'uuid';

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className='container-skills'>
                <div className='skills-title title'>
                    My Skills
                </div>

                <div className='tech-container'>
                    <div>
                        <h1>Languages</h1>
                    </div>
                    <div className='languages'>
                        {languages.map((tech) => (
                            <div>
                                <TechContainer key={uuidv4()} name={tech.name} svg={tech.svg} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className='libraries'>
                    <h1>Libraries</h1>
                    {libraries.map((tech) => (
                        <div>
                            <TechContainer name={tech.name} svg={tech.svg} />
                        </div>
                    ))}
                </div>

                <div className='tools'>
                    <h1>Tools / Frameworks </h1>
                    {tools.map((tech) => (
                        <TechContainer name={tech.name} svg={tech.svg} />
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default Skills