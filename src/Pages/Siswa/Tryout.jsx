export default function SiswaTryout() {
  return (
    <div className="bg-[#F5F0E9] flex flex-col items-center p-6 min-h-screen w-screen">
      <div className="w-full max-w-4xl">
        <div className="flex items-center mb-4">
          <a href="/Siswa/DashBoard">
            <button className="bg-[#1E3A5F] text-white">&#8592;</button>
          </a>

          <h1 className="text-2xl font-bold text-black">TRYOUT</h1>
        </div>

        <div className="bg-[#1E3A5F] text-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center">
            Belum Dikerjakan
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[6, 7, 8, 9].map((ep) => (
              <div
                key={ep}
                className="bg-gray-200 text-gray-800 p-4 rounded-lg flex justify-between items-center"
              >
                <p className="text-sm">tryout utbk snbt 2025 ep.{ep}</p>
                <button className="bg-[#1E3A5F] text-white px-4 py-1 rounded-lg text-sm">
                  Lihat
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2E3A5F] text-white p-6 rounded-xl shadow-md mt-6">
          <h3 className="text-lg font-semibold text-center">
            Telah Dikerjakan
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[4, 5].map((ep) => (
              <div
                key={ep}
                className="bg-gray-200 text-gray-800 p-4 rounded-lg flex justify-between items-center"
              >
                <p className="text-sm">tryout utbk snbt 2025 ep.{ep}</p>
                <button className="bg-[#1E3A5F] text-white px-4 py-1 rounded-lg text-sm">
                  Lihat
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
