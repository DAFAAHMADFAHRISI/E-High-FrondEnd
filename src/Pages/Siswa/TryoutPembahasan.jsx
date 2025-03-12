export default function SiswaTryoutPembahasan() {
    return (
      <div className="bg-[#F5F0E9] flex flex-col items-center p-6 min-h-screen w-screen">
        <div className="w-full max-w-6xl flex gap-6">
          {/* Sidebar */}
          <div className="bg-[#1E3A5F] text-white p-6 rounded-lg w-1/3">
            <div className="text-center font-semibold text-lg mb-4">
              Aqil Yogi Pramanto
              <p className="text-sm text-gray-300">006527262899</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg text-center mb-4">
              <p className="font-semibold">Tes Potensi Skolastik</p>
              <p className="text-sm text-gray-300">Literasi dalam bahasa indonesia tahun 2025</p>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => (
                <button
                  key={i}
                  className={`p-2 rounded-lg ${i === 0 ? 'bg-green-400 text-black' : 'bg-gray-600'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
  
          {/* Content */}
          <div className="bg-[#1E3A5F] text-white p-6 rounded-lg w-2/3 flex flex-col items-center">
            <div className="w-full h-40 bg-gray-400 rounded-lg mb-4"></div>
            <p className="text-center text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <button className="bg-green-400 text-black p-3 rounded-lg">Lorem Ipsum is simply dummy</button>
              <button className="bg-gray-600 p-3 rounded-lg">Lorem Ipsum is simply dummy</button>
              <button className="bg-gray-600 p-3 rounded-lg">Lorem Ipsum is simply dummy</button>
              <button className="bg-red-400 text-black p-3 rounded-lg">Lorem Ipsum is simply dummy</button>
            </div>
            <div className="bg-white text-black p-4 rounded-lg mt-6 text-center">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="flex justify-between w-full mt-4">
              <button className="bg-gray-600 text-white p-2 rounded-lg">previous</button>
              <button className="bg-gray-600 text-white p-2 rounded-lg">next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  