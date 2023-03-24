import '../../style/components/_menu.sass'

const Menu = () => {

    const menuItems = [
        'Main page',
        'About me',
        'Skills',
        'Projects'
    ]

    return (
        <nav className='nav'>
            <div className='menu'>
                <a href="" className='menu__item'>{menuItems}</a>
            </div>
        </nav>
    )
}

export default Menu