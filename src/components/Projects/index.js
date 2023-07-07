import '../../style/components/_projects.sass'
import Slider from '../../utils/slider.js'
import { useInView } from 'react-intersection-observer';


const Projects = () => {

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const personalProjects = [
        {name: "7 days challenge", 
        image: "/images/projects/7_days_challenge.png", 
        alt:"7 day challenge project image", 
        description: "Project made in a 7 day challenge where it was used CSS and HTML, each day was used to make a part of the website",
        link: "https://pedrohamartins.github.io/7DaysCodeHTMLCSS/"},
        {name: "Alura+",
        image: "/images/projects/alura_plus.png",
        alt: "Alura Plus project image",
        description:"Project made during of the studies with HTML & CSS courses made by Alura, where the entire project is designed in a single page and it is responsive.",
        link: "https://pedrohamartins.github.io/AluraPlus/"},
        {name: "Portfolio (Old)",
        image: "/images/projects/portfolio.png",
        alt: "Old portfolio project image",
        description:"Old personal portfolio made with CSS and HTML where I trained my skills with them, also used to train flexbox and responsive web designs",
        link: "https://pedrohamartins.github.io"
        },
        {name: "AluraSPA",
        image: "/images/projects/alura_spa.png",
        alt: "AluraSPA project image",
        description:"Project made with the use of Sass and SCSS while studying the use of preprocessors",
        link: "https://pedrohamartins.github.io/AluraSPA/"
        },
        {name: "Organo",
        image: "/images/projects/organo.png",
        alt: "Organo project image",
        description:"First project made with the use of React while studying it, also has the use of Sass",
        link: "https://organo-beta-indol.vercel.app"
        }       
    ]

    return (
        <section className='projects section' id='projects_id'>
            <h1 className={`section__title ${inView ? 'section__title__fade-in' : ''}`} ref={ref}>Projects</h1>
            <div className='container'>
                <Slider personalProjects={personalProjects}/>   
            </div>
        </section>
    )
}

export default Projects