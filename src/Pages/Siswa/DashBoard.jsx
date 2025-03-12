export default function SiswaDashBoard() {
    return (
      <div className="bg-[#F5F0E9] min-h-screen p-6 screen w-screen ">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
          <div className="flex items-center mt-2">
            <div className="bg-[#1E3A5F] text-white p-4 rounded-lg text-center w-16">
              <p className="text-sm">Hari</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <p className="ml-4 text-lg font-semibold text-gray-800">
              Usaha hari ini, kampus impian esok hari!
            </p>
          </div>
        </div>
        
        <div className="bg-[#1E3A5F] text-white p-4 rounded-xl shadow-md mt-6">
          <h3 className="text-lg font-semibold">Skor Tertinggi</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[{ rank: 1, score: 800 }, { rank: 2, score: 804 }, { rank: 3, score: 500 }].map((item) => (
              <div key={item.rank} className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold">{item.rank}</p>
                <p className="text-sm">tryout utbk snbt 2025 ep.{item.rank}</p>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: `${(item.score / 1000) * 100}%` }}></div>
                </div>
                <p className="text-sm mt-1 text-right">{item.score}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#2E3A5F] text-white p-4 rounded-xl shadow-md mt-6">
          <h3 className="text-lg font-semibold">Tryout Belum Dikerjakan</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[6, 7, 8, 9].map((ep) => (
              <div key={ep} className="bg-gray-200 text-gray-800 p-4 rounded-lg flex justify-between items-center">
                <p className="text-sm">tryout utbk snbt 2025 ep.{ep}</p>
                <button className="bg-[#1E3A5F] text-white px-4 py-1 rounded-lg text-sm">Lihat</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  