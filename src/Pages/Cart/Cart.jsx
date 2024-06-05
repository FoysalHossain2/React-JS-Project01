import React from 'react'
import BreadCrumb from '../../Components/CommonComponents/BreadCrumb/BreadCrumb'
import Arrivals4 from '../../assets/NewArrivals/Arrivals4.png'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { RemoveCartItem , ProductIncrement, ProductDecrement} from '../../Redux/AllSlice/AddToCartSlice/AddToCartSlice';



const Cart = () => {

  const dispatch = useDispatch();

  const {CartItem} = useSelector((state) => state.cart)


  // HandleOnChange functionality
  const HandleDeleted = (item) => {
    dispatch(RemoveCartItem(item))
  }


  /**
   * @HandleDecrement functionality
   * @prams((item)
   */
  const HandleDecrement = (item) => {
    dispatch(ProductDecrement(item))
  }


  /**
   * @HandleIncrement functionality
   */
  const HandleIncrement = (item) => {
    dispatch(ProductIncrement(item))
  }



  return (
    <>
      <div>
        <div className="container">
          <div className='mb-[125px]'>
            <h1  className='font-DM_Sans text-[39px] font-bold mb-[11px] mt-[124px]'>
              Cart
            </h1>
            <BreadCrumb />
          </div>

          <div className='bg-[#F5F5F3] py-8 flex flex-row items-center justify-between'>
            <div className='grow basis-60 ml-3'>
              <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                Product
              </h6>
            </div>
            <div className='grow basis-60'>
            <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                Price
              </h6>
            </div>
            <div className='grow basis-60'>
            <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                Quantity
              </h6>
            </div>
            <div className='grow basis-60'>
            <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                Total
              </h6>
            </div>
          </div>

          <div className='h-[500px] overflow-y-scroll'>
            {CartItem.map((item, id) => (          
              <div className='flex items-center mt-8 justify-between' key={item.id}>
                <div className='flex items-center grow basis-60 ml-3'>
                  <span className='mr-3 cursor-pointer' onClick={() =>HandleDeleted(item)}>
                    <MdCancel />
                  </span>
                  <div className='w-20 h-20 shadow-md'>
                    <picture>
                      <img 
                        src={item.thumbnail ? item.thumbnail : 'Arrivals4'} 
                        alt={item.thumbnail ? item.thumbnail : 'Arrivals4'} 
                        className='w-full h-full rounded-md object-cover'
                      />
                    </picture>
                  </div>
                    <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                      {item.title ? item.title : 'Product messing'}
                    </h6>
                </div>
                <div className='grow basis-60'>
                  <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                    {item.price ? item.price : '$44.00'}
                  </p>
                </div>
                <div className='grow basis-60'>
                  <div className='flex items-center gap-x-[50px]'>
                    <div className='flex items-center gap-x-6  border-2 border-[#F0F0F0] py-1 px-3'>
                        <button onClick={()=>HandleDecrement(item)}> 
                            <FaMinus /> 
                        </button>
                        <p>{item.CartQuantity}</p>
                        <button onClick={()=>HandleIncrement(item)}>
                            <FaPlus/> 
                        </button>
                    </div>
                  </div>
                </div>

                <div className='grow basis-60'>
                  <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                    {item.CartQuantity * item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-end mt-[54px]'>
            <div className='flex flex-col basis-4/12'>
              <div>
                <h2 className='font-DM_Sans font-bold text-main_text_color text-end mr-2 mb-6'>
                  Cart totals
                </h2>
              </div>
              <div className='flex items-end'>
                <div className='flex w-full border-2 border-[#F0F0F0] py-3'>
                  <h5 className='ml-3 font-DM_Sans font-bold text-main_text_color'>
                  Subtotal
                  </h5>
                </div>
                <div className='flex w-full border-2 border-[#F0F0F0] py-3'>
                  <h5 className='ml-3 font-DM_Sans font-bold text-main_text_color '>
                    389.99 $
                  </h5>
                </div>
              </div>
              <div className='flex items-end'>
                <div className='flex w-full border-2 border-[#F0F0F0] py-3'>
                  <h5 className='ml-3 font-DM_Sans font-bold text-main_text_color'>
                    Total
                  </h5>
                </div>
                <div className='flex w-full border-2 border-[#F0F0F0] py-3'>
                  <h5 className='ml-3 font-DM_Sans font-bold text-main_text_color '>
                    389.99 $
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-end mt-4'>
            <button className='flex items-start justify-center bg-main_text_color px-4 py-4 text-white font-DM_Sans'>
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart