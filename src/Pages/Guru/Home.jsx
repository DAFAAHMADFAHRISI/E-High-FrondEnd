import React from "react";

const Home = () => {
  const tryouts = [
    { nama: "tryout utbk snbt 2025 ep. 1", jumlahSoal: 120, totalSoal: 170 },
    { nama: "tryout utbk snbt 2025 ep. 2", jumlahSoal: 1, totalSoal: 0 },
  ];

  return (
    <div className=" bg-[#F5F0E9] flex flex-col items-center p-10 min-h-screen w-screen">
      <button className="bg-[#2F4A6D] text-white px-6 py-2 rounded-full shadow-md">
        Nama Guru
      </button>
      <div className="mt-6 w-full max-w-4xl">
        <table className="w-full border-collapse shadow-lg">
          <thead>
            <tr className="bg-[#2F4A6D] text-white">
              <th className="p-3 text-left">Nama Tryout</th>
              <th className="p-3 text-left">Jumlah Soal</th>
              <th className="p-3 text-left">Total Soal</th>
            </tr>
          </thead>
          <tbody>
            {tryouts.map((tryout, index) => (
              <tr key={index} className="border-b bg-white">
                <td className="p-3">{tryout.nama}</td>
                <td className="p-3 text-gray-600">{tryout.jumlahSoal}</td>
                <td className="p-3 text-gray-600">{tryout.totalSoal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
