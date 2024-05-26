import React,{useState, useEffect, useContext} from 'react'
import Products2 from '../../CommonComponents/ShopRightItem/Products2';
import Button from '../Button';
import { FaChevronLeft } from "react-icons/fa";
import { ShopPageChangeContext } from '../../ShopComponent/ShopRight';
import { useSelector, useDispatch } from 'react-redux'
import { FetchDataProduct, SetProducts } from '../../../Redux/AllSlice/ProduceSlice/ProductSlice';
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Loading from '../Loading';



const ShopeRightBottom = () => {

  const dispatch = useDispatch();

  const {PageChange , GrideLayout} = useContext(ShopPageChangeContext)
  const [AllProducts, setAllProducts] = useState([]);
  const [page , setPage] = useState(1);


  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products"))
  }, [])
  

  const {data, status} = useSelector((state) => state.product)

  
  useEffect(() => {
    if (status === "IDLE" ) {
      setAllProducts(data.products )
      console.log(AllProducts);
    }
  }, [data, status])  




  // Handle pagination  function
  const HandlePagesNumbers = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.floor(AllProducts.length / PageChange + 1 ) ) {
      setPage(pageNumber);
    }
  }








  console.log(PageChange);
  return (
    <>
      <div className='mt-14 px-1 md:px-0'>
        <h1>{status}</h1>
        {status === "LOADING" ? (
          <Loading PageChange={PageChange} />
        ) : status === "ERROR" ? (
          <div>
            <ErrorPage/>
          </div>
        ) : (
           AllProducts && (
        <div>

          <div className={``}>
              <div className={`flex flex-wrap gap-y-5 justify-between ${GrideLayout ? 'flex flex-col' : ''} `}>          
                  {AllProducts?.slice(page * PageChange - PageChange, page * PageChange).map((ProductsItem, id) => (
                    <div className={`w-[32%]`} key={ProductsItem.id}>

                      <Link to={`/productDetails/${ProductsItem.id}`} >
                        <Products2
                          image={ProductsItem.thumbnail}
                          ProductName={ProductsItem.title}
                          ProductPrice={ProductsItem.price}
                          colorVariant={true}
                          GrideLayout={GrideLayout}
                          productId={ProductsItem.id}
                          />
                      </Link>
                    </div>
                    ))}
              </div>
          </div>

          {/* pagination part */}
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
          {/* pagination part */}
        </div>
      ))
    }
    </div>
    </>
  )
}

export default ShopeRightBottom
