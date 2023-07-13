import './ContactInfoCard.css'

function ContactInfoCard({ info }) {
    return (
        <div className='contact-info'>
            {info.svg}
            <div className='sub-container'>
                <h3>{info.title}</h3>
                <h3>{info.info}</h3>
            </div>
        </div>
    )
}

export default ContactInfoCard