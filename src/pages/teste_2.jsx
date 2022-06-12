import React from "react";
import { 
  container,
  blackBlock,
  backgroundImage,
  fineText,
  links,
} from '../styles/home.module.css';
import HomeSVG from '../SVG/homeSVG'
import Line from '../SVG/Line'
import InternalLink from '../components/InternalLinks'



export default function Home() {
  return (
    <div className={container}>
      <section className={blackBlock}>
        <div className={backgroundImage}>
        <HomeSVG />
        </div>
        <div className={fineText}>
          <Line />
          <p>Parte designer, parte desenvolvedor and parte sociólogo, sempre procurando por conexões e novos pontos de vista</p>
        </div>

        <div className={links}>
          <InternalLink />
        </div>
      </section>
    </div>
  )
}