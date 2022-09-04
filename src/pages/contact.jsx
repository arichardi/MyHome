import React from 'react'
import Divider from '../components/Divider'
import HeaderApp from '../components/HeaderApp'
import { container, ContainerSVG, containerSection } from '../styles/contact.module.css'
import ExternalLinks from '../components/ExternalLinks'
import { ContactSVG } from '../SVG'


export default function contact() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp selector={"contact"}/>
        </nav>
        <section className={containerSection}>
            <h1>Contato</h1>
            <p>Se você quiser entrar em contato e quiser conversar sobre qualquer questão, seja sobre programação, ou design, ou qualquer outra questão fique a vontade para entrar em contato comigo diretamente em qualquer um desses meios</p>
            <Divider />
            <ExternalLinks />
        </section>
        <div className={ContainerSVG}>
            <ContactSVG />
        </div>
    </div>
  )
}
