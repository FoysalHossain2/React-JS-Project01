import React, { useContext } from 'react'
import { FiHeart } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";


const Products = ({colorVariant, bize, image, ProductPrice, ProductName, className, GrideLayout}) => {
  console.log(GrideLayout );


  return (
    <>
      <div className={``}>

        {GrideLayout ? '' : (

          <div >
            <div className=' w-[93%] pb-6  md:w-full relative overflow-hidden group cursor-pointer'>
              {/* <div className='absolute top-5 ml-5 '> {bize}</div>  */}

                <div className="object-cover " >
                  <img src={image} alt={image} className={` h-[300px] w-[360px] `} />
                </div>
              {/* -----------overlay--------  */}
              <div className=" absolute w-full -bottom-[40%]  transition-all left-0 group-hover:bottom-6">
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
                      <span>
                        <IoCart />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* -----------overlay--------  */}
            </div>

            <div>           
                <div className='w-[93%] flex items-center justify-between pb-4'>
                    <h5 className={`${className} font-bold font-DM_Sans text-xl`}>{ProductName ? ProductName : ProductName}</h5>
                    <p>{ProductPrice ? `$${ProductPrice}` : '$44.00'}</p>
                 </div>
                {colorVariant && <span>Black</span>} 
            </div>

          </div>
        )}

          {GrideLayout === true ? (
            <div className='flex flex-row justify-between'>
                <div className="object-cover w-[360px]" >
                    <img src={image} alt={image} className={` h-[300px] w-[360px] `} />
                </div>
            <div className='ml-10 w-[440px]'>           
                <div className=' flex justify-between pb-4'>
                    <h5 className={`${className} font-bold font-DM_Sans text-xl`}>{ProductName ? ProductName : ProductName}</h5>
                    <p>{ProductPrice ? `$${ProductPrice}` : '$44.00'}</p>
                 </div>
                {colorVariant && <span>Black</span>} 
            </div>
          </div>
          ) : ''}
          


      </div>
    </>
  )
}

export default Products;