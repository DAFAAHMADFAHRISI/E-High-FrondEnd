import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const GuruTryout = () => {
  const tryouts = [
    { id: 1, nama: "tryout utbk snbt 2025 ep. 1" },
    { id: 2, nama: "tryout utbk snbt 2025 ep. 2" },
    { id: 3, nama: "tryout utbk snbt 2025 ep. 3" },
  ];

  return (
    <div className=" bg-gray-100 flex justify-center items-center min-h-screen w-screen">
      <div className="w-3/4 bg-[#f5f0e6] p-6 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Tryout UTBK SNBT 2025</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#2f4a64] text-white">
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Nama Tryout</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tryouts.map((tryout, index) => (
              <tr key={tryout.id} className="border-b">
                <td className="p-3 text-gray-800">{index + 1}</td>
                <td className="p-3 text-blue-700">{tryout.nama}</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-gray-600 hover:text-blue-700">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-gray-600 hover:text-red-700">
                    <FiTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end">
          <button className="bg-[#2f4a64] text-white px-4 py-2 rounded-lg hover:bg-[#1e364d]">
            Tambah Tryout Baru
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuruTryout;
