// Navbar.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ menus, onHandleClickMenu, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode(); // Panggil fungsi toggleDarkMode saat tombol tema ditekan
  };

  // Gunakan useEffect untuk menangani perubahan lebar layar
  useEffect(() => {
    const handleResize = () => {
      // Tandai hamburger menu menjadi tidak aktif saat lebar layar mencapai 640px
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    // Tambahkan event listener untuk merespons perubahan lebar layar
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`bg-green-600 p-4 ${isMenuOpen ? 'flex-col items-start' : 'flex justify-between items-center'}`}>
      <div className="flex items-center">
        {/* Logo */}
        <img
          src="/logo123.png" // Ganti dengan path atau URL logo Anda
          alt="Logo"
          className="h-10 w-auto cursor-pointer hover:underline" 
          onClick={() => onHandleClickMenu(menus[0])}
        />
        <span className="text-white ml-2 font-bold text-lg">My-quran</span>
      </div>

      {/* Hamburger menu icon for small screens */}
      <div className="cursor-pointer sm:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Responsive menu items for small screens */}
      {isMenuOpen && (
        <div className="bg-green-600 p-4 flex-col items-start">
          <button onClick={toggleTheme} className={`mb-4 ${isDarkMode ? 'animate-spin' : ''}`}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
          <ul className="flex flex-col space-y-2">
            {menus.map((menu, index) => (
              <li key={index}>
                <button
                  className="cursor-pointer hover:underline hover:text-gray-300"
                  onClick={() => onHandleClickMenu(menu)}
                >
                  {menu.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop menu for larger screens */}
      <ul className={`hidden sm:flex space-x-4 text-white mt-2 ${isMenuOpen ? 'hidden' : 'flex'}`}>
        {menus.slice(1).map((menu, index) => (
          <li key={index}>
            <button
              className="cursor-pointer hover:underline hover:text-gray-300 font-bold text-sm" 
              onClick={() => onHandleClickMenu(menu)}
            >
              {menu.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Dark Mode icon for desktop */}
      <button onClick={toggleTheme} className={`mb-4 hidden sm:inline-block ${isDarkMode ? '' : ''}`}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
    </div>
  );
};

export default Navbar;
