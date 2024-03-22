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