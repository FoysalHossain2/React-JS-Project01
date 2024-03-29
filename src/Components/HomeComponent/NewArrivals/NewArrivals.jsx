import React from 'react'
import Products from '../../CommonComponents/Products'
import Button from '../../CommonComponents/Button';

const NewArrivals = () => {
  return (
    <>
      <div>
        <div className="container">
            <h2 className='font-bold text-[39px] mt-32 pb-12'>
                New Arrivals
            </h2>

            <Products
             colorVariant={true} 
             bize={<Button title={'10%'} className='flex flex-col items-start bg-main_text_color py-[9px] px-[33px] text-white' />}
             />
        </div>
      </div>
    </>
  )
}

export default NewArrivals