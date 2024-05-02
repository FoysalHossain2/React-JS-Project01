import React from 'react'
import ProductRightTop from '../CommonComponents/ShopRightItem/ProductRightTop'
import ShopeRightBottom from '../CommonComponents/ShopRightItem/ShopeRightBottom'

const ShopRight = ({className}) => {
  return (
    <>
      <div className={className}>
        <ProductRightTop />
        <ShopeRightBottom />
      </div>
    </>
  )
}

export default ShopRight