import '../../style/components/_skills.sass'
import { useInView } from 'react-intersection-observer';

const Skills = () => {

    const [ref, inView] = useInView({
        triggerOnce: true
    })
    return (
        <section className='skills section' id='skills_id'>
            <h1 className={`section__title ${inView ? 'section__title__fade-in' : ''}`} ref={ref}>Skills</h1>
            <div className='skills__container'>
                <div className="skills__container__left">
                    <p className={`skills__container__left__text ${inView ? 'skills__container__left__text__underline' : ''}`} ref={ref}>Main skills</p>
                    <div className='skills__container__left__skillsbox'>
                        <div className='skill__box skills__container__left__skillsbox__html'>
                            <img src="/images/skills/html.svg" alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className='skill__box skills__container__left__skillsbox__css'>
                            <img src="/images/skills/css.svg" alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className='skill__box skills__container__left__skillsbox__javascript'>
                            <img src="/images/skills/javascript.svg" alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div className='skill__box skills__container__left__skillsbox__react'>
                            <img src="/images/skills/react.svg" alt="React" />
                            <p>React</p>
                        </div>
                        <div className='skill__box skills__container__left__skillsbox__sass'>
                            <img src="/images/skills/sass.svg" alt="Sass" />
                            <p>Sass</p>
                        </div>
                    </div>
                </div>
                <div className="skills__container__right">

                </div>
            </div>
        </section>
    )
}

export default Skills