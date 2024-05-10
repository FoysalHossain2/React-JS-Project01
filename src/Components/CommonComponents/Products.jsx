import React, { useContext } from 'react'
import Flex from '../CommonComponents/Flex'
import { FiHeart } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";


const Products = ({colorVariant, bize, image, ProductPrice, ProductName, className}) => {


  return (
    <>

      <div className={`w-[93%] `}>
          {/* <div > */}
            <div className='pb-6  md:w-full relative overflow-hidden group cursor-pointer'>
              <div className='absolute top-5 ml-5 '> {bize}</div> 

                <div className="object-cover " >
                  <img src={image} alt={image} className='h-[300px] w-full' />
                </div>
              {/* -----------overlay--------  */}
              <div className=" absolute w-full -bottom-[40%]  transition-all left-0 group-hover:bottom-6">
                <div className="flex justify-end flex-col items-end py-6">
                  <div>
                    <Flex className={"gap-x-5 items-center  pb-6 mr-[30px]"}>
                      <span>
                        <FiHeart />
                      </span>
                    </Flex>
                  </div>
  
                  <div>
                    <Flex className={"gap-x-5 items-center  pb-6 mr-[30px]"}>
                      <span>
                        <DiGitCompare />
                      </span>
                    </Flex>
                  </div>
                  <div>
                    <Flex className={"gap-x-5 items-center  mr-[30px]"}>
                      <span>
                        <IoCart />
                      </span>
                    </Flex>
                  </div>
                </div>
              </div>
              {/* -----------overlay--------  */}
            </div>
  
                <div className='flex items-center justify-between pb-4'>
                    <h5 className={`${className} font-bold font-DM_Sans text-xl`}>{ProductName ? ProductName : ProductName}</h5>
                    <p>{ProductPrice ? `$${ProductPrice}` : '$44.00'}</p>
                 </div>
                {colorVariant && <span>Black</span>} 

          {/* </div> */}
      </div>
    </>
  )
}

export default Products;