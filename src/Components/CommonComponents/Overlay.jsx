import React from 'react'
import Button from './Button'

const Overlay = ({
    className,
     title, 
     discountDetailsFirst, 
     discountDetailsLast,
     discountAmount,
     btnTitle
    }) => {
  return (
    <>
       <div className={`absolute ${className}`}>
            <h2 className='font-DM_Sans font-bold text-4xl text-main_text_color mb-9'>
              {title ? title : 'Phones Sale'}
            </h2>
            <p className='font-DM_Sans opacity-75 text-main_text_color mb-[49px]'>
               {discountDetailsFirst}
               <span className='font-bold text-[#262626] text-[40px] p-3'>
                {discountAmount}
                </span>
                {discountDetailsLast}
            </p>
            <Button 
            className={ 'inline-block bg-main_text_color py-4 px-16 text-white hover:bg-slate-800 cursor-pointer'}
            title={btnTitle}
            />


        </div>
    </>
  )
}

export default Overlay