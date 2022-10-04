import React from 'react'
import { container, content, about, articles, projects, contact} from '../styles/InternalLinks.module.css'
import { Link } from 'gatsby'

export default function InternalLinks({selector = content}) {
    console.log(selector)
    return (
        <div className={container} style={{width: 300}}>
            <Link to={'/about'} className={selector === "about" ? about : content }>Sobre</Link>
            <Link to={'/articles'} className={selector === "articles" ? articles : content }>Artigos</Link>
{/*             <Link to={'/projects'} className={selector === "projects" ? projects : content }  >Projetos</Link> */}
            <Link to={'/contact'} className={selector === "contact" ? contact : content }  >Contato</Link>
        </div>
    )
}
