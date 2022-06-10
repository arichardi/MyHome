import React from 'react'
import { container, redDot } from '../styles/InternalLinks.module.css'

export default function InternalLinks() {
    return (
        <div className={container}>
            <p>Sobre</p>
            <p>Artigos</p>
            <p>Projetos</p>
            <p>Contato</p>
            <div className={redDot}/>
        </div>
    )
}
