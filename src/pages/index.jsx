import React from "react";
import { 
  container,
  blackBlock,
  lineImage,
} from '../styles/home.module.css';
//import HomeSVG from '../SVG/homeSVG'
import Line from '../SVG/Line'



export default function Home() {
  return (
    <div className={container}>
      <section className={blackBlock}>
        <div>
          <div className={lineImage}>
            <Line />
          </div>
          <p>Parte designer, parte desenvolvedor and parte sociólogo, sempre procurando por conexões e novos pontos de vista</p>
        </div>

      </section>
    </div>
  )
}
