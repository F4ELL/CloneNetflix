import React from 'react'
import './Header.css'
import Logo from '../assets/images/netflixlogo.png'
import Icon from '../assets/images/iconnetflix.png'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}> 
            <div className='header--logo'>
                <a href="#">
                    <img src={Logo} alt='Logo Netflix' />
                </a>
            </div>
            <div className='header--user'>
                <a href='#'>
                    <img src={Icon} alt='Usuário' />
                </a>
            </div>
        </header>
    )
}