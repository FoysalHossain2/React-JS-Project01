import React from 'react';
import FooterItem from '../FooterItem';
import Flex from '../../CommonComponents/Flex';
import Logo from '../../../assets/Logo.png';


const FooterTop = () => {
  return (
    <>
     <div className='mt-44'>
        <div className="container">

            <Flex className={'gap-x-52 pt-14'}>
                <FooterItem
                title={'MENU'}
                allItems={['Home', 'Shop', 'About', 'Contact', 'Journal']}
                />

                <FooterItem
                title={'SHOP'}
                allItems={['Category', 'Category', 'Category', 'Category', 'Category']}
                />

                <FooterItem
                title={'HELP'}
                allItems={['Privacy Policy', 'Terms & Conditions', 'Special E-shop', 'Shipping', 'Secure Payments']}
                />

                <div>
                  <div className='font-DM_Sans font-bold text-[16px] text-main_text_color'>
                    <a href="#">(052) 611-5711</a>
                  </div>
                  <div className='font-DM_Sans font-bold text-[16px] text-main_text_color'>
                    <a href="#">company@domain.com</a>
                  </div>
                  <address className='font-DM_Sans font-normal text-[#6D6D6D] mt-4'>
                    575 Crescent Ave. Quakertown, PA 18951
                  </address>
                </div>

                <div>
                  <img src={Logo} alt={Logo}  />
                </div>

            </Flex>

        </div>
     </div>
    </>
  )
}

export default FooterTop