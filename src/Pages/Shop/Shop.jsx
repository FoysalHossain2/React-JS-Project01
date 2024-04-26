import React from 'react'
import BreadCrump from '../../Components/CommonComponents/BreadCrumb/BreadCrumb'
import ShopLeft from '../../Components/ShopComponent/ShopLeft'
import ShopRight from '../../Components/ShopComponent/ShopRight'

const Shop = () => {
  return (
    <>
     <div>
        <div className="container">
            <h1 className='font-bold text-[39px] text-main_text_color pt-[124px]'>
              Products
            </h1>
            <BreadCrump/>

        <div className='flex py-20'>
          <ShopLeft className='w-[25%]  ' />
          <ShopRight className='w-[75%]  bg-pink-300' />
        </div>

        </div>
     </div>
    </>
  )
}

export default Shop