import './AboutMe.css'

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
                    <div className='container-front-end'>
                        <svg className='front-end-eng-icon' xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                        </svg>
                        <p>Front-end Engineer</p>
                    </div>

                    <div className='container-back-end'>
                        <svg className='back-end-eng-icon' xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-database-fill" viewBox="0 0 16 16">
                            <path className='back-end-eng-icon' d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z" />
                            <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
                            <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
                            <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
                        </svg>
                        <p>Back-end Engineer</p>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default AboutMe