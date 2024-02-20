import React from 'react'
import Flex from '../CommonComponents/Flex'
import ShippingItems from '../CommonComponents/ShippingItems'
import { FaTruck } from "react-icons/fa";

const Shipping = () => {
  return (
    <> 
        <div className='py-[22px]'>
          <div className="container">
            <Flex className={'justify-between items-center'}>
               {[...Array(3)].map(()=>(
                  <ShippingItems className={'flex items-center gap-x-2' }>
                    <span> <FaTruck/> </span>
                     <p>Two years warranty</p>
                </ShippingItems>
               ))}
            </Flex>
          </div>
        </div>
    </>
  )
}

export default Shipping