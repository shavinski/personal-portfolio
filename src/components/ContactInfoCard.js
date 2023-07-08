import './ContactInfoCard.css'

function ContactInfoCard({ info }) {
    return (
        <div className='contact-info'>
            {info.svg}
            <div className='sub-container'>
                <h1>{info.title}</h1>
                <p>{info.info}</p>
            </div>
        </div>
    )
}

export default ContactInfoCard