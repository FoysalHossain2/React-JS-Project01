import React from 'react'
import Header from '../../Components/Header/Header'
import MenuBar from '../../Components/MenuBar/MenuBar'
import Banner from '../../Components/Banner/Banner'
import Shipping from '../../Components/Shipping/Shipping'
import SaleInfo from '../../Components/SaleInfo/SaleInfo'


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