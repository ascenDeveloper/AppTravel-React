import React from 'react'
import '../../App.js'
import Cards from '../Cards.jsx'
import Footer from '../Footer.jsx'
import HeroSection from '../HeroSection.jsx'

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home