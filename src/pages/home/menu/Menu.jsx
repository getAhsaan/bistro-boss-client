import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const handleViewFullMenu = () => {
    setVisibleItemsCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="my-20">
      <SectionHeader
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      />

      <div className="md:grid grid-cols-2 gap-8 md:mt-12 md:mb-6 p-4 md:p-0">
        {menu.slice(0, visibleItemsCount).map((singleMenu) => (
          <MenuItem
            key={singleMenu._id}
            singleMenu={singleMenu}
          />
        ))}
      </div>
      <div className="text-center">
        {visibleItemsCount < menu.length && (
          <button
            className="btn btn-outline border-0 border-b-2"
            onClick={handleViewFullMenu}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
