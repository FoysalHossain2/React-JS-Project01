import React from 'react'
import Flex from '../CommonComponents/Flex'
import Ad_1 from '../../assets/Ad_1.png'
import Ad_2 from '../../assets/Ad_2.png'
import Ad_3 from '../../assets/Ad_3.png'
import Button from '../CommonComponents/Button'

const SaleInfo = () => {
  return (
    <> 
      <div className='py-3'>
        <div className="container">
            <Flex className={'gap-10'}>
              <div className='w-1/2 relative'>
                <picture>
                  <img src={Ad_1} alt="" />
                </picture>

                <div className='absolute bottom-[72px] left-16'>
                  <h2 className='font-DM_Sans font-bold text-4xl text-main_text_color mb-9'>
                    Phones Sale
                  </h2>
                  <p className='font-DM_Sans opacity-75 text-main_text_color mb-[49px]'>
                    up to <span className='font-bold text-[#262626] text-[40px] p-3'>30%</span> sale for all phones!
                  </p>
                  <Button className={ 'inline-block bg-main_text_color py-4 px-16 text-white hover:bg-slate-800 cursor-pointer'}>
                    Shop Now
                  </Button>
                </div>
              </div>

              <div className='w-1/2 flex flex-col gap-10'>
                 <div className=''>
                   <picture>
                      <img src={Ad_2} alt="" />
                   </picture>
                 </div>
                 <div className=''>
                    <picture>
                       <img src={Ad_3} alt="" />
                    </picture>
                 </div>
               </div>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default SaleInfo