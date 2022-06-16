import React from 'react'
import { container, line, myimage} from '../styles/contact.module.css'
import HeaderApp from '../components/HeaderApp'
import ExternalLinks from '../components/ExternalLinks'
import ContactGraph from '../SVG/ContactGraph'

export default function contact() {



    return (
        <div className={container}>
            <HeaderApp />
            <h1>Contato</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vu lputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className={line}/>
            <ExternalLinks />
            <div className={myimage}>
                <ContactGraph />
            </div>
        </div>
    )
}
