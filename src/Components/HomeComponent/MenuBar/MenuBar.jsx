// import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import Flex from '../../CommonComponents/Flex'
import Search from '../../CommonComponents/Search'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";


const  MenuBar = () => {

  const [singUp, setSingUp] = useState(false);
  const [showCategory, setShowCategory] =useState(false); 

  const HandleClick = () => {
    setSingUp(!singUp)
  }


  // side showCategory function
  const HandleShowCategory = () => {
    setShowCategory(!showCategory)
  }


  // hide Menubar
  const hideMenu = () => {
    setShowCategory(false)
  } 



  return (
    <>   
        <div className='py-10 bg-bg_Secondary_color'>
            <div className='container'>
               <Flex className='items-center justify-between'>
                <Flex className={'items-center gap-[10px] '}>
                   <div onClick={HandleShowCategory}><HiMenuAlt2 className='cursor-pointer text-2xl' /></div>
                  <p className='font-normal text-sm text-[#C4C4C4] hidden md:block hover:text-black '>
                    Shop by Category
                  </p>
                  {/* Category MenuBar */}
                  <div className={`w-[300px] h-[300px] mt-[350px]  bg-slate-800 z-10 absolute duration-300 text-white text-center ${showCategory === true ? 'md:left-[170px] left-0' : 'left-[-100%]'}`}>
                    <ul className=' divide-y divide-[#ffffff07] '>
                      <li  className='hover:bg-slate-900 py-3'>Accesories</li>
                      <li  className='hover:bg-slate-900 py-3'><a href="#">Furniture</a></li>
                      <li  className='hover:bg-slate-900 py-3'><a href="#">Electronics</a></li>
                      <li  className='hover:bg-slate-900 py-3'><a href="#">Clothes</a></li>
                      <li  className='hover:bg-slate-900 py-3'><a href="#">Bags</a></li>
                      <li  className='hover:bg-slate-900 py-3'><a href="#">Home appliances</a></li>
                    </ul>
                  </div>

                  </Flex>  

                  <div>
                    <Search placeholder='Search Products' className='font-normal text-sm '  />
                 </div>

                 <div>
                    <Flex className='gap-4 items-center md:gap-10 mt-[-116px] md:mt-0'> 
                      <div className='flex gap-1 cursor-pointer ' onClick={HandleClick}>
                       <div className='flex items-center justify-center'>
                       <FaUser className={`${singUp ? 'text-orange-300' : null}`} />
                          {singUp === true ? <MdOutlineArrowDropUp className='text-[25px]' /> : <MdOutlineArrowDropDown className='text-[25px]' />}
                       </div>
                       {/* singUp overlay */}
                        {singUp && (

                        <div className='sm:w-[200px] w-full  left-0 sm:left-[1448px] z-10 mt-8 absolute bg-slate-800 text-center text-white'>
                          <ul className=' divide-y divide-[#ffffff0c]'>
                            <li className=' py-4 hover:bg-slate-300 hover:text-black'><a href="#">My Account</a></li>
                            <li className=' py-4 hover:bg-slate-300'><a href="#">Log Out</a></li>
                          </ul>
                        </div>
                        )}
                      </div>
                        <div>
                          <FaShoppingCart className='w-5 cursor-pointer' />

                         {/* <div  className='w-[360px] h-[300px] bg-slate-600 absolute top-0 '>
                            <div>
                              <img src="" alt="" />
                            </div>
                         </div> */}
                        </div>
                   </Flex>
                 </div>
              </Flex>

            </div>
        </div>
    </>
  )
}

export default MenuBar