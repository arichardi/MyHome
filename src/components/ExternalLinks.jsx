import React from 'react'
import { Instagram, Behance, Github, LinkedIn, Email} from '../SVG'
import { containerLinks } from '../styles/ExternalLinks.module.css'

export default function ExternalLinks() {
    return (
        <div style={{ marginTop: 16 }} className={containerLinks} >
          <a href="mailto: a.richardi@gmail.com"> 
            <Email />
          </a>
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
    )
}
