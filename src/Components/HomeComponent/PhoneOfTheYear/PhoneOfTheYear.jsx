import React from 'react'
import PhoneOfTheYearImg from '../../../assets/PhoneOfTheYearImg.png'
import Button from '../../CommonComponents/Button'
import { useNavigate } from 'react-router-dom';

const PhoneOfTheYear = () => {


  const navigator = useNavigate();

  // HandleShopNav functionality
  const HandleShopNav = () => {
    navigator('/shop')
  }



  return (
    <>
     <div className='mt-[130px] px-2 md:px-0'>
        <div className="container">
           <div className={'sm:flex flex-col md:flex-row gap-x-12'}>
                <div className='w-full md:w-[60%]'>
                    <img src={PhoneOfTheYearImg} alt={PhoneOfTheYearImg} />
                </div>
                <div className=' w-full flex flex-col justify-center items-start '>
                    <h2 className='font-DM_Sans font-bold text-[39px]'>
                        Phone of the year
                    </h2>
                    <p className='font-DM_Sans text-base leading-7 max-w-[511px] pb-[50px] pt-[38px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
                    </p>
                     <Button
                     className={'text-white py-2 px-[40px] bg-main_text_color cursor-pointer '}
                     title={'Shop Now'}
                     onClickButton={HandleShopNav}
                     />
                </div>

           </div>
        </div>
     </div>
    </>
  )
}

export default PhoneOfTheYear