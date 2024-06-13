import React, { useContext, useEffect, useState } from 'react'
import Flex from '../CommonComponents/Flex'
import { FiHeart } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataProduct } from '../../Redux/AllSlice/ProduceSlice/ProductSlice';

const Products = ({colorVariant, bize, image, ProductPrice, ProductName, className, GrideLayout, productId, AddToCart}) => {



      
      // console.log(AllProducts);


  return (
    <>

    <div className={``}>

      {GrideLayout ? '' : (

      <div >
        <div className=' w-[200px] pb-6  md:w-full  relative overflow-hidden group cursor-pointer '>
          <div className='absolute top-5 ml-5 '> {bize}</div> 

          <Link  to={`/productDetails/${productId}`}>
          <div className="object-cover w-[170px] h-[230px] md:h-[300px] md:w-[300px]  border-2 border-black">
                <img 
                  src={image} 
                  alt={image} 
                  className={` `} 
                />
            </div>
          </Link>
          {/* -----------overlay--------  */}
          <div className=" absolute -bottom-[40%]  transition-all group-hover:bottom-6">
            <div className="flex justify-end flex-col items-end py-6">
              <div>
                <div className={"flex gap-x-5 items-center  pb-6 mr-[30px]"}>
                  <span>
                    <FiHeart />
                  </span>
                </div>
              </div>

              <div>
                <div className={"flex gap-x-5 items-center  pb-6 mr-[30px]"}>
                  <span>
                    <DiGitCompare />
                  </span>
                </div>
              </div>
              <div>
                <div className={"flex gap-x-5 items-center  mr-[30px]"}>
                  <span className='text-orange-500 text-[25px]' onClick={AddToCart}>
                    <IoCart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* -----------overlay--------  */}
        </div>

        <Link  to={`/productDetails/${productId}`}>
          <div>           
              <div className='w-[300px]  pb-4'>
                  <h5 className={`${className} font-bold font-DM_Sans md:text-xl text-[16px] `}>
                    {ProductName ? `${ProductName.slice(0,20)}... ` : ProductName}
                  </h5>
                  <p>{ProductPrice ? `$${ProductPrice}` : '$44.00'}</p>
              </div>
              {colorVariant && <span>Black</span>} 
          </div>
        </Link>

      </div>
      )}

        {GrideLayout === true ? (
          <div className='flex flex-row gap-x-[50px] '>

            <Link  to={`/productDetails/${productId}`}>
              <div className="object-cover w-[360px]" >
                  <img 
                    src={image} 
                    alt={image} 
                    className={` h-[300px] w-[360px] `} 
                  />
              </div>
            </Link>

          <Link to={`/productDetails/${productId}`}>
            <div className=''>           
                <div className={` flex  pb-4`}>
                    <div className='w-[90px]'>
                      <h5 className={`${className} font-bold font-DM_Sans text-xl`}>{ProductName ? ProductName : ProductName}</h5>
                    </div>
                    <p className=''>{ProductPrice ? `$${ProductPrice}` : '$44.00'}</p>
                </div>
                {colorVariant && <span>Black</span>} 
            </div>
          </Link>
        </div>
        ) : ''}
        


    </div>
</>
)
}

export default Products;