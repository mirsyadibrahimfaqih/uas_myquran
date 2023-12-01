import React, { useEffect, useState } from "react";

const Hadits = () => {
  const url = 'https://api.hadith.gading.dev/books/bukhari/52';
  const [haditsData, setHaditsData] = useState({});

  const getDataHadits = async () => {
    try {
      const response = await fetch(url);
      const dataHadits = await response.json();
      console.log("Data dari API:", dataHadits);
      setHaditsData(dataHadits || {});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDataHadits();
  }, []);

  return (
    <div className="text-center bg-green-500 p-6 rounded shadow-md max-w-2xl mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Hadits</h1>
      {haditsData.data && haditsData.data.contents && Object.keys(haditsData.data.contents).length > 0 && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-blue-500 text-lg font-bold mb-2">{haditsData.data.contents.arab}</h3>
          <p className="text-green-500">{haditsData.data.contents.id}</p>
        </div>
      )}
    </div>
  );
}

export default Hadits;
