import React from "react"
import { whitePart, blackPart, container, redDot, especialDot } from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={container}>
    <section className={whitePart}>
      <div>
        <h1>{`Olá, eu sou`}</h1>
        <h1>{`Andre`}</h1>
        <div className={especialDot}>
          <h1>{`Richardi`}</h1>
          <div className={redDot}></div>
        </div>
      </div>
    </section>
    <section className={blackPart}>
      <p>Parte Designer, parte desenvolvedor e parte antrópologo, sempre procurando por novas formas de me conectar e de pensar</p>
    </section>
    </div>
  )
}
