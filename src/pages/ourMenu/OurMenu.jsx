import React from "react";
import menuBanner from "../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <img
        src={menuBanner}
        alt="menu-banner"
      />
    </div>
  );
};

export default OurMenu;
