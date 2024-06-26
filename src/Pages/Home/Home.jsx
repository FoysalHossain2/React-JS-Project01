import React from 'react'
import Banner from '../../Components/HomeComponent/Banner/Banner'
import Shipping from '../../Components/HomeComponent/Shipping/Shipping'
import SaleInfo from '../../Components/HomeComponent/SaleInfo/SaleInfo'
import NewArrivals from '../../Components/HomeComponent/NewArrivals/NewArrivals'
import {NewArrivalsData, BestsellersProduct} from '../../../Data/Data'
import PhoneOfTheYear from '../../Components/HomeComponent/PhoneOfTheYear/PhoneOfTheYear'


const Home = () => {
  return (
    <>
      <Banner/>
      <Shipping/>
      <SaleInfo/>
      <NewArrivals headingTitle="New Arrivals" ProductData={NewArrivalsData} />
      <NewArrivals headingTitle="Our Bestseller" ProductData={BestsellersProduct} />
      <PhoneOfTheYear/>
      <NewArrivals headingTitle="Special Offers" ProductData={BestsellersProduct} />
    </>
  )
}

export default Home;