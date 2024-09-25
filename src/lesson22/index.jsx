import React from "react";
import Slider from "react-slick/lib/slider";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 className="slide-content slide-1">1</h3>
        </div>
        <div>
          <h3 className="slide-content slide-2">2</h3>
        </div>
        <div>
          <h3 className="slide-content slide-3">3</h3>
        </div>
        <div>
          <h3 className="slide-content slide-4">4</h3>
        </div>
        <div>
          <h3 className="slide-content slide-5">5</h3>
        </div>
        <div>
          <h3 className="slide-content slide-6">6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Index;
