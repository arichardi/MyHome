import React from 'react'
import {container, tag, bg, lines} from '../styles/notFound.module.css'
import HeaderApp from '../components/HeaderApp'
import { ErrorBG, Errorlines} from '../SVG'

export default function notFound() {
    return (
        <div className={container}>
            <HeaderApp />
            <div className={tag}>
                <h1>Error 404</h1>
                <div className={lines}>
                    <Errorlines />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className={bg}>
                <ErrorBG />
            </div>
        </div>
    )
}
