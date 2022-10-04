import React, {useState} from 'react'
import InternalLinks from './InternalLinks'
import InternalLinksHome from './InternalLinksHome'
import HamburgerLinks from './HamburgerLinks'
import HamburguerSVG from '../SVG/hamburguer'
import { container, linksContainer, desktopNav, mobilepNav, hamburguerButton, containerHome } from '../styles/HeaderApp.module.css'

export default function HeaderApp({page='secondary' , selector, hamburguerColor = "#1B1B1B"}) {

    const [openLinks, setOpenLinks] = useState(false)

    return (
        <header className={ page === 'secondary' ? container : containerHome }>
            <h5>Andre Richardi</h5>
            <div className={linksContainer}>
                <div className={desktopNav}>
                    { page === 'secondary' ? 
                        <InternalLinks selector={selector}/> :
                        <InternalLinksHome />
                }
                </div>
                <div className={mobilepNav}>
                    <div className={hamburguerButton} onClick={() => setOpenLinks(!openLinks)} onKeyDown={() => setOpenLinks(!openLinks)} role='button' tabIndex={0}>
                        <HamburguerSVG 
                            color={hamburguerColor}
                        />
                    </div>
                    { openLinks && 
                        <HamburgerLinks />
                    }
                </div>
            </div>
        </header>
    )
}
