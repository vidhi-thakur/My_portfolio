import React from 'react'
import './Home.css'
import homePageImage from '../images/home-page.svg'

function Home() {
    return (
        <div className="home">
            <section className="home-section1 -flex-row">
                <img className="home-page-image" src={homePageImage} alt="home page" />
                <section className="home-page-info">
                    <h1 className="fs-4 mb-1">Hi there! My name is <span className="text-primary">Vidhi</span>.</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </section>
            </section>
        </div>
    )
}

export default Home
