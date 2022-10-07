import React from 'react'
import HeaderApp from '../components/HeaderApp'
import { containerMain, redDot, blackSectionTop, blackSectionBottom, whiteSection,lastName, SVGContainerTop, SVGContainerDown, CTA, line, CTABlack, linewhite, containerLinks, colorblocks } from '../styles/main.module.css'
import { StaticImage } from "gatsby-plugin-image";
import ExternalLinks from '../components/ExternalLinks'
import ColorBlocks from '../components/ColorBlock'

export default function index() {
    return (
        <div className={containerMain}>
            <nav>
                <HeaderApp 
                page='index'
                hamburguerColor='#EBEBEB'
                />
            </nav>
            <div className={blackSectionTop}>
                <div >
                    <StaticImage src='../images/main.svg' alt="graphic complement" className={SVGContainerTop} />
                </div>
            </div>
            <section className={whiteSection}>
                <div className={colorblocks}>
                    <ColorBlocks />
                </div>
                <div>
                    <h1>{`Olá, sou`}</h1>
                    <h1>{`André`}</h1>
                    <div className={lastName}>
                        <h1>{`Richardi`}</h1>
                            <div className={redDot}/>
                </div>
            </div>
                <div className={containerLinks}>
                    <ExternalLinks />
                </div>
                <div className={CTA}>
                    <div className={line}/>
                    <p>Parte designer, parte desenvolvedor e parte antropólogo, sempre procurando conexões e novos modos de pensar</p>
                </div>
            </section>
            <div className={blackSectionBottom}>
                <div>
                    <StaticImage src='../images/main.svg' alt="graphic complement" className={SVGContainerDown} />
                </div>
                <div className={CTABlack}>
                    <div className={linewhite}/>
                    <p>Parte designer, parte desenvolvedor e parte antropólogo, sempre procurando conexões e novos modos de pensar</p>
                </div>
            </div>
        </div>
    )
}
