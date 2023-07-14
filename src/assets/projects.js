// import jobly-img.webp from '../images'
import jobly from '../images/jobly-img.webp'
import twitter from '../images/twitter-verified-pattern.webp'

const projects = [
    {   
        image: `${jobly}`,
        title: 'Jobly',
        description: 'A job searching app where users can login, search for companies, and search for open jobs!',
        note: 'Note that I am using a free online cloud database so my projects will require 10-30 seconds to load upon start',
        website: "https://shavinski-jobly.surge.sh/",
        github: "https://github.com/shavinski/react-jobly",
    },

    {
        image: `${twitter}`,
        title: 'Warbler',
        description: 'A twitter clone which allows users to login, make posts, and follow other users!',
        note: 'Note that I am using a free online cloud database so my projects will require 10-30 seconds to load upon start',
        website: "https://shavinski-warbler.onrender.com",
        github: "https://github.com/shavinski/flask-warbler",
    }

]

export default projects