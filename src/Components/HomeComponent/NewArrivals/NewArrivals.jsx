import React, {useState, Link, useEffect} from 'react'
import Products from '../../CommonComponents/Products'
import Button from '../../CommonComponents/Button';
import Slider from "react-slick";
import { FaLongArrowAltRight , FaLongArrowAltLeft} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchDataProduct } from '../../../Redux/AllSlice/ProduceSlice/ProductSlice';




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
      
      const {data, status} = useSelector((state) => state.product)
  
    
      useEffect(() => {
        dispatch(FetchDataProduct("https://dummyjson.com/products"))
      }, [])
      
      useEffect(() => {
        if (status === "IDLE" ) {
          setAllProduct(data.products )
        }
      }, [data, status]) 

  
    return (
      <>
        <div className='mt-32'>
           <div className="container">
                <h2 className='font-bold text-[39px] pb-12'>
                   {headingTitle ?  headingTitle : "Title is Missing"}
                </h2>
  
  
                <Slider {...settings} className='flex justify-between'>
                  {AllProduct?.map((item, id) => (
  
                    <Products key={id}
                      image={item.thumbnail}
                      ProductName={item.title}
                      bize={ 
                        item.bize === true ? (
                          <Button 
                          title={item.bizeItem === true ? 'New' : item.discountOffer}
                          className={'bg-black text-[10px] md:text-base text-white py-[4px] md:py-[9px] px-[23px] md:px-[33px] '}
                         /> 
                        ): null
                      
                      }
                    />
                    ))}
                </Slider>
  
          </div>
        </div>
      </>
    )
  }
  
  export default NewArrivals