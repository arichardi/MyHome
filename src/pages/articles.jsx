import React from 'react'
import { container, headline,line, tagline } from '../styles/articles.module.css'
import HeaderApp from '../components/HeaderApp'
import ArticleSVG from '../SVG/articles'
import Article from '../components/Article'


export default function articles() {
    return (
        <div className={container}>
                <HeaderApp />
            <div className={headline}>
                <div>
                    <h1>Meus Artigos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <ArticleSVG />
            </div>

            <div>
                <div className={tagline}>
                <h2>Mais recentes:</h2>
                <p>data</p>
                </div>
                <div className={line}/>
                <Article />
                <Article />
                <Article />

            </div>
        </div>
    )
}
