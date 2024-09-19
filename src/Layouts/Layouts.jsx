import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";

export const Layouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
