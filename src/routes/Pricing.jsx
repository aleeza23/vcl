import React from 'react'
import { Header } from '../features/Header'
import Faq from '../features/Faq'
import Footer from '../features/Footer'
import PricingHero from '../features/PricingHero'

const Pricing = () => {
    return (
        <div>
            <Header />
            <PricingHero />
            <Faq />
            <Footer />
        </div>
    )
}

export default Pricing