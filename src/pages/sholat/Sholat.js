import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosque } from "@fortawesome/free-solid-svg-icons";

const BacaanSholat = () => {
  const url = "https://islamic-api-zhirrr.vercel.app/api/bacaanshalat";
  const itemsPerPage = 4;
  const [bacaanSholat, setBacaanSholat] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getDataBacaanSholat = async () => {
    try {
      const response = await fetch(url);
      const databacaanSholat = await response.json();
      setBacaanSholat(databacaanSholat);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataBacaanSholat();
  }, []);

  const totalPages = Math.ceil(bacaanSholat.length / itemsPerPage);
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = bacaanSholat.slice(startIndex, endIndex);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="text-center bg-green-500 p-6 rounded shadow-md max-w-2xl mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        <FontAwesomeIcon icon={faMosque} className="mr-2 text-3xl" />
        Bacaan Sholat
      </h1>
      <div className="flex flex-wrap justify-center">
        {displayedItems.map((item, index) => (
          <div key={index} className="w-full p-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-blue-500 font-bold mb-2">{item.name}</h3>
              <h3 className="text-green-500">{item.arabic}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 ${pageNumber === 0 && 'opacity-50 cursor-not-allowed'} transition duration-300 hover:bg-blue-700 hover:text-gray-100`}
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${pageNumber === totalPages - 1 && 'opacity-50 cursor-not-allowed'} transition duration-300 hover:bg-blue-700 hover:text-gray-100`}
          onClick={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BacaanSholat;
