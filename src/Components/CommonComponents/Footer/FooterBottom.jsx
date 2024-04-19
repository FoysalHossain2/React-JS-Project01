import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Flex from '../../CommonComponents/Flex';

function FooterBottom() {
  return (
    <>
     <div className='mt-16  px-2 md:px-0'>
      <div className="container">
        <Flex className={'justify-between pb-[59px]'}>
        <div className='flex gap-3 text-lg'>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <div className='font-normal font-DM_Sans text-main_text_color'>
          <p>2024 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
        </Flex>

      </div>
     </div>
    </>
  )
}

export default FooterBottom