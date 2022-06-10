import React from "react";
import { 
container,
whiteBlock,
redDot,
lastNameLine,
redbox,
whitebox, 
bluebox, 
blackbox,
boxContainer,
linksContainer,
calltoAct,
} from '../styles/home.module.css';
import Cross from "../SVG/cross";
import Instagram from '../SVG/instagram';
import Behance from '../SVG/behance';
import Github from '../SVG/Github';
import LinkedIn from '../SVG/LinkedIn';


export default function Home() {
  return (
    <div className={container}>
      <section className={whiteBlock}>
        <div className={boxContainer}>
          <div className={redbox}/>
          <div className={whitebox}>
            <Cross />
          </div>
          <div className={bluebox}/>
          <div className={blackbox}/>
        </div>

        <div className={calltoAct}>
          <h1>Olá, sou</h1>
          <h1>Andre</h1>
          <div className={lastNameLine}>
            <h1>Richardi</h1>
            <div className={redDot}/>
          </div>
        </div>

        <div className={linksContainer}>
          <a href="https://www.instagram.com/arichardi/?hl=en"> 
            <Instagram />
          </a>
          <a href="https://www.behance.net/arichardi"> 
            <Behance />
          </a>
          <a href="https://github.com/arichardi"> 
            <Github />
          </a>
          <a href="https://br.linkedin.com/in/andr%C3%A9-richardi-62557a57"> 
            <LinkedIn />
          </a>
        </div>
      </section>
    </div>
  )
}