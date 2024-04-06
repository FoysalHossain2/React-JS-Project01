import { useState } from 'react'
import React from 'react'
import Logo from '../../../assets/Logo.png'
import Flex from '../../CommonComponents/Flex'
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);


  const HandleNav = () => {
    setShowMenu(!showMenu)
  }



  return (
    <>
    
      <div className='py-[31px] bg-bg_Primary_color max-[775px]:px-0 px-2'>
         <div className="container">
         <Flex className='sm:justify-between md:items-center '>
          <picture>
              <img src={Logo} alt={Logo} title='OREBI logo'  />
            </picture>
            <div>
              <Flex className={`absolute flex-col sm:static sm:flex-row text-center sm:gap-x-6
                ${showMenu ? 'left-0 bg-slate-500 transition-all w-[90%] px-7 top-[60px] z-10' : 'left-[-500px] w-[90%] top-[60px] z-10' }`
              }>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                  <NavLink to={'/shop'}>Shop</NavLink>
                </li>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                  <a href="#"> About </a>
                </li>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                  <a href="#"> Contacts </a>
                </li>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                  <a href="#"> Journal </a>
                </li>
              </Flex>
            </div>

            <div>
              <div onClick={HandleNav} className='cursor-pointer sm:hidden lg:hidden mt-[-20px]'>
                {showMenu === true ? <RxCross2/>  : <HiBars3/>}
              </div>
            </div>
         </Flex>
         </div>
      </div>
    </>
  )
}

export default Header