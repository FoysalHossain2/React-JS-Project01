import React from 'react'
import Header from '../../Components/HomeComponent/Header/Header'
import MenuBar from '../../Components/HomeComponent/MenuBar/MenuBar'
import Banner from '../../Components/HomeComponent/Banner/Banner'
import Shipping from '../../Components/HomeComponent/Shipping/Shipping'
import SaleInfo from '../../Components/HomeComponent/SaleInfo/SaleInfo'
import NewArrivals from '../../Components/HomeComponent/NewArrivals/NewArrivals'


const Home = () => {
  return (
    <>
      <Header/>
      <MenuBar/>
      <Banner/>
      <Shipping/>
      <SaleInfo/>
      <NewArrivals/>
    </>
  )
}

export default Home