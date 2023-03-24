import '../../style/components/_header.sass'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Header = () => {

    const socialMedia = [
        {name: "github", icon: <FaGithub />, link: "https://github.com/PedroHAMartins", text: "GitHub"},
        {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/opedrohamartins/", text: "LinkedIn"},
        {name: "instagram", icon : <FaInstagram />, link: "https://www.instagram.com/opedrohamartins/", text: "Instagram"},
        {name: "facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/pedrohenriquem3", text: "Facebook"}
    ]

    return (
        <header className='header section'>
            <div className='header__text'>
                <h1>Hi, my name is <strong>Pedro!</strong></h1>
                <p>I'm a <strong>front-end developer</strong> with a lot of passion working with front-end development and designing websites.</p>
            </div>
            <img src="/images/profile_picture.jpg" alt="Pedro Martins" className='header__image'/>

            <div className='socialmedia-icons'>
                {socialMedia.map((media) => (
                    <a href={media.link} rel='noopener noreferrer' target="_blank" className='socialmedia-icons__card'>
                        {media.icon}<p>{media.text}</p>
                    </a>
                ))}
            </div>

            {/* <div className='socialmedia-icons'>
                <div className='socialmedia-icons__card'>
                    <img src="/images/github.svg" alt="GitHub" />
                    <a href="/PedroHAMartins">/PedroHAMartins</a>
                </div>
                <div className='socialmedia-icons__card'>
                    <img src="/images/linkedin.svg" alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/opedrohamartins/">/opedrohamartins</a>
                </div>
                <div className='socialmedia-icons__card'>
                    <img src="/images/instagram.svg" alt="Instagram" />
                    <a href="https://www.instagram.com/opedrohamartins/">@opedrohamartins</a>
                </div>
                <div className='socialmedia-icons__card'>
                    <img src="/images/facebook.svg" alt="Facebook" />
                    <a href="https://www.facebook.com/pedrohenriquem3/">/pedrohenriquem3</a>
                </div>
            </div> */}
        </header>
    )
}

export default Header