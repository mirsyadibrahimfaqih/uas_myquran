// File: Doa.js

import React, { useEffect, useState } from "react";

const Doa = () => {
  const url = 'https://islamic-api-zhirrr.vercel.app/api/doaharian';
  const [doa, setDoa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDataDoa = async () => {
    try {
      const response = await fetch(url);
      const dataDoa = await response.json();
      setDoa(dataDoa.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataDoa();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Doa Harian</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doa.map((item, index) => (
          <li key={index} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.arabic}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doa;
