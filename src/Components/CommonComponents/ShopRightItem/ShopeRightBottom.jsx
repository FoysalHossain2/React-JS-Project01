import React,{useState, useEffect, useContext} from 'react'
import Products from '../Products';
import Button from '../Button';
import axios from 'axios';
import { FaChevronLeft } from "react-icons/fa";
import { ShopPageChangeContext } from '../../ShopComponent/ShopRight';
import { useSelector, useDispatch } from 'react-redux'
import { SetProducts } from '../../../Redux/AllSlice/ProduceSlice/ProductSlice';



const ShopeRightBottom = () => {

  const dispatch = useDispatch();

  const value = useContext(ShopPageChangeContext)
  const [AllProducts, setAllProducts] = useState([]);
  const [page , setPage] = useState(1);

  // useEffect(() => {
  //   dispatch(FetcherProduct())
  // }, [])
  

  useEffect(() => {
    const productDataFetch = async () => {
      const products = await axios.get("https://dummyjson.com/products")
      setAllProducts(products.data.products);
      // set data on redux
      dispatch(SetProducts(products.data.products))
    }

    productDataFetch()
  }, [])


  // HandlePages function
  const HandlePagesNumbers = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.floor(AllProducts.length / value + 1 ) ) {
      setPage(pageNumber);
    }
  }


  useSelector((state) => console.log(state))



  return (
    <>
      <div className='mt-14 '>
        <div className={'flex flex-wrap justify-between gap-y-5'}>          
            {AllProducts?.slice(page * value - value, page * value).map((ProductsItem, id) => (
              <div className={'w-[32%] '} key={id}>
                <Products 
                  image={ProductsItem.thumbnail} 
                  colorVariant={true}
                  ProductName={ProductsItem.title}
                  ProductPrice={ProductsItem.price}

                  bize={ 
                      <Button 
                      title={ProductsItem.discountPercentage ? ProductsItem.discountPercentage :'New'}
                      className={'bg-black text-[16px] text-white py-[3px] px-[30px]'}
                    /> 
                  }
                  />
              </div>
              ))}
        </div>

        <div className='mt-[50px]'> 
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-4' >
            <div className='mr-8 flex items-center justify-center border-2 border-[#F0F0F0] text-[#767676] w-9 h-9 cursor-pointer' onClick={() => HandlePagesNumbers(page - 1)}>
              <FaChevronLeft />
            </div>
            {[...new Array(Math.floor(AllProducts.length / value +1 ))].map((pageNumber, index) => (
              <div key={index} className={`flex items-center justify-center border-2 border-[#F0F0F0] text-[#767676] w-9 h-9 cursor-pointer ${index + 1 === page && 'bg-black text-white'}`}
               onClick={ () => HandlePagesNumbers(index + 1)}
               >
                {index + 1}
              </div>
            ))}
            <div className='ml-8 flex items-center justify-center border-2 border-[#F0F0F0] text-[#767676] w-12 h-9 cursor-pointer' onClick={() => HandlePagesNumbers(page + 1)}>
              <button>Next</button>
            </div>
          </div>

          <div>
            <p>{`Products from ${page * value - value} to 
              ${page === 4 ? AllProducts.length : page * value} of 
              ${AllProducts.length}`}</p>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ShopeRightBottom