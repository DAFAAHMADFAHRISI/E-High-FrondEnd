export default function SiswaTryoutPengerjaan() {
    return (
      <div className="bg-[#F5F0E9] flex flex-col items-center p-6 min-h-screen w-screen">
        <div className="w-full max-w-6xl flex gap-6">
          {/* Sidebar */}
          <div className="bg-[#1E3A5F] text-white p-6 rounded-lg w-1/3">
            <h2 className="text-lg font-bold text-center mb-4">Selamat Mengerjakan</h2>
            <div className="bg-gray-600 text-white text-center py-2 rounded-md mb-4">
              Waktu Tersisa : 32:56
            </div>
            <div className="bg-gray-600 text-white text-center py-3 rounded-md mb-4 font-semibold">
              Aqil Yogi Pramanto
              <div className="text-sm">006527262899</div>
            </div>
            <div className="bg-gray-600 text-white text-center py-3 rounded-md mb-4 font-semibold">
              Tes Potensi Skolastik
              <div className="text-sm">Literasi dalam bahasa indonesia tahun 2025</div>
            </div>
            {/* Number Navigation */}
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 30 }, (_, i) => (
                <button key={i} className={`p-2 rounded-md ${i === 0 ? 'bg-green-400' : 'bg-gray-700'}`}>{i + 1}</button>
              ))}
            </div>
          </div>
  
          {/* Question Section */}
          <div className="bg-[#1E3A5F] text-white p-6 rounded-lg w-2/3 flex flex-col items-center">
            <div className="bg-gray-400 w-full h-40 mb-4 rounded-lg"></div>
            <p className="text-sm text-center mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
            </p>
            {/* Options */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <button className="bg-gray-600 text-white py-2 px-4 rounded-md">Lorem Ipsum is simply dummy</button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-md">Lorem Ipsum is simply dummy</button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-md">Lorem Ipsum is simply dummy</button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-md">Lorem Ipsum is simply dummy</button>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full mt-6">
              <button className="bg-gray-600 text-white py-2 px-6 rounded-md">previous</button>
              <button className="bg-gray-600 text-white py-2 px-6 rounded-md">next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  