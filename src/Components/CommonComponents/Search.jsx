import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Flex from '../CommonComponents/Flex'

const  Search = ({placeholder , className, type, OnSearch}) => {
  return (
    <>
        <Flex className='items-center bg-white px-4 shadow-sm Search__Products'>
            <input
              onChange={OnSearch} 
              type={type} 
              placeholder={placeholder} 
              className={`focus:outline-none  searchBar sm:w-[200px] py-4  ${className}`}  
              />
            <IoSearchOutline className='cursor-pointer' />
        </Flex>
    </>
  )
}

export default Search

