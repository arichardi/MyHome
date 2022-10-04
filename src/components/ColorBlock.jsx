import React from 'react'
import { blockContainer, redbox, whitebox, bluebox, darkbox } from '../styles/colorBlocks.module.css'

export default function ColorBlocks(){
    return (
        <div className={blockContainer}>
            <div className={redbox}/>
            <div className={whitebox}/>
            <div className={bluebox}/>
            <div className={darkbox}/>
        </div>
    )
}