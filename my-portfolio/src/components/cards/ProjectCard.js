import React from 'react'
import Button from '../buttons/Button'

function ProjectCard({ title, about, liveDemoLink, sourceCode, projectImage }) {
    return (
        <div>
            <section>
                <h3>{title}</h3>
                <p>{about}</p>
                <div>
                    <Button type="primary" externalLInk={liveDemoLink} title="Live demo" />
                    <Button type="secondary" externalLInk={sourceCode} title="Source code" />
                </div>
            </section>
            <img src={projectImage} alt="project-img" />
        </div>
    )
}

export default ProjectCard
