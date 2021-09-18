import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header -flex-row">
            <div>
                <Link className="header-brand" to="/">vidhi thakur</Link>
            </div>
            <nav className="navigation-bar">
                <span>
                    <Link className="nav-links" to="/">Home</Link>
                </span>
                <span>
                    <Link className="nav-links" to="/projects">Projects</Link>
                </span>
                <span>
                    <Link className="nav-links" to="/blogs">Blogs</Link>
                </span>
                <span>
                    <Link className="nav-links" to="/about">About</Link>
                </span>
            </nav>
        </header>
    )
}

export default Header
