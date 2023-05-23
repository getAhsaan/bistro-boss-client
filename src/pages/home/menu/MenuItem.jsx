import React from "react";
import menuIcon from "../../../assets/menu/menuIcon.png";

const MenuItem = ({singleMenu }) => {
  const { name, price } = singleMenu;
//   console.log(singleMenu);
  return (
    <>

      <div className="flex gap-4 md:items-center my-6 ">
        <div>
          <img
            src={menuIcon}
            alt=""
          />
        </div>
        <div>
          <div className="flex gap-4 justify-between">
            <p className="md:text-xl"> {name} ------------------</p>
            <p className="md:text-xl text-[#BB8506]">${price}</p>
          </div>
          <p className="md:text-base text-sm">
            Roasted duck breast (served pink) with gratin potato and a griottine
            cherry sauce
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
