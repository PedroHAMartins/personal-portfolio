import '../../style/components/_about.sass';
import { useInView } from 'react-intersection-observer';

const About = () => {

    const [ ref, inView ] = useInView({
        triggerOnce: true
    })

    return(
        <section className='about section' id='about_id'>
            <h1 className={`section__title ${inView ? 'section__title__fade-in' : ''}`} ref={ref}>About me</h1>
            <div className='about__container'>
                <img src="/images/about-me_picture.jpg" alt="Pedro Martins about me section" className={`about__container__image ${inView ? 'about__container__image__fade-in' : ''}`}/>
                <div className={`about__container__text ${inView ? 'about__container__text__fade-in' : ''}`} ref={ref}>
                    <p>I'm a Information Systems bachelor's degree graduate at Universidade Estadual de Campinas, since childhood I have always been interested in how things works, especially in technology.</p>
                    <p>I thoroughly enjoy the process of translating creative designs into functional and user-friendly web interfaces. The ability to bring ideas to life through code and provide seamless experiences for users is something that energizes and motivates me. With a solid foundation in <strong className={`${inView ? 'about__container__text__strong__fade-in' : ''}`} ref={ref}>HTML, CSS, and JavaScript</strong>, I am eager to delve deeper into modern front-end frameworks and preprocessors like <strong className={`${inView ? 'about__container__text__strong__fade-in' : ''}`} ref={ref}>React and Sass</strong> to create even more engaging and dynamic web applications.</p>
                    <p>Currently, my focus is on front-end development but I'm always open to new challenges around the entire development area.</p>
                </div>
            </div>
            
        </section>
    )
}

export default About