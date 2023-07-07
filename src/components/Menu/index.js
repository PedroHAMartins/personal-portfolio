import '../../style/components/_menu.sass';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuItems = [
        {section: 'Main page', link: '#header_id'},
        {section: 'About me', link: '#about_id'},
        {section: 'Skills', link: '#skills_id'},
        {section: 'Projects', link: '#projects_id'},
        {section: 'Contact', link: '#contact_id'}
    ]

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='nav' onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <GiHamburgerMenu className='nav__icon'/>
            <div className={`nav__menu${showMenu ? ' nav__menu__active' : ''}`}>
                {menuItems.map((item) => (
                    <a href={item.link} className='nav__menu__item'>{item.section}</a>
                ))}
            </div>
        </nav>
    )
}

export default Menu;