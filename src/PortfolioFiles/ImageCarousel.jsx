// ImageCarousel.jsx

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className={`image-container ${selectedImage === index ? 'selected' : ''}`}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className={selectedImage === index ? 'enlarged' : ''}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
