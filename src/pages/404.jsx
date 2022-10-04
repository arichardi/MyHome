import React from 'react'
import HeaderApp from '../components/HeaderApp'
import { container, SVGSmall, SVGMedium, SVGBig, errorText, threeLines, linesContainer  } from '../styles/error404.module.css'
import { ErrorBG, ErrorSmall, ErrorMedium, Errorlines } from '../SVG'

export default function Error404() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp />
        </nav>
        <section  className={errorText}>
            <div className={threeLines}>
                <h1>Error 404</h1>
                <div className={linesContainer}>
                    <Errorlines />
                </div>
            </div>
            <p>Eu não sei o que você está procurando, mas acredito que está navegando por mares incertos, ou eu simplesmente não estou entregando o que deveria, o que as vezes acontece também.<br/>De uma olhada no menu acima e talvez você encontre o link que está procurando</p>
        </section>
        <section>
          <div>
            <div className={SVGSmall}>
                <ErrorSmall />
            </div>

            <div className={SVGMedium}>
                <ErrorMedium />
            </div>

            <div className={SVGBig}>
                <ErrorBG />
            </div>

          </div>
        </section>
    </div>
  )
}
