import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";


const RatingStar = ({ratingStar}) => {
  console.log(ratingStar);

  const starRating = Array.from({length:5}, (x, index) => {
    const FractionRating = index + 0.5;
    return (
      <span>
        {ratingStar >= index + 1 ? <IoStar /> : ratingStar >= FractionRating ?  <IoStarHalfOutline /> : <IoStarOutline />}
      </span>
    )
  })

  return (
    <>
    <div className='flex items-center gap-x-3'>
       <p  className='flex items-center  text-yellow-400'>{starRating}</p>
      {Math.round(ratingStar) } <p>Review</p>
    </div>
    </>
  )
}

export default RatingStar