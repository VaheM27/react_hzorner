import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>404 page is not found </h1>
      <Link to="/">Go home </Link>
    </div>
  );
};
