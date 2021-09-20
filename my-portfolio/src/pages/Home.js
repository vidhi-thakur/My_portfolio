import React from 'react'
import './Home.css'
import homePageImage from '../images/home-page.svg'
import Button from '../components/buttons/Button'
import HomeCard from '../components/cards/HomeCard'

function Home() {
    return (
        <div className="home">
            <section className="home-section1 -flex-row">
                <img className="home-page-image" src={homePageImage} alt="home page" />
                <section className="home-page-info">
                    <h1 className="font mb-1">Hi there! My name is <span className="text-primary">Vidhi</span>.</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Button type="primary" title="About me >" internalLink="/about" />
                </section>
            </section>
            <section className="home-section2 -flex-row">
                <HomeCard title="Projects" internalLink="/projects" buttonType="primary">I like to showcase the projects I have worked on. All of my projects are hosted online on platforms like netlify and firebse. Also, the source code is available online on Github.</HomeCard>
                <HomeCard title="Blogs" internalLink="/blogs" buttonType="secondary">I like to share what I have learnt through blogs and have published some technical blogs.</HomeCard>
            </section>
        </div>
    )
}

export default Home
