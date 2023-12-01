function MenusSection({ menus, onHandleClickMenu, selectedPage }) {
  return (
    <div className="w-full h-full flex flex-col space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-10 justify-center mb-4 sm:hidden">
      {menus.map((menu, index) =>
        index !== 0 ? (
          <div
            onClick={() => onHandleClickMenu(menu)}
            key={index}
            className={`h-8 sm:h-10 md:h-12 lg:h-16 flex justify-center items-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold border-b-[1px] rounded-lg hover:cursor-pointer ${
              selectedPage.name === menu.name
                ? "border border-white rounded-lg"
                : "border-b-white hover:border hover:border-white hover:rounded-lg"
            }`}
          >
            {menu.name}
          </div>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
}

export default MenusSection;
