import React from "react";

const GuruTryoutDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f5f0e8] p-6 min-h-screen w-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Tryout UTBK SNBT 2025 ep. 1
      </h1>

      <div className="w-full max-w-xl space-y-6">
        {/* Tes Potensi Skolastik */}
        <div className="bg-[#2e4460] text-white font-semibold text-center py-2 rounded-t-md">
          Tes Potensi Skolastik
        </div>
        <div className="border rounded-b-md overflow-hidden">
          <div className="bg-white p-3 border-b text-blue-600">Penalaran Umum</div>
          <div className="bg-white p-3 border-b text-blue-600">Pemahaman Bacaan dan Menulis</div>
          <div className="bg-white p-3 border-b text-blue-600">Pengetahuan dan Pemahaman Umum</div>
          <div className="bg-white p-3 text-blue-600">Penalaran Kuantitatif</div>
        </div>

        {/* Tes Literasi */}
        <div className="bg-[#2e4460] text-white font-semibold text-center py-2 rounded-t-md">
          Tes Literasi
        </div>
        <div className="border rounded-b-md overflow-hidden">
          <div className="bg-white p-3 border-b text-blue-600 ">Literasi Bahasa Indonesia</div>
          <div className="bg-white p-3 text-blue-600">Literasi Bahasa Inggris</div>
        </div>

        {/* Penalaran Matematika */}
        <div className="bg-[#2e4460] text-white font-semibold text-center py-2 rounded-t-md">
          Penalaran Matematika
        </div>
        <div className="border rounded-b-md overflow-hidden">
          <div className="bg-white p-3 text-blue-600">Penalaran Matematika</div>
        </div>
      </div>
    </div>
  );
};

export default GuruTryoutDetail;
