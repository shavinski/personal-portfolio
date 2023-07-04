import './AboutMe.css'
import EngineerCard from './EngineerCard';
import jobs from '../assets/tech/jobs';
import { v4 as uuidv4 } from 'uuid';


function AboutMe() {
    return (
        <section className='aboutme' id='aboutme'>
            <div className='container-aboutme'>
                <div className='aboutme-title title'>
                    <h1>About Me</h1>
                </div>

                <div className='container-about-info'>
                    <p>Pinterest ramps affogato subway tile drinking vinegar hammock pariatur poke deserunt meditation pickled man braid. Locavore craft beer ugh cold-pressed PBR&B pop-up. Vibecession cray adaptogen aliquip live-edge in. Sustainable photo booth poutine, celiac bruh single-origin coffee aute shaman cillum plaid live-edge. </p>
                    <p>I'm baby dolore in sus vape activated charcoal officia PBR&B vegan veniam schlitz cred try-hard. Hell of knausgaard minim, lo-fi synth vinyl mustache. Drinking vinegar dolore knausgaard quis, VHS viral scenester culpa semiotics. Portland incididunt elit aute, activated charcoal laborum blackbird spyplane gentrify in waistcoat brunch cray gorpcore non slow-carb. Occaecat leggings try-hard readymade vaporware trust fund.</p>
                </div>


                <div className='container-about-knowledge'>
                    {jobs.map((job) => (
                        <EngineerCard
                            key={uuidv4()}
                            job={job.job}
                            svg={job.svg} />
                    ))}
                </div>


            </div>
        </section>
    )
}

export default AboutMe