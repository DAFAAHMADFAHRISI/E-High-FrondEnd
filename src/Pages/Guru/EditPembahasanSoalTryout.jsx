export default function EditPembahasanSoalTryout() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f5efe4] p-4">
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-lg border border-gray-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Edit Pembahasan Soal Tryout
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Jawaban</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Pembahasan</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800">
              Simpan
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full max-w-lg mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600">
            Sebelumnya
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600">
            Selanjutnya
          </button>
        </div>
      </div>
    );
  }
  