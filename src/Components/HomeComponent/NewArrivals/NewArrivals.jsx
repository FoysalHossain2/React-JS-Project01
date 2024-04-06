import React, {useState} from 'react'
import Products from '../../CommonComponents/Products'
import Button from '../../CommonComponents/Button';
import Slider from "react-slick";
import { FaLongArrowAltRight , FaLongArrowAltLeft} from "react-icons/fa";




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
          }
        }
      ]
    };
    
    
    
  const NewArrivals = ({headingTitle, ProductData}) => {
    const [AllProduct, setAllProduct] = useState(ProductData)

  return (
    <>
      <div className='mt-32'>
         <div className="container">
              <h2 className='font-bold text-[39px] pb-12'>
                 {headingTitle ?  headingTitle : "Title is Missing"}
              </h2>

              <Slider {...settings} className='flex justify-between'>
                
                {AllProduct ?.map((item) => (

                  <Products key={item.id}
                    image={item.img}
                    colorVariant={item.color === true ? true : false} 
                    bize={ 
                      item.bize === true ? (
                        <Button 
                      title={item.bizeItem === true ? 'New' : item.discountOffer}
                      className={'bg-black text-white py-[9px] px-[33px]'}
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