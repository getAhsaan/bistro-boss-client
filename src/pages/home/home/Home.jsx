import React from "react";
import Banner from "../banner/Banner";
import OrderSection from "../orderSection/OrderSection";
import BistroSection from "../bistroSection/BistroSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OrderSection></OrderSection>
      <BistroSection></BistroSection>
    </div>
  );
};

export default Home;
