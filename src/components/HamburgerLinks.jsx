import React from 'react'
import { hamburgerContainer, content} from '../styles/InternalLinks.module.css'
import { Link } from 'gatsby'

export default function HamburgerLinks() {
    return (
        <div className={hamburgerContainer}>
            <Link to={'/about'} className={content}> Sobre</Link>
            <Link to={'/articles'} className={content}> Artigos</Link>
{/*             <Link to={'/projects'} className={content}  >Projetos</Link> */}
            <Link to={'/contact'} className={content}  >Contato</Link>
        </div>
    )
}
