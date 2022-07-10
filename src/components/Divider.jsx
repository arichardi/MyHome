import React from 'react'

export default function Divider({small}) {

    return (
        <div style={
            small ? { width: '100%', height:1, backgroundColor: '#b8b8b8'} : { width: '100%', height:3, backgroundColor: 'var(--blue)'}
        } />
    )
}
