import React from 'react'
import { IoStar } from "react-icons/io5";

export const Review = () => {
  return (
    <>
    <div className='mt-[123px]'>
        <div className='flex items-center gap-x-16'>
            <h2 className='font-DM_Sans text-[20px] text-main_text_color'>
                Description
            </h2>
            <p className='font-DM_Sans text-[20px] text-main_text_color font-bold'>
                Reviews (1)
            </p>
        </div>

        <div className='mt-[42px]'>
            <p className='font-DM_Sans text-sm text-main_text_color'>
                1 review for Product
            </p>
        </div>

        <div className='flex items-center justify-between mb-[14px]'>
            <div className='flex items-center gap-x-9'>
                <p>John Ford</p>
                <div className='flex items-center gap-x-2 text-yellow-400'>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </div>
            </div>
            <p>6 months ago</p>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <hr className='mt-[15px]' />

    <div>
        <p className='font-DM_Sans text-[20px] text-main_text_color font-bold pb-[53px]'>
            Add a Review
        </p>

       <div className='flex flex-col gap-y-2'>
        <label htmlFor="" className='font-DM_Sans text-[20px] text-main_text_color font-bold'>Name</label>
            <input 
                type="name" 
                id='name' 
                name='name' 
                placeholder='Your name here'
                className='border w-[700px]'
            />
       </div>

       <div className='flex flex-col gap-y-2 mt-[23px]'>
        <label htmlFor="" className='font-DM_Sans text-[20px] text-main_text_color font-bold'>Email</label>
            <input 
                type="name" 
                id='name' 
                name='name' 
                placeholder='Your email here'
                className='border w-[700px]'
            />
       </div>

       <div className='flex flex-col gap-y-2 mt-[23px]'>
        <label htmlFor="" className='font-DM_Sans text-[20px] text-main_text_color font-bold'>Review</label>
           <textarea 
                name="review" 
                id="review"
                className=' border w-[700px] '
                placeholder='Your review here'
           >

           </textarea>
       </div>
    </div>
    </>
  )
}
