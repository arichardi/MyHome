import React from 'react'

export default function hamburguer({color }) {
    return (
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H28V4H0V0Z" fill={color}/>
        <path d="M0 7H28V11H0V7Z" fill={color}/>
        <path d="M0 14H28V18H0V14Z" fill={color}/>
        </svg>

    )
}

