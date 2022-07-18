import React from 'react'
import HeaderApp from '../components/HeaderApp'
import { container, CTAContainer } from '../styles/projects.module.css'

export default function projects() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp />
        </nav>
        <section className={CTAContainer}>

        </section>
    </div>
  )
}
