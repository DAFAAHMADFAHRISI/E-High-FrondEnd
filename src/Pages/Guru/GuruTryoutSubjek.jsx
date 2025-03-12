import React from "react";

const GuruTryoutSubjek = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f0e8] p-6 w-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Tes Potensi Skolastik
      </h1>

      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg border">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Penalaran Umum
          </h2>
          <button className="bg-[#2e4460] text-white px-4 py-1 rounded-md text-sm hover:bg-[#1e3247] transition">
            Buat Soal
          </button>
        </div>

        {/* Input Soal */}
        <textarea
          placeholder="Soal"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 font-bold text-blue-800"
        />

        {/* Pilihan Jawaban */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            className="p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            className="p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            className="p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            className="p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Jawaban Benar */}
        <input
          type="text"
          placeholder="Jawaban yang benar:"
          className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-blue-900 font-bold"
        />

        {/* Pembahasan */}
        <textarea
          placeholder="Pembahasan:"
          className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-blue-900 font-bold"
        />

        {/* Tombol Edit */}
        <button className="bg-[#2e4460] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1e3247] transition">
          Edit
        </button>
      </div>
    </div>
  );
};

export default GuruTryoutSubjek;
