import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";
import Banner from "../pages/home/banner/Banner";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
