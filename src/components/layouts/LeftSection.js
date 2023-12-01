import React from "react";
import LogoSection from "./LogoSection";
import MenusSection from "./MenuSection";
// import QuickSearchSection from "./QuickSearchSection";

function LeftSection({ menus, onHandleClickMenu, selectedPage }) {
  return (
    <div className="bg-teal-700 h-full lg:w-1/5 md:w-1/4 sm:w-1/3 w-full flex flex-col pt-4 px-4 items-center">
      {/* Logo Section */}
      <LogoSection onHandleClickMenu={onHandleClickMenu} menu={menus[0]} />

      {/* Menu Section */}
      <MenusSection
        menus={menus}
        onHandleClickMenu={onHandleClickMenu}
        selectedPage={selectedPage}
      />

      {/* Quick Search Section (Hidden on Mobile) */}
      {/* <QuickSearchSection className="hidden lg:flex" /> */}
    </div>
  );
}

export default LeftSection;
