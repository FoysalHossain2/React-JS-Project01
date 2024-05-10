import React,{useState, useEffect, useContext} from 'react'
import Products from '../Products';
import Button from '../Button';
import axios from 'axios';
import { FaChevronLeft } from "react-icons/fa";
import { ShopPageChangeContext } from '../../ShopComponent/ShopRight';
import { useSelector, useDispatch } from 'react-redux'
import { FetchDataProduct, SetProducts } from '../../../Redux/AllSlice/ProduceSlice/ProductSlice';



const ShopeRightBottom = () => {

  const dispatch = useDispatch();

  const {PageChange , GrideLayout} = useContext(ShopPageChangeContext)
  const [AllProducts, setAllProducts] = useState([]);
  const [page , setPage] = useState(1);


  useEffect(() => {
    dispatch(FetchDataProduct())
  }, [])
  

  const {data, status} = useSelector((state) => state.product)

  console.log(status);


  useEffect(() => {
    if (status === "IDLE" && data.length > 0 ) {
      setAllProducts(data)
    }
  }, [data, status])  






  // HandlePages function
  const HandlePagesNumbers = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.floor(AllProducts.length / PageChange + 1 ) ) {
      setPage(pageNumber);
    }
  }








  return (
    <>
      <div className='mt-14 px-1 md:px-0'>
        <h1>{status}</h1>
        {status === "LOADING" ? (
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-200 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : status === "ERROR" ? (
          <h1>E</h1>
        ) : (
           AllProducts && (
        <div>

          <div className={`flex flex-wrap justify-between  ${GrideLayout ? 'flex-col' : null}`}>          
              {AllProducts?.slice(page * PageChange - PageChange, page * PageChange).map((ProductsItem, id) => (
                <div className={`w-[32%] `} key={id}>
                  <Products
                    image={ProductsItem.thumbnail}
                    ProductName={ProductsItem.title}
                    ProductPrice={ProductsItem.price}
                    colorVariant={true}
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
              {[...new Array(Math.floor(AllProducts.length / PageChange +1 ))].map((pageNumber, index) => (
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
              <p>{`Products from ${page * PageChange - PageChange} to 
                ${page === 4 ? AllProducts.length : page * PageChange} of 
                ${AllProducts.length}`}</p>
            </div>
          </div>
          </div>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default ShopeRightBottom