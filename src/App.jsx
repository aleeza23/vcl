import React from 'react'
import { Header } from './features/Header'
import Hero from './features/Hero'
import Virality from './features/Virality'
import Success from './features/Success'
import Work from './features/Work'
import BestWay from './features/BestWay'
import Faq from './features/Faq'
import Footer from './features/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Virality />
      <Success />
      <Work />
      <BestWay />
      <Faq />
      <Footer />
    </div>
  )
}

export default App