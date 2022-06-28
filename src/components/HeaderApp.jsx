import React, {useState} from 'react'
import InternalLinks from './InternalLinks'
import HamburgerLinks from './HamburgerLinks'
import HamburguerSVG from '../SVG/hamburguer'
import { container, linksContainer, desktopNav, mobilepNav, hamburguerButton } from '../styles/HeaderApp.module.css'

export default function HeaderApp() {

    const [openLinks, setOpenLinks] = useState(false)

    return (
        <header className={ container }>
            <h5>Andre Richardi</h5>
            <div className={linksContainer}>
                <div className={desktopNav}>
                    <InternalLinks />
                </div>
                <div className={mobilepNav}>
                    <div className={hamburguerButton} onClick={() => setOpenLinks(!openLinks)}>
                        <HamburguerSVG />
                    </div>
                    { openLinks && 
                        <HamburgerLinks />
                    }
                </div>
            </div>
        </header>
    )
}
