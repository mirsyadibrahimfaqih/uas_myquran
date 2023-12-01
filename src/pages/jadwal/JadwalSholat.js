import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hadith = () => {
  const [waktuSholat, setWaktuSholat] = useState({});
  const [jamSaatIni, setJamSaatIni] = useState('');
  const [tanggalSaatIni, setTanggalSaatIni] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.aladhan.com/v1/timings', {
          params: {
            latitude: -6.2088,
            longitude: 106.8456,
            method: 5,
            tune: 0,
            midnightMode: 'standard',
            school: 1,
            offset: 0,
            timestamp: Math.floor(new Date().getTime() / 1000),
          },
        });

        setWaktuSholat(response.data.data.timings);
        updateJamSaatIni();
        updateTanggalSaatIni();
      } catch (error) {
        console.error('Error fetching waktu sholat:', error);
      }
    };

    const updateJamSaatIni = () => {
      const jam = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      setJamSaatIni(jam);
    };

    const updateTanggalSaatIni = () => {
      const tanggal = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setTanggalSaatIni(tanggal);
    };

    fetchData();

    // Update jam setiap detik
    const interval = setInterval(() => {
      updateJamSaatIni();
      updateTanggalSaatIni();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-200 p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-700 text-center">Waktu Sholat</h1>
        <p className="text-lg mb-2 text-gray-700">Tanggal Saat Ini: {tanggalSaatIni}</p>
        <p className="text-lg mb-4 text-gray-700">Jam Saat Ini: {jamSaatIni}</p>
        <ul className="list-disc pl-4 space-y-2">
          <li className="text-gray-700 bg-white p-4 rounded shadow">
            Shubuh: {waktuSholat.Fajr}
          </li>
          <li className="text-gray-700 bg-white p-4 rounded shadow">
            Dhuhur: {waktuSholat.Dhuhr}
          </li>
          <li className="text-gray-700 bg-white p-4 rounded shadow">
            Asharr: {waktuSholat.Asr}
          </li>
          <li className="text-gray-700 bg-white p-4 rounded shadow">
            Maghrib: {waktuSholat.Maghrib}
          </li>
          <li className="text-gray-700 bg-white p-4 rounded shadow">
            Isya: {waktuSholat.Isha}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hadith;
