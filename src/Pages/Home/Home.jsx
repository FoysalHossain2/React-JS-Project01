import React from 'react'
import Header from '../../Components/HomeComponent/Header/Header'
import MenuBar from '../../Components/HomeComponent/MenuBar/MenuBar'
import Banner from '../../Components/HomeComponent/Banner/Banner'
import Shipping from '../../Components/HomeComponent/Shipping/Shipping'
import SaleInfo from '../../Components/HomeComponent/SaleInfo/SaleInfo'


const Home = () => {
  return (
    <>
      <Header/>
      <MenuBar/>
      <Banner/>
      <Shipping/>
      <SaleInfo/>
    </>
  )
}

export default Home