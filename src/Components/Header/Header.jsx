import React from 'react'
import Logo from '../../assets/Logo.png'
import Flex from '../CommonComponents/Flex'

const Header = () => {
  return (
    <>
      <div className='py-[31px] bg-bg_Primary_color'>
         <div className="container">
         <Flex className='justify-between items-center'>
          <picture>
              <img src={Logo} alt={Logo} title='OREBI logo'  />
            </picture>
            <div>
              <Flex className='menu_items gap-12'>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                  <a href="#"> Home </a>
                </li>
                <li className='font-normal font-DM_Sans text-sm text-main_text_color'>
                  <a href="#"> Shop </a>
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

            <div></div>
         </Flex>
         </div>
      </div>
    </>
  )
}

export default Header