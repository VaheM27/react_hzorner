import Slider from "react-slick";

import "./Sliders.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = (images) => {
  console.log(images);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.images.map((item) => {
        return <img src={item.src} alt="" />;
      })}
    </Slider>
  );
};

export default Sliders;
