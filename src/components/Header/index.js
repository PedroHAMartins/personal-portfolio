import '../../style/components/_header.sass'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Header = () => {

    const socialMedia = [
        {name: "github", icon: <FaGithub />, link: "https://github.com/PedroHAMartins", text: "GitHub", class:"github_id"},
        {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/opedrohamartins/", text: "LinkedIn", class:"linkedin_id"},
        {name: "instagram", icon : <FaInstagram />, link: "https://www.instagram.com/opedrohamartins/", text: "Instagram", class:"instagram_id"},
        {name: "facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/pedrohenriquem3", text: "Facebook", class:"facebook_id"}
    ]

    return (
        <header className='header section' id='header_id'>
            <div className='header__text'>
                <h1>Hi, my name is <strong>Pedro!</strong></h1>
                <p>I'm a <strong>front-end developer</strong> with a lot of passion working with front-end development and designing websites. <b>Let's talk!</b></p>
            </div>
            <img src="/images/profile_picture.jpg" alt="Pedro Martins profile" className='header__image'/>

            <div className='socialmedia-icons'>
                {socialMedia.map((media) => (
                    <a href={media.link} rel='noopener noreferrer' target="_blank" className={`socialmedia-icons__card ${media.class}`}>
                        {media.icon}<p>{media.text}</p>
                    </a>
                ))}
            </div>
        </header>
    )
}

export default Header