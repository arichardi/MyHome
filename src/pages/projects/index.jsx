import React from 'react'
import { container, myProjectsHeading, projectContainer, line, imageContainer } from '../../styles/projects.module.css'
import HeaderApp from '../../components/HeaderApp'
import ProjectsGraph from '../../SVG/projectsGraph'
import Project from '../../components/Project'

export default function index() {
    return (
        <div className={container}>
            <HeaderApp />
            <div className={myProjectsHeading}>
                <div>
                    <h1>Meus Projetos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque purus. Maecenas accumsan interdum mi quis tempus. Quisque sed fringilla nunc. Nulla vitae hendrerit velit. Phasellus vulputate rhoncus leo, id dapibus quam pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className={imageContainer}>
                    <ProjectsGraph />
                </div>
            </div>

            <div className={projectContainer}>
                <h2>Projetos :</h2>
                <div className={line}/>
                <Project />
            </div>
        </div>
    )
}
