import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

const ProductDetails = ({title}) => {

    const [DropDown, setDropDown] = useState(false);

    // handle function 
    const HandleDropDown = () => {
        setDropDown(!DropDown)
    }


  return (
    <>
      <div className='mt-[55px]'>
                <div className='flex items-center justify-between cursor-pointer' onClick={HandleDropDown}>
                    <p className='font-bold font-DM_Sans text-base text-main_text_color '>
                       {title ? title : 'Title is messing'}
                    </p>
                    <div className='transition-all duration-700'> {DropDown ? <FaMinus  /> : <FaPlus /> } </div>
                </div>
            {DropDown && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis explicabo laudantium repudiandae dolor delectus harum, commodi doloremque odit, eum culpa sapiente nulla. Dolorem dicta, repudiandae numquam maxime sint sapiente.  </p>
            )}
        </div>
    </>
  )
}

export default ProductDetails