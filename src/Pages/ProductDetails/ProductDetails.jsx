import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../Components/CommonComponents/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { FetchDataProduct } from '../../Redux/AllSlice/ProduceSlice/ProductSlice';
import ProductDetailsTop from '../../Components/ProductDetailesComponent/ProductDetailsTop';
import ErrorPage from '../../Components/CommonComponents/ErrorPage';
import Loading from '../../Components/CommonComponents/Loading';
import RatingStar from '../../Components/ProductDetailesComponent/RatingStar';

const ProductDetails = () => {

  const dispatch = useDispatch();
  const [EachProduct, setEachProduct] = useState({})

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products/2"))
  }, [])
  

  const {data, status} = useSelector((state) => state.product)

  useEffect(() => {
    if (status === "IDLE" ) {
      setEachProduct(data)
    }
  }, [data, status])

  console.log(EachProduct);  
  console.log((EachProduct.price  * EachProduct.discountPercentage ) / 10);
  
  

  return (
    <>
    <div >
      <div className='container'>
        <div className='mt-5'>
          <BreadCrumb/>
        </div>

        {status === "LOADING" ? (
        <Loading />
        )
        : status === "ERROR" ? (
          <div>
            <ErrorPage />
          </div>
        )
        :
        (

          <ProductDetailsTop EachProductImg={EachProduct} />
        )

        }

          <div className='mt-[45px]'>
            <h2  className='font-bold text-[39px] pb-3'>{EachProduct.title ? EachProduct.title : "Product"}</h2>
            <RatingStar ratingStar={EachProduct.rating} />
            <div className='flex items-center gap-x-4 mt-3'>
              <p className='line-through'>${(EachProduct.price)}.00</p>
              <p>${EachProduct.price - Math.round((EachProduct.price * EachProduct.discountPercentage / 100))}.00</p>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails