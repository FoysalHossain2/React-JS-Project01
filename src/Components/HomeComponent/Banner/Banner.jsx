import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BannerImg from '../../../assets/BannerImg.png'


const Banner = () => {



  const [currentSlide , setCurrentSlide] = useState(1)

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          padding: "10px",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    beforeChange: (currentSlideNumber , nextCurrentSlideNumber) => {
      setCurrentSlide(nextCurrentSlideNumber + 1);
    },


    customPaging: (i) => (
      <>
        {i <= 3 && ( 
          <div
            style={                
               i + 3               
               ?{
                  width: "36px",
                  padding: "20px 0",
                  borderRight: "4px solid #fff",
                }
                :
                {                    
                  width: "36px",
                  padding: "20px 0",
                  borderRight: "4px solid #fff",
                }
                
            }
           >
           { i + 1 === 4 ? `${i + 1}...` : `0${i + 1}` } 
         </div>
        ) }
    
      </>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };



  return (
    <>
      <Slider {...settings}>
      <div>
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>

      </Slider>
    </>
  )
}

export default Banner