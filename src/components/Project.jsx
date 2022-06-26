import React from 'react'
import {block, projectUnit, unit} from '../styles/projects.module.css'

export default function Project() {
    return (
        <div className={projectUnit}>
            <div className={block}/>
            <div className={unit}>
                <h3>Testes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </div>
    )
}
