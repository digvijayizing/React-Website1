import React   from 'react'
import './Cp.css';
import c1 from "../image/c1.jpg"
import c2 from "../image/c2.jpg"
import c3 from "../image/c3.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import local images

const Cara = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [c1, c2, c3];

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index} className="carousel-slide">
          <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default Cara;


