import './SocialLogo.css'

function SocialLogo({social}) {
    return (
        <div className='social-logo'>
            <a href={social.link} aria-label='Link for jakobs socials' target='blank'>
                {social.svg}
            </a>
        </div>
    )
}

export default SocialLogo