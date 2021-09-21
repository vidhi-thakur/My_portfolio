import React from 'react'
import ProjectCard from '../components/cards/ProjectCard'
import "./Projects.css"

function Projects() {
    return (
        <div className="projects -flex-col">
            <h1 className="text-center">My Projects</h1>
            <p>"The evaluator, which determines the meaning of expressions in a programming language, is just another program."</p>
            <p><small>-Hal Abelson and Gerald Sussman, Structure and Interpretation of Computer Programs</small></p>
            <section>
                <ProjectCard title="Pigeon Go app" about="chat application with Google authentication where one can send and receive messages in real-time, and add a chat room to start a new conversation/discussion." liveDemoLink="https://pigeon-go.web.app/" sourceCode="https://github.com/vidhi-thakur/Pigeon_Go" projectImage="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png" />
            </section>
        </div>
    )
}

export default Projects
