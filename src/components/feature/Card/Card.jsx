import React from "react";
import PropTypes from "prop-types";

const Card = ({ obj }) => {
  return (
    <div>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
    </div>
  );
};

Card.propTypes = {
  obj: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default Card;
