import './socials.scss';
import facebook from '/logos/socials/facebook.svg'
import instagram from '/logos/socials/instagram.svg'
import youtube from '/logos/socials/youtube.svg'
import email from '/logos/socials/email.svg'

const Socials = () => {
    return (
        <>
            <a target='_blank' href='https://www.instagram.com/umokuk/'><img src={instagram} alt='instagram'/></a>
            <a target='_blank' href='https://www.facebook.com/umokuk'><img src={facebook} alt='facebook'/></a>
            <a target='_blank' href='https://www.youtube.com/@umok3117'><img src={youtube} alt='youtube'/></a>
            <a target='_blank' href='mailto:umokuk@gmail.com'><img src={email} alt='email'/></a>
        </>
    )
}

export default Socials;