import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Flex from '../CommonComponents/Flex'

const  Search = ({placeholder , className}) => {
  return (
    <>
        <Flex className='items-center bg-white px-4 shadow-sm Search__Products max-w-[600px] '>
            <input type="text" placeholder={placeholder} className={`focus:outline-none md:w-[600px] w-auto py-4  ${className}`}  />
            <IoSearchOutline className='cursor-pointer' />
        </Flex>
    </>
  )
}

export default Search

