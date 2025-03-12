import React, { useState } from "react";

const EditTryout = () => {
  const [namaTryout, setNamaTryout] = useState("tryout utbk snbt 2025 ep. 1"); // Contoh default nama tryout

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tryout diperbarui:", namaTryout);
  };

  return (
    <div className="flex items-center justify-center bg-[#f5f0e8] min-h-screen w-screen">
      <div className="bg-white p-6 rounded-[20px] shadow-md border w-[500px]">
        <h1 className="text-lg font-bold text-gray-800 mb-4">Edit Tryout</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Nama Tryout
            </label>
            <input
              type="text"
              value={namaTryout}
              onChange={(e) => setNamaTryout(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <hr className="border-gray-300 mb-4" />
          <button
            type="submit"
            className="w-full bg-[#2e4460] text-white py-2 rounded-full hover:bg-[#1e3247] transition"
          >
            Perbarui
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTryout;
