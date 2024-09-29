import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mashna from "../../src/images/mashna.jpg";
import Mashna2 from "../../src/images/mashna2.jpg";
import Mashna3 from "../../src/images/mashna3.jpg";

import "./App.scss";
import Slider from "react-slick";

const App = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Mashna} alt="" />
        </div>
        <div>
          <img src={Mashna2} alt="" />
        </div>
        <div>
          <img src={Mashna3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default App;
