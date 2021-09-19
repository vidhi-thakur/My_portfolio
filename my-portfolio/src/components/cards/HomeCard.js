import React from 'react'
import Button from '../buttons/Button'
import "./HomeCard.css"

function HomeCard({title, internalLink, buttonType, children}) {
    return (
        <div className="homeCard">
            <h1>{title}</h1>
            <p>{children}</p>
            <Button title={title} internalLink={internalLink} type={buttonType} />
        </div>
    )
}

export default HomeCard
