// import React, { useReducer } from "react";
// import Slider from "react-slick";
// import { initialState, reducer } from "./reducer";

// import "./App.scss";

// const App = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     centerMode: true,
//     centerPadding: "60px",
//     pauseOnHover: true,
//     autoplaySpeed: 500,
//     draggable: true,
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {state.images.map((item) => {
//           return <img src={item.src} alt="" />;
//         })}
//       </Slider>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Card from "../components/feature/Card/Card";

const App = () => {
  let user = {
    name: "Bgdo",
    age: "25",
  };

  return (
    <div>
      <Card obj={user} />
    </div>
  );
};

export default App;
