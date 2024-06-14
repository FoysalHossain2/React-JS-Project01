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
import { Link , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RemoveCartItem } from '../../../Redux/AllSlice/AddToCartSlice/AddToCartSlice'


const  MenuBar = () => {

  const [singUp, setSingUp] = useState(false);
  const [showCategory, setShowCategory] =useState(false); 
  const [ShoppingCart, setShoppingCart] =useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MenuRef = useRef();
  const CartRef = useRef();


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
  const HandleShoppingCart = (e) => {
    e.stopPropagation();
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
    if (CartRef.current.contains(e.target)) {
      setShoppingCart(true)
    }
  })

  return(() => {
    window.addEventListener('click', () => {});
  })

}, [ShoppingCart])


const {TotalCartItem, TotalAmount, CartItem} = useSelector((state) =>state.cart)

// HandleDeleted functionality
const HandleDeleted = (items) => {
  setShoppingCart(true)
  dispatch(RemoveCartItem(items))
}


// HandleViewCart functionality
const HandleViewCart = () => {
  navigate('/cart')
}



//  {item.title
// ? `${item.title.slice(0, 15)}...`
// : "Title Missing"}



  return (
    <>   
        <div className='md:py-10 py-4 bg-bg_Secondary_color px-1 md:px-0' ref={MenuRef}>
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

                  {/*=========== search option ==========  */}
                  <div>
                    <Search
                    type={'text'}
                     placeholder='Search Products'
                     className='font-normal text-sm md:w-[600px] w-max'  />
                 </div>
                 {/*=========== search option ==========  */}

                 <div>
                    <Flex className='gap-4 items-center md:gap-10 mt-[-93px] md:mt-0'> 
                      <div className='flex gap-1 cursor-pointer ' onClick={HandleClick}>
                       <div className='flex items-center justify-center'>
                       <FaUser className={`text-2xl ${singUp ? 'text-orange-700' : null}`} />
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
                         <div onClick={HandleShoppingCart} className='absolute' >
                            <FaShoppingCart className=' text-2xl cursor-pointer ' />
                         </div>

                          <span class=" ml-6 flex items-center justify-center rounded-full h-6 w-6 text-white bg-zinc-500">                               
                            {TotalCartItem}
                          </span>

                          {/* -----------------ShoppingCart overlay------------- */}
           
                          {ShoppingCart && (                          
                          <div  className='w-[360px] h-[260px] absolute mt-[30px] z-10 ml-[-320px] ' >
                            <div className='h-[30vh] overflow-y-scroll' >
                              {CartItem.map((items) => (
                                  <Flex className={'justify-between items-center bg-[#d9d5d5cc] py-5 px-5'}  >
                                    <div className='w-[80px] h-[80px] shadow-md'>
                                      <img 
                                        src={items.thumbnail ? items.thumbnail : Arrivals2}
                                        alt={items.thumbnail ? items.thumbnail : Arrivals2} 
                                      />
                                    </div>
                                    <div className='-ml-8 w-[150px]'>
                                      <p className='font-DM_Sans pb-3 text-main_text_color font-bold'>
                                        {items.title ? 
                                        `${items.title.slice(0,10)}... `
                                        : 'Title Messing'}
                                      </p>
                                      <span className='text-main_text_color font-bold'>
                                        $44.00
                                      </span>
                                    </div>
                                    <button  className='flex items-center justify-center w-7 h-7 hover:bg-zinc-400 rounded-full' ref={CartRef} onClick={()=>HandleDeleted(items)}>
                                        <FaXmark  />
                                    </button>
                                  </Flex>
                              ))}
                            </div>
                            
                            <div className='py-5 px-5 bg-[#ffffffe0] flex items-start flex-col'>
                                <p className='pb-4 font-DM_Sans text-main_text_color'>
                                  Subtotal: <span className='font-bold'>${TotalAmount}</span>
                                </p>

                                <div className={'flex gap-x-10'}>
                                  <Button
                                    onClickButton={HandleViewCart}
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