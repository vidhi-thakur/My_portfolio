import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="header -flex-row">
            <div className="header-brand">vidhi thakur</div>
            <nav className="navigation-bar">
                <span className="nav-links">Home</span>
                <span className="nav-links">Projects</span>
                <span className="nav-links">Blogs</span>
                <span className="nav-links">About</span>
            </nav>
        </header>
    )
}

export default Header
