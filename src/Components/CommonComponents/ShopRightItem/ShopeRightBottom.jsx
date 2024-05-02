import React,{useState, useEffect} from 'react'
import Products from '../Products';
import Arrivals1 from '../../../assets/NewArrivals/Arrivals1.png'
import Button from '../Button';
import axios from 'axios';


const ShopeRightBottom = () => {

  const [AllProducts, setAllProducts] = useState([]);

  const [page , setPage] = useState(1);
 

  useEffect(() => {
    const productDataFetch = async () => {
      const products = await axios.get("https://dummyjson.com/products")
      setAllProducts(products.data.products);
    }

    productDataFetch()
  }, [])


  // HandlePages function
  const HandlePagesNumbers = (pageNumber) => {
    setPage(pageNumber);
  }



  return (
    <>
      <div className='mt-14 '>
        <div className={'flex flex-wrap justify-between gap-y-5'}>          
            {AllProducts?.slice(page * 9 - 9, page * 9).map((ProductsItem, id) => (
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
          <div className='flex gap-x-4' >
            {[...new Array(Math.floor(AllProducts.length / 9 +1 ))].map((pageNumber, index) => (
              <div className={`flex items-center justify-center border-2 border-[#F0F0F0] text-[#767676] w-9 h-9 cursor-pointer ${index + 1 === page && 'bg-black text-white'}`}
               onClick={ () => HandlePagesNumbers(index + 1)}
               >
                {index + 1}
              </div>
            ))}
          </div>

          <div>
            <p>{`Products from ${page * 9 - 9} to 
              ${page === 4 ? AllProducts.length : page * 9} of 
              ${AllProducts.length}`}</p>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ShopeRightBottom