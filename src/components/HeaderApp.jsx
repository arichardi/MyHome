import React from 'react'
import InternalLinks from './InternalLinks'
import { container } from '../styles/HeaderApp.module.css'

export default function HeaderApp() {
    return (
        <header className={ container }>
            <h5>Andre Richardi</h5>
            <InternalLinks />
        </header>
    )
}
