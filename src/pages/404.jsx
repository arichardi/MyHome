import React from 'react'
import HeaderApp from '../components/HeaderApp'
import { container } from '../styles/error404.module.css'

export default function Error404() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp />
        </nav>
        <section>
            <h1>Error 404</h1>
            <p>Eu não sei o que você está procurando, mas acredito que está navegando por mares incertos, ou eu simplesmente não estou entregando o que deveria, o que as vezes acontece também <br/>De uma olhada no menu acima e talvez você encontre o link que está procurando</p>
        </section>
    </div>
  )
}
