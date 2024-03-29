import React from 'react'
import Flex from '../../CommonComponents/Flex'
import Ad_1 from '../../../assets/Ad_1.png'
import Ad_2 from '../../../assets/Ad_2.png'
import Ad_3 from '../../../assets/Ad_3.png'
// import Button from '../CommonComponents/Button'
import Overlay from '../../CommonComponents/Overlay'

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

                <Overlay 
                className={'bottom-[72px] left-16'} 
                title={'Phone sale'}
                discountDetailsFirst={'up to'}
                discountAmount={'30%'}
                discountDetailsLast={'sale for all phones!'}
                btnTitle={'Shop Now'}
                />
               
              </div>

              <div className='w-1/2 flex flex-col gap-10'>
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