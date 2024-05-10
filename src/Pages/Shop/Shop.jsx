import React from 'react'
import BreadCrump from '../../Components/CommonComponents/BreadCrumb/BreadCrumb'
import ShopLeft from '../../Components/ShopComponent/ShopLeft'
import ShopRight from '../../Components/ShopComponent/ShopRight'

const Shop = () => {
  return (
    <>
     <div>
        <div className="container px-1 md:px-0">
            <h1 className='font-bold text-[39px] text-main_text_color pt-[124px]'>
              Products
            </h1>
            <BreadCrump/>

        <div className='flex flex-col md:flex-row py-20'>
          <ShopLeft className='md:w-[25%]  w-full' />
          <ShopRight className='md:w-[75%] w-[50%] ml-7' />
        </div>

        </div>
     </div>
    </>
  )
}

export default Shop