import React, { useState } from 'react';
import { Carousel } from 'antd';

function Slider() {

  let images = [
    {title:"suits",image:"https://www.yospaza.com//uploads/home_slider/15854778531552772971suits2.jpg"},
    {title:"suits2",image:"https://www.yospaza.com//uploads/home_slider/15854778921552772444heels.jpg"}
  ];
  
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
   
  
    return (

<Carousel autoplay>

{ images.map((image,i) => (
        <img
        key={i}
        className="d-block w-100"
        src={image.image}
        alt={image.title}
      />
)) 
}
</Carousel>

);
}
  
export default Slider;