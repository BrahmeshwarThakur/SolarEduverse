import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'

import Work from '../components/Work'

function Product() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PRODUCTS." text ="Some of Our Products"/>
      
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Product