import React from "react";
import { 
  container,
  whiteSection,
  blackSection,
  graph,
  whiteLine,
  CTA,
  linksContainer,
  miniRedDot,
  redDot,
  apresentation,
  redBox,
  blueBox,
  darkBox,
  socialLinksContainer,
} from '../styles/home.module.css';
import HomeGSVG from '../SVG/homeSVG'
import Cross from '../SVG/cross'
import InternalLinksHome from '../components/InternalLinksHome'
import ExternalLinks from '../components/ExternalLinks'






export default function Home() {
  return (
    <div className={container}>
      <div className={whiteSection}>
        <div>
          <div className={redBox}/>
          <Cross />
          <div className={blueBox}/>
          <div className={darkBox}/>
        </div>
        <div className={apresentation}>
          <h1>Olá, sou André Richardi</h1>
          <div className={redDot}/>
        </div>
        <div className={socialLinksContainer}>
           <ExternalLinks />
        </div>
      </div>
      <div className={blackSection}>
        <div className={graph}>
          <HomeGSVG />
        </div>
        <div className={CTA}>
          <div className={whiteLine}/>
          <p>Parte designer, parte desenvolvedor e parte antropólogo, sempre procurando conexões e novos modos de pensar</p>
        </div>
        <div className={linksContainer}>
          <InternalLinksHome />
          <div className={miniRedDot}/>
        </div>
      </div>
    </div>
  )
}
