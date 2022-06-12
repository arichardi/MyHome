import React from 'react'
import { Instagram, Behance, Github, LinkedIn} from '../SVG'
import '../styles/ExternalLinks.module.css'

export default function ExternalLinks() {
    return (
        <div>
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
