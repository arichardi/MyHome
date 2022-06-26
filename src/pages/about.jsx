import React from 'react'
import HeaderApp from '../components/HeaderApp'
import {container, about, others, block, line, content, breath} from '../styles/about.module.css'

export default function index() {
    return (
        <div className={container}>
            <HeaderApp />
            <div className={about}>
                <div>
                    <h1>Sobre mim</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className={block}/>
            </div>
            <div className={others}>
                <h2>O que eu estou fazendo:</h2>
                <div className={line}/>
                <div className={content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className={block}/>
                </div>
            </div>
            <div className={others}>
                <h2>O que eu ando jogando, lendo, ouvindo:</h2>
                <div className={line}/>
                <div className={content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className={block}/>
                </div>
            </div>
            <div className={breath}/>
        </div>

    )
}
