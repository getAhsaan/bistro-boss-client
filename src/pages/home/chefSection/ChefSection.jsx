import React from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import pic1 from "../../../assets/menu/pizza-bg.jpg"
import pic2 from "../../../assets/menu/salad-bg.jpg"
import pic3 from "../../../assets/menu/soup-bg.jpg"

const ChefSection = () => {
  return (
    <div className="md:mt-20 mt-8">
      <SectionHeader
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionHeader>
     <div className="md:grid grid-cols-3 md:gap-8">
     <div className=" shadow-xl bg-[#F3F3F3] my-10">
        <figure>
          <img
            src={pic1}
            alt="pizza"
          />
        </figure>
        <div className=" text-center p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Caeser Pizza</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="">
            <button className="btn btn-outline border-0 border-b-2 text-orange-300 hover:text-orange-300 bg-[#E8E8E8]">Add To Cart</button>
          </div>
        </div>
      </div>
     <div className=" shadow-xl bg-[#F3F3F3] my-10">
        <figure>
          <img
            src={pic2}
            alt="salad"
          />
        </figure>
        <div className=" text-center p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="">
            <button className="btn btn-outline border-0 border-b-2 text-orange-300 hover:text-orange-300 bg-[#E8E8E8]">Add To Cart</button>
          </div>
        </div>
      </div>
     <div className=" shadow-xl bg-[#F3F3F3] my-10">
        <figure>
          <img
            src={pic3}
            alt="pizza"
          />
        </figure>
        <div className=" text-center p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Caeser Soup</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="">
            <button className="btn btn-outline border-0 border-b-2 text-orange-300 hover:text-orange-300 bg-[#E8E8E8]">Add To Cart</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ChefSection;
