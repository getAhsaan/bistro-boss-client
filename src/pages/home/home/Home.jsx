import React from "react";
import Banner from "../banner/Banner";
import OrderSection from "../orderSection/OrderSection";
import BistroSection from "../bistroSection/BistroSection";
import Menu from "../menu/Menu";

const Home = () => {
  return (
    <div>
      <OrderSection></OrderSection>
      <BistroSection></BistroSection>
      <Menu></Menu>
    </div>
  );
};

export default Home;
