import React from 'react'
import ShopCatagories from '../CommonComponents/ShopLeftItems/ShopCatagories'
import { Catagories } from '../../../Data/Data'

const ShopLeft = ({className}) => {

  return (
    <>
      <div className={className}>
        <ShopCatagories Catagories={Catagories ? Catagories : []}
          shopLeftTitle={'Shop by Category'} 
         />
      </div>
    </>
  )
}

export default ShopLeft