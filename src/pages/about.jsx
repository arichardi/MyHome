import React from 'react'
import HeaderApp from '../components/HeaderApp'
import Divider from '../components/Divider'
import { container } from '../styles/about.module.css'

export default function about() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp />
        </nav>
        <section>
            <div>
                <h1>Sobre mim</h1>
                <p></p>
            </div>
        </section>
        <section>
            <h2>O que eu estou fazendo :</h2>
            <Divider />
            <p>Um monte de coisa escrita</p>
        </section>
        <section>
            <h2>Meus favoritos :</h2>
            <Divider />
            <p>Um monte de coisa escrita</p>
        </section>
    </div>
  )
}
