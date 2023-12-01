// Layouts.js
import { useState } from "react";
import Navbar from "../../components/layouts/Navbar";
import ReadQuran from "../read_quran";
import Bookmark from "../bookmark";
import Home from "../home";
import Jadwal from "../jadwal/JadwalSholat";
import HadithDisplay from "../hadist";
import Profiles from "../profile/Profile";
import BacaanSholat from "../sholat/Sholat";
import { lightTheme, darkTheme } from "../layouts/theme"
import Doa from "../doa/DoaHarian";
import Asmaulhusna from "../AsmaulHusna/AsmaulHusna";

function Layouts() {
  const menus = [
    {
      name: "Home",
      page: <Home />,
    },
    {
      name: "Read Quran",
      page: <ReadQuran />,
    },
    {
      name: "Bookmarks",
      page: <Bookmark />,
    },
    {
      name: "Hadits",
      page: <HadithDisplay />,
    },
    {
      name: "Doa",
      page: <Doa />,
    },
    {
      name: "Prayer Times",
      page: <Jadwal />,
    },
    {
      name: "Prayer Sholat",
      page: <BacaanSholat />,
    },
    {
      name: "AsmaulHusna",
      page: <Asmaulhusna/>,
    },
    {
      name: "Profiles",
      page: <Profiles />,
    },
  ];

  const [selectedPage, setSelectedPage] = useState(menus[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  function onHandleClickMenu(menu) {
    setSelectedPage(menu);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`h-screen flex flex-col ${theme.background} ${theme.text}`}>
      {/* Navbar at the top */}
      <Navbar menus={menus} onHandleClickMenu={onHandleClickMenu} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        {selectedPage.page}
      </div>
    </div>
  );
}

export default Layouts;
