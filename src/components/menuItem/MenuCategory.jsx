import React from "react";
import MenuItem from "../../pages/home/menu/MenuItem";
import useMenu from "../../hooks/useMenu";

const MenuCategory = () => {
  const menu = useMenu();

  return (
    <div>
      <div className="md:grid grid-cols-2 gap-8 md:mt-12 md:mb-6 p-4 max-w-6xl mx-auto">
        {menu.slice(0, 6).map((singleMenu) => (
          <MenuItem
            key={singleMenu._id}
            singleMenu={singleMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
