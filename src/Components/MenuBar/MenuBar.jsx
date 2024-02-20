import React from 'react'
import Flex from '../CommonComponents/Flex'
import Search from '../CommonComponents/Search'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const  MenuBar = () => {
  return (
    <>
        <div className='py-10 bg-bg_Secondary_color'>
            <div className='container'>
               <Flex className='items-center justify-between'>
                <Flex className={'items-center gap-[10px] '}>
                  <HiMenuAlt2 className='cursor-pointer text-2xl' />
                  <p className='font-normal text-sm text-[#C4C4C4]'>
                    Shop by Category
                  </p>
                  </Flex>  

                  <div>
                    <Search placeholder='Search Products' className='font-normal text-sm '  />
                 </div>

                 <div>
                    <Flex className='gap-10'> 
                      <div className='flex gap-1 cursor-pointer'>
                        <FaUser />
                        <FaCaretDown />
                      </div>
                        <FaShoppingCart className='w-5 cursor-pointer' />
                   </Flex>
                 </div>
              </Flex>

            </div>
        </div>
    </>
  )
}

export default MenuBar