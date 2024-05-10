import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery({images}) {

  const imgs = images;
  //console.log(imgs);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  return (
    
    <>
    <Slider {...settings}>
    {images.map(function(x){
      return <img src={x} alt="" className="pr-2 "/>;
   })}
    </Slider>

   </>
      

  
  );
}
