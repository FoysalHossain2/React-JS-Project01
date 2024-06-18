import React, {useState, Link, useEffect} from 'react'
import Products from '../../CommonComponents/Products'
import Button from '../../CommonComponents/Button';
import Slider from "react-slick";
import { FaLongArrowAltRight , FaLongArrowAltLeft} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FetchDataProduct } from '../../../Redux/AllSlice/ProduceSlice/ProductSlice';
import { addToCart } from '../../../Redux/AllSlice/AddToCartSlice/AddToCartSlice';



// Next Arrow function
function SampleNextArrow(props) {

  const {  className,style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      display: "block", 
      background: "gray", 
      padding: "13px",
      borderRadius: "50%",
      cursor: "pointer",
      position: "absolute" ,
      right: "0px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
    onClick={onClick}
    >
           <div className='flex justify-center items-center  text-white text-2xl'>
              <FaLongArrowAltRight />
           </div>
          </div>
          );
        }
        
        
        // Previous arrow function
        function SamplePrevArrow(props) {
          const { className, style, onClick } = props;
          return (
            <div
            className={className}
            style={{ 
              ...style,
              display: "block", 
              background: "gray", 
              padding: "13px",
              borderRadius: "50%",
              cursor: "pointer",
              position: "absolute",
              left: "-20px",
              zIndex: "1",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onClick}
            >
              <div className='flex justify-center items-center text-white text-2xl'>
                <FaLongArrowAltLeft />
              </div>
              
           </div>
          );
        }


        // slider Implementation
        var settings = {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          }
        }
      ]
    };
    
    
    
    const NewArrivals = ({headingTitle, ProductData}) => {
      const [AllProduct, setAllProduct] = useState(ProductData)


      // const [AllProducts, setAllProducts] = useState([]);
      const [page , setPage] = useState(1);
      const navigate = useNavigate()
      const dispatch = useDispatch();
      const {productId} = useParams();
      
      const {data, status} = useSelector((state) => state.product)
  
    
      useEffect(() => {
        dispatch(FetchDataProduct(`https://dummyjson.com/products${productId}`))
      }, [])
      
      useEffect(() => {
        if (status === "IDLE" ) {
          setAllProduct(data.products )
        }
      }, [data, status]) 


      
    // HandelAddToCart functionality
    const HandelAddToCart = (items) => {
      dispatch(addToCart(items))
    }


  
    return (
      <>
        <div className='mt-32'>
           <div className="container">
                <h2 className='font-bold sm:text-[29px] md:text-[33px] lg:text-[39px] pb-12'>
                   {headingTitle ?  headingTitle : "Title is Missing"}
                </h2>

                  <Slider {...settings} className='flex justify-between'>
                    {AllProduct?.map((ProductItem, id) => (
                <div className='w-[100%]'>
                      <Products key={id}
                        AddToCart={() => HandelAddToCart(ProductItem)}
                        image={ProductItem.thumbnail}
                        ProductName={ProductItem.title}
                        bize={ 
                          ProductItem.bize === true ? (
                            <Button 
                            title={ProductItem.bizeItem === true ? 'New' : ProductItem.discountOffer}
                            className={'bg-black text-[10px] md:text-base text-white py-[4px] md:py-[9px] px-[23px] md:px-[33px] '}
                          /> 
                          ): null
                        
                        }
                      />
                </div>
                      ))}
                  </Slider>  
          </div>
        </div>
      </>
    )
  }
  
  export default NewArrivals