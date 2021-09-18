import React from 'react'
import './Footer.css'
import { ImLinkedin, ImMail } from 'react-icons/im'
import { SiGithub, SiCodesandbox, SiReplDotIt } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/vidhi-thakur-9353271a8" target="_blank" rel="noreferrer">
                <ImLinkedin className="icons" />
            </a>
            <a href="https://github.com/vidhi-thakur" target="_blank" rel="noreferrer">
                <SiGithub className="icons" />
            </a>
            <a href="https://codesandbox.io/dashboard/home" target="_blank" rel="noreferrer">
                <SiCodesandbox className="icons" />
            </a>
            <a href="https://replit.com/@vidhithakur/" target="_blank" rel="noreferrer">
                <SiReplDotIt className="icons" />
            </a>
            <a href="mailto:smmthakur@gmail.com" target="_blank" rel="noreferrer">
                <ImMail className="icons" />
            </a>

        </footer>
    )
}

export default Footer
