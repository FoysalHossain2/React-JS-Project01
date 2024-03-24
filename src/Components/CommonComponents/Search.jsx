import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Flex from '../CommonComponents/Flex'

const  Search = ({placeholder , className}) => {
  return (
    <>
        <Flex className='items-center bg-white px-4 shadow-sm Search__Products'>
            <input type="text" placeholder={placeholder} className={` max-w-[600px]  py-4  pl-1 ${className}`}  />
            <IoSearchOutline className='cursor-pointer' />
        </Flex>
    </>
  )
}

export default Search