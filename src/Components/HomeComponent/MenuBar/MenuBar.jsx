// import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import Arrivals2 from '../../../assets/NewArrivals/Arrivals2.png'
import Flex from '../../CommonComponents/Flex'
import Search from '../../CommonComponents/Search'
import Button from '../../CommonComponents/Button'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { Link } from 'react-router-dom';


const  MenuBar = () => {

  const [singUp, setSingUp] = useState(false);
  const [showCategory, setShowCategory] =useState(false); 
  const [ShoppingCart, setShoppingCart] =useState(false); 
  const MenuRef = useRef()


  const HandleClick = () => {
    setSingUp(!singUp)
    setShoppingCart(false)
    setShowCategory(false)
  }
  
  
  // side showCategory function
  const HandleShowCategory = () => {
    setShowCategory(!showCategory)
    setShoppingCart(false)
    setSingUp(false)
  }

  // HandleShoppingCart function
  const HandleShoppingCart = () => {
    setShoppingCart(!ShoppingCart)
    setShowCategory(false)
    setSingUp(false)
  }


  // useRef functionality
useEffect(() => {
  window.addEventListener('click',(e) => {
    if (!MenuRef.current.contains(e.target)) {
      setShoppingCart(false)
      setShowCategory(false)
      setSingUp(false)
    }
  })

}, [])





  return (
    <>   
        <div className='md:py-10 py-4 bg-bg_Secondary_color max-[775px]:px-0 px-2 ' ref={MenuRef}>
            <div className='container'>
               <Flex className='items-center justify-between'>
                <Flex className={'items-center gap-[10px] '}>
                   <div onClick={HandleShowCategory}><HiMenuAlt2 className='cursor-pointer text-2xl' /></div>
                  <p className='font-normal text-sm text-[#C4C4C4] hidden md:block hover:text-black '>
                    Shop by Category
                  </p>

                  {/*---------- Category MenuBar---------- */}
                    <div className={`w-[300px] h-[300px] mt-[350px]  bg-slate-800 z-10 absolute duration-300 text-white text-center ${showCategory === true ? 'md:left-[170px] left-0' : 'left-[-100%]'}`}>
                      <ul className=' divide-y divide-[#ffffff07] '>
                        <li  className='hover:bg-slate-900 py-3'>
                          <Link to={'Accesories'}>Accesories</Link>
                        </li>
                        <li  className='hover:bg-slate-900 py-3'>
                        <Link to={'Furniture'}>Furniture</Link>
                        </li>
                        <li  className='hover:bg-slate-900 py-3'>
                          <Link to={'Electronics'}>Electronics</Link>
                        </li>
                        <li  className='hover:bg-slate-900 py-3'>
                          <Link to={'Clothes'}>Clothes</Link>
                        </li>
                        <li  className='hover:bg-slate-900 py-3'>
                          <Link to={'Bags'}>Bags</Link>
                        </li>
                        <li  className='hover:bg-slate-900 py-3'>
                          <Link to={'Home appliances'}>Home appliances</Link>
                        </li>
                      </ul>
                    </div>
                    {/*---------- Category MenuBar---------- */}

                  </Flex>  

                  <div>
                    <Search placeholder='Search Products' className='font-normal text-sm '  />
                 </div>

                 <div>
                    <Flex className='gap-4 items-center md:gap-10 mt-[-93px] md:mt-0'> 
                      <div className='flex gap-1 cursor-pointer ' onClick={HandleClick}>
                       <div className='flex items-center justify-center'>
                       <FaUser className={`${singUp ? 'text-orange-300' : null}`} />
                          {singUp === true ? <MdOutlineArrowDropUp className='text-[25px]' /> : <MdOutlineArrowDropDown className='text-[25px]' />}
                       </div>
                       {/* ------------------singUp overlay------------- */}
                        {singUp && (

                        <div className='sm:w-[200px] w-full right-0 md:mr-[250px] z-10 mt-8 absolute bg-slate-800 text-center text-white'>
                          <ul className=' divide-y divide-[#ffffff0c]'>
                            <li className=' py-4 hover:bg-zinc-300 hover:text-black'><a href="#">My Account</a></li>
                            <li className=' py-4 hover:bg-zinc-300 hover:text-black'><a href="#">Log Out</a></li>
                          </ul>
                        </div>
                        )}
                      </div>
                      {/* -----------------singUp overlay------------- */}


                        <div>
                         <div onClick={HandleShoppingCart}>
                            <FaShoppingCart className='w-5 cursor-pointer' />
                         </div>

                          {/* -----------------ShoppingCart overlay------------- */}
                          {ShoppingCart && (

                          <div  className='w-[360px] h-[260px] absolute mt-[30px] z-10 ml-[-320px] '>
                            <Flex className={'justify-between items-center bg-[#767676cc] py-5 px-5'}>
                              <div className='w-[80px] h-[80px]'>
                                <img src={Arrivals2} alt={Arrivals2} />
                              </div>
                              <div className='-ml-8'>
                                <p className='font-DM_Sans pb-3 text-main_text_color font-bold'>
                                  Black Smart Watch
                                </p>
                                <span className='text-main_text_color font-bold'>
                                  $44.00
                                </span>
                              </div>
                              <button  className='flex items-center justify-center w-7 h-7 hover:bg-zinc-400 rounded-full'>
                                  <FaXmark  />
                              </button>
                            </Flex>
                            
                            <div className='py-5 px-5 bg-[#ffffffe0] flex items-start flex-col'>
                                <p className='pb-4 font-DM_Sans text-main_text_color'>
                                  Subtotal: <span className='font-bold'>$44.00</span>
                                </p>

                                <div className={'flex gap-x-10'}>
                                  <Button
                                    title={'View Cart'}
                                    className={'py-3 px-8 border-2 border-[#262626] hover:text-white hover:bg-main_text_color cursor-pointer'}
                                  />
                                  <Button
                                    title={'Checkout'}
                                    className={'py-3 px-8 border-2 border-[#262626] hover:text-white hover:bg-main_text_color cursor-pointer'}
                                  />
                                </div>
                            </div>
                          </div>
                          )}
                          {/* -----------------ShoppingCart overlay------------- */}
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