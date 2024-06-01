import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import ProductDetails from '../CommonComponents/ProductDetails/ProductDetails';
import { Review } from '../CommonComponents/ProductDetails/Review';

const ProductInfo = ({ProductStock, onAddToCart}) => {
    


    const colors = [
        {id: 1, colorsCode: '#F0F0F0'},
        {id: 2, colorsCode: '#FF8686'},
        {id: 3, colorsCode: '#7ED321'},
        {id: 4, colorsCode: '#B6B6B6'},
        {id: 5, colorsCode: '#15CBA5'},
    ]


  return (
    <>
    <div className='w-[700px]'>

        <div className='flex items-center gap-x-[80px] mt-6'>
            <h3 className='font-bold font-DM_Sans text-base text-main_text_color'>
                COLOR:
            </h3>
            <div className='flex items-center gap-x-3'>
                {colors?.map((color,id) => (
                    <div className={` w-5 h-5 rounded-xl s `} style={{backgroundColor:color.colorsCode}} key={id}></div>
                ))}
            </div>
        </div>

        {/* SIZE */}
        <div className='flex items-center gap-x-[100px] mt-[30px]'>
            <h6 className='font-bold font-DM_Sans text-base text-main_text_color '>
                SIZE:
            </h6>
            <select name="" id=""  className=' border-2 border-[#F0F0F0] py-1 px-8 cursor-pointer'>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
            </select>
        </div>
        {/* SIZE */}

        {/* QUANTITY */}
        <div className='flex items-center gap-x-[50px] mt-[30px]'>
            <h6 className='font-bold font-DM_Sans text-base text-main_text_color '>
                QUANTITY:
            </h6>
            <div className='flex items-center gap-x-6  border-2 border-[#F0F0F0] py-1 px-3'>
                <button > 
                    <FaMinus /> 
                </button>
                <p>1</p>
                <button>
                    <FaPlus/> 
                </button>
            </div>
        </div>
        {/* QUANTITY */}

        <div className='flex items-center mt-[55px] gap-x-12'>
            <h5 className='font-bold font-DM_Sans text-base text-main_text_color '>
                STATUS:
            </h5>
            <p className='font-DM_Sans text-main_text_color'>{ProductStock} In stock</p>
        </div>

        <div className='flex items-center mt-[50px] gap-x-4'>

            <button className='border-2 border-[#F0F0F0] py-4 px-[46px] hover:bg-[#262626] hover:text-white'>
                Add to Wish List
            </button>

            <button className='border-2 border-[#F0F0F0] py-4 px-16 hover:bg-[#262626] hover:text-white'  onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>

        <hr className='mt-10' />

        {/* productDetails */}
        <ProductDetails title={"FEATURES & DETAILS"} />
        <ProductDetails title={"SHIPPING & RETURNS"} />
        {/* productDetails */}
       
    </div>
    
    <div>
        {/* Review part */}
        <Review />
        {/* Review part */}
    </div>
    </>
  )
}

export default ProductInfo