import React from 'react'
import PhoneOfTheYearImg from '../../../assets/PhoneOfTheYearImg.png'
import Flex from '../../CommonComponents/Flex'
import Button from '../../CommonComponents/Button'

const PhoneOfTheYear = () => {
  return (
    <>
     <div className='mt-[130px] px-2 md:px-0'>
        <div className="container">
           <Flex className={'gap-x-12'}>
                <div className=' w-[60%]'>
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
                     className={'text-white py-4 px-[58px] bg-main_text_color cursor-pointer '}
                     title={'Shop Now'}
                     />
                </div>

           </Flex>
        </div>
     </div>
    </>
  )
}

export default PhoneOfTheYear