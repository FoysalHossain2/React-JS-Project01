import React from 'react'
import Button from './Button'

const Overlay = ({
    className,
     title, 
     discountDetailsFirst, 
     discountDetailsLast,
     discountAmount,
     btnTitle,
     onClickButton
    }) => {
  return (
    <>
       <div className={`absolute ${className} flex flex-col items-start`}>
            <h2 className='font-DM_Sans font-bold md:text-4xl text-xs text-main_text_color md:mb-9 mb-2'>
              {title ? title : 'Phones Sale'}
            </h2>
            <p className='font-DM_Sans opacity-75 text-main_text_color md:mb-[49px] mb-7'>
               {discountDetailsFirst}
               <span className='font-bold text-[#000] md:text-[40px] text-[25px] p-3'>
                {discountAmount}
                </span>
                {discountDetailsLast}
            </p>
            <Button 
              className={'bg-main_text_color md:py-4 md:px-16 py-2 px-4 text-white hover:bg-slate-800 cursor-pointer'}
              title={btnTitle}
              onClickButton={onClickButton}
            />


        </div>
    </>
  )
}

export default Overlay