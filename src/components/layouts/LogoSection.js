function LogoSection({ onHandleClickMenu, menu }) {
  return (
    <div
      className="mb-4 flex flex-col justify-center items-center hover:cursor-pointer"
      onClick={() => onHandleClickMenu(menu)}
    >
      <div className="bg-white w-max p-2 rounded-2xl">
        <img src="logo.png" alt="logo.png" className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <h3 className="text-white font-bold text-lg md:text-2xl mt-2">Quran App</h3>
    </div>
  );
}

export default LogoSection;
