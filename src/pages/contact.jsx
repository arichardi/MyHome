import React from 'react'
import { container, line, graphic} from '../styles/contact.module.css'
import HeaderApp from '../components/HeaderApp'
import ExternalLinks from '../components/ExternalLinks'

export default function contact() {
    return (
        <div className={container}>
            <HeaderApp />
            <h1>Contato</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laboriosam vel quas totam, ducimus illum error ratione voluptate modi iste nobis? Similique asperiores consequatur ullam temporibus ea cumque rem repellat!</p>
            <div className={line}></div>
                <ExternalLinks />
            <div className={graphic}>
                <img src="/contactIMG.png" alt="background" />
            </div>
        </div>
    )
}
