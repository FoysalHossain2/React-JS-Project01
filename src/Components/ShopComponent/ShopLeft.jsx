import React from 'react'
import ShopCatagories from '../CommonComponents/ShopLeftItems/ShopCatagories'
import {CatagoriesData, ShopColorData, ShopByBrandData, ShopByPriceData } from '../../../Data/Data' 
import ShopByColor from '../CommonComponents/ShopLeftItems/ShopByColor'

const ShopLeft = ({className}) => {

  return (
    <>
      <div className={className}>
        <ShopCatagories CatagoriesData={CatagoriesData ? CatagoriesData : []}
          shopLeftTitle={'Shop by Category'} 
         />

         <ShopByColor ShopColorData={ShopColorData ? ShopColorData : []} 
          shopLeftColorTitle={'Shop by Color'}
          color={true}
         />

         <ShopByColor ShopColorData={ShopByBrandData ? ShopByBrandData : []} 
          shopLeftColorTitle={'Shop by Brand'}
          color={false}
         />

         <ShopByColor ShopColorData={ShopByPriceData ? ShopByPriceData : []} 
          shopLeftColorTitle={'Shop by Brand'}
          color={false}
         />
      </div>
    </>
  )
}

export default ShopLeft