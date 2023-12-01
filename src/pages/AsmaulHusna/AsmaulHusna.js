import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const Asmaulhusna = () => {
  const url = 'https://islamic-api-zhirrr.vercel.app/api/asmaulhusna';
  const itemsPerPage = 21;
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getDataAsmaulHusna = async () => {
    try {
      const response = await fetch(url);
      const dataAsmaulHusna = await response.json();
      setAsmaulHusna(dataAsmaulHusna.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataAsmaulHusna();
  }, []);

  const totalPages = Math.ceil(asmaulHusna.length / itemsPerPage);

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = asmaulHusna.slice(startIndex, endIndex);

  const handlePreviousClick = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <div className="text-center bg-gray-200 p-6 rounded shadow-md mx-4 md:max-w-2xl md:mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Asmaul Husna</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-blue-500 text-lg font-semibold mb-2">{item.arabic}</h3>
            <p className="text-green-500 text-sm">{item.latin}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handlePreviousClick}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNextClick}
          disabled={pageNumber === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Asmaulhusna;
