import React from 'react'
import { container, home} from '../styles/InternalLinks.module.css'
import {Link} from 'gatsby'

export default function InternalLinks() {
    return (
        <div className={container}>
            <Link to={'/about'} className={home}>Sobre</Link>
            <Link to={'/articles'} className={home}>Artigos</Link>
            <Link to={'/projects'} className={home}>Projetos</Link>
            <Link to={'/contact'} className={home}>Contato</Link>
        </div>
    )
}
