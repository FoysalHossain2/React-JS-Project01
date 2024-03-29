import React from 'react'
import Arrivals1 from '../../assets/NewArrivals/Arrivals1.png'

const Products = ({colorVariant, bize}) => {
  return (
    <>

      <div className='w-[24%] '>
        <div className='pb-6 relative'>
          <div className='absolute top-5 ml-5'>
            {bize}
          </div>
          <img src={Arrivals1} alt="" />
        </div>

        <div className='flex items-center justify-between'>
          <h4>Basic Crew Neck Tee</h4>
          <p>$44.00</p>
        </div>
        {colorVariant && <span>Black</span>} 
      </div>
    </>
  )
}

export default Products