import React from  'react'
import Logo from '../../imagem/Logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'
function Menu() {
    return (
        <nav className="Menu">
            <a href='/'>
            <img src={Logo} alt="Aluraflix logo" className="Logo" />
            </a>

            <ButtonLink href="/" className="ButtonLink">Novo Vídeo </ButtonLink>
        </nav>
    )
}

export default Menu