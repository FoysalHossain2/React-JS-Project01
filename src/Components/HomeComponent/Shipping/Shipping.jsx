import React from 'react'
import Flex from '../../CommonComponents/Flex'
import ShippingItems from '../../CommonComponents/ShippingItems'
import { FaTruck } from "react-icons/fa";

const Shipping = () => {

  const data = [
    { id: 1, icon: 2, title: 'Two years warranty'},
    { id: 2, icon: <FaTruck/>, title: 'Free shipping'},
    { id: 3, icon: <FaTruck/>, title: 'Return policy in 30 days shipping'}
  ]

  return (
    <> 
        <div className='py-[22px]'>
          <div className="container">
            <Flex className={'md:justify-between items-center  md:flex-row flex-col'}>
              {data?.map((item, id) => (
                <ShippingItems
                className={'flex items-center gap-x-3'}
                key={id}
                >
                  <span className='text-xl font-bold'>{item.icon}</span>
                  <p>{item.title}</p>
                </ShippingItems>
              ))}
            </Flex>
          </div>
        </div>
    </>
  )
}

export default Shipping