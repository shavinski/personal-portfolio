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
                        <h1 className='tech-container-title'>Languages</h1>
                    </div>

                    <div className='container-languages'>
                        {languages.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </div>
                </div>

                <div className='tech-container'>
                    <div>
                        <h1 className='tech-container-title'>Libraries</h1>
                    </div>

                    <div className='container-languages'>
                        {libraries.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </div>
                </div>

                <div className='tech-container'>
                    <div>
                        <h1 className='tech-container-title'>Tools / Frameworks </h1>
                    </div>
                    <div className='container-languages'>
                        {tools.map((tech) => (
                            <TechContainer
                                key={uuidv4()}
                                name={tech.name}
                                svg={tech.svg} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills