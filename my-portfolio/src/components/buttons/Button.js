import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button({ title, internalLink, externalLInk, type }) {
    return (
        <div>
            {internalLink && <Link className="link" to={internalLink}>
                <button className={`cp button ${type}`}>{title}</button>
            </Link>}
            {externalLInk && <a href={externalLInk} target="_blank" rel="noreferrer">
                <button className={`cp button ${type}`}>{title}</button>
            </a>}
        </div>
    )
}

export default Button
