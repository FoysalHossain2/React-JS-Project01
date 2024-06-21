import React from 'react'
import Flex from '../../CommonComponents/Flex'
import Ad_1 from '../../../assets/Ad_1.png'
import Ad_2 from '../../../assets/Ad_2.png'
import Ad_3 from '../../../assets/Ad_3.png'
// import Button from '../CommonComponents/Button'
import Overlay from '../../CommonComponents/Overlay'
import { useNavigate } from 'react-router-dom'


const SaleInfo = () => {

  const navigator = useNavigate();

  // HandleShopNav functionality
  const HandleShopNav = () => {
    navigator('/shop')
  }


  return (
    <> 
      <div className='py-3 px-2 md:px-0'>
        <div className="container">
            <Flex className={'sm:gap-x-5 md:gap-x-6 lg:gap-x-10  flex-row gap-y-4'}>
              <div className='md:w-1/2 w-full relative '>
                <div className=' w-full h-full'>
                  <img src={Ad_1} alt=""  className=' w-full h-full'  />
                </div>

                <Overlay 
                  className={'md:bottom-[72px] bottom-[30px] left-16'} 
                  title={'Phone sale'}
                  discountDetailsFirst={'up to'}
                  discountAmount={'30%'}
                  discountDetailsLast={'sale for all phones!'}
                  btnTitle={'Shop Now'}
                  onClickButton={HandleShopNav}
                />
               
              </div>

              <div className='md:w-1/2 w-full flex flex-col gap-10'>
                 <div className='w-full relative'>
                   <picture>
                      <img src={Ad_2} alt="" />
                   </picture>
                    <Overlay 
                      className={'top-1/2 -translate-y-1/2 left-10'} 
                      title={'Electronics Sale'}
                      discountDetailsFirst={'up to'}
                      discountAmount={'70%'}
                      discountDetailsLast={'sale for all electronics!'}
                      btnTitle={'Shop Now'}
                      onClickButton={HandleShopNav}
                    />
                 </div>
                 <div className='w-full relative'>
                    <picture>
                       <img src={Ad_3} alt="" />
                    </picture>
                      <Overlay 
                        className={'top-1/2 -translate-y-1/2 left-10'} 
                        title={'Furniture Offer'}
                        discountDetailsFirst={'up to'}
                        discountAmount={'50%'}
                        discountDetailsLast={'sale for all furniture items!'}
                        btnTitle={'Shop Now'}
                        onClickButton={HandleShopNav}
                      />
                 </div>
               </div>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default SaleInfo