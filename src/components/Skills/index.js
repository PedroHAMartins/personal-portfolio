import React, { useEffect, useRef, useState } from 'react';
import '../../style/components/_skills.sass';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const Skills = () => {
    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true
    });

    const [refSubtitle, inViewSubtitle] = useInView({
        triggerOnce: true
    });

    const [inViewSkills, setInViewSkills] = useState({
        HTML: false,
        CSS: false,
        JavaScript: false,
        React: false,
        Sass: false,
        C: false,
        CPP: false,
        Dart: false,
        Flutter: false,
        Java: false,
        Lua: false,
        MySQL: false,
        NodeJS: false,
        Photoshop: false,
        Vegas: false
    });

    const typeAnimationRefs = {
        HTML: useRef(),
        CSS: useRef(),
        JavaScript: useRef(),
        React: useRef(),
        Sass: useRef(),
        C: useRef(),
        CPP: useRef(),
        Dart: useRef(),
        Flutter: useRef(),
        Java: useRef(),
        Lua: useRef(),
        MySQL: useRef(),
        NodeJS: useRef(),
        Photoshop: useRef(),
        Vegas: useRef()
    };

    useEffect(() => {
        if (inViewTitle) {
            setInViewSkills((prevState) => ({
                ...prevState,
                Main: true
            }));
        }
    }, [inViewTitle]);

    useEffect(() => {
        if (inViewSubtitle) {
            const timeout = setTimeout(() => {
            setInViewSkills((prevState) => ({
                ...prevState,
                HTML: true,
                CSS: true,
                JavaScript: true,
                React: true,
                Sass: true,
                C: true,
                CPP: true,
                Dart: true,
                Flutter: true,
                Java: true,
                Lua: true,
                MySQL: true,
                NodeJS: true,
                Photoshop: true,
                Vegas: true
            }));
            }, 1000);
        return () => clearTimeout(timeout);
        }
    }, [inViewSubtitle]);
    const renderTypeAnimationOrText = (label, inView) => {
        if (inView) {
            return (
            <TypeAnimation
                sequence={[label]}
                repeat={0}
                wrapper="p"
                cursor={false}
                speed={300}
                ref={typeAnimationRefs[label]}
            />
        );
        } else {
            return null;
        }
    };
    return (
        <section className="skills section" id="skills_id">
        <h1 className={`section__title ${inViewTitle ? 'section__title__fade-in' : ''}`} ref={refTitle}>
            Skills
        </h1>
        <div className="skills__container">
            <div className="skills__container__left">
                <p className={`skills__container__left__text ${inViewSubtitle ? 'skills__container__left__text__underline' : ''}`} ref={refSubtitle}>
                    Main skills
                </p>
                <div className="skills__container__left__skillsbox">
                    <div className="skill__box">
                        <img src="/images/skills/html.svg" alt="HTML" />
                        {renderTypeAnimationOrText('HTML', inViewSkills.HTML)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/css.svg" alt="CSS" />
                        {renderTypeAnimationOrText('CSS', inViewSkills.CSS)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/javascript.svg" alt="JavaScript" />
                        {renderTypeAnimationOrText('JavaScript', inViewSkills.JavaScript)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/react.svg" alt="React" />
                        {renderTypeAnimationOrText('React', inViewSkills.React)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/sass.svg" alt="Sass" />
                        {renderTypeAnimationOrText('Sass', inViewSkills.Sass)}
                    </div>
                </div>                
            </div>
            <div className="skills__container__right">
                <p className={`skills__container__right__text ${inViewSubtitle ? 'skills__container__right__text__underline' : ''}`} ref={refSubtitle}>
                    Also
                </p>
                <div className="skills__container__left__skillsbox">
                    <div className="skill__box">
                        <img src="/images/skills/c.svg" alt="C" />
                        {renderTypeAnimationOrText('C', inViewSkills.C)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/cpp.svg" alt="CPP" />
                        {renderTypeAnimationOrText('CPP', inViewSkills.CPP)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/dart.svg" alt="Dart" />
                        {renderTypeAnimationOrText('Dart', inViewSkills.Dart)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/flutter.svg" alt="Flutter" />
                        {renderTypeAnimationOrText('Flutter', inViewSkills.Flutter)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/java.svg" alt="Java" />
                        {renderTypeAnimationOrText('Java', inViewSkills.Java)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/lua.svg" alt="Lua" />
                        {renderTypeAnimationOrText('Lua', inViewSkills.Lua)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/mysql.svg" alt="MySQL" />
                        {renderTypeAnimationOrText('MySQL', inViewSkills.MySQL)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/nodejs.svg" alt="NodeJS" />
                        {renderTypeAnimationOrText('NodeJS', inViewSkills.NodeJS)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/photoshop.svg" alt="Photoshop" />
                        {renderTypeAnimationOrText('Photoshop', inViewSkills.Photoshop)}
                    </div>
                    <div className="skill__box">
                        <img src="/images/skills/vegas.svg" alt="Vegas" />
                        {renderTypeAnimationOrText('Sony Vegas', inViewSkills.Vegas)}
                    </div>
                </div>     
            </div>
        </div>
        </section>
    );
    };

export default Skills;