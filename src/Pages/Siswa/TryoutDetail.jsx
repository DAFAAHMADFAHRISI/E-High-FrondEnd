export default function SiswaTryoutDetail() {
  return (
    <div className="bg-[#F5F0E9] flex flex-col items-center p-6 min-h-screen w-screen ">
      <div className="w-full max-w-4xl">
      <div className="flex items-center mb-4">
          <a href="/Siswa/Tryout">
            <button className="bg-[#1E3A5F] text-white px-4 py-2 rounded-full mr-4">
              &#8592;
            </button>
          </a>
          <div className="bg-[#1E3A5F] text-white px-6 py-3 rounded-lg text-lg font-semibold">
            tryout utbk snbt 2025 ep.5
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#1E3A5F] text-white p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📖</span>
              <p className="text-lg font-semibold">Jumlah Soal</p>
            </div>
            <span className="mt-2 bg-gray-300 text-black px-3 py-1 rounded-lg">100</span>
          </div>
          <div className="bg-[#1E3A5F] text-white p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏰</span>
              <p className="text-lg font-semibold">Waktu</p>
            </div>
            <span className="mt-2 bg-gray-300 text-black px-3 py-1 rounded-lg">40 Menit</span>
          </div>
        </div>

        <div className="bg-[#1E3A5F] text-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center">
            Peraturan Tryout
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold">Persiapan Sebelum Tryout</h4>
              <ul className="text-sm list-disc pl-5">
                <li>
                  Pastikan perangkat dalam kondisi baik dan koneksi stabil.
                </li>
                <li>Gunakan browser terbaru.</li>
                <li>Siapkan alat tulis jika diperlukan.</li>
                <li>Cari tempat yang nyaman.</li>
                <li>Pastikan daya baterai cukup atau sambungkan ke charger.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Saat Tryout Berlangsung</h4>
              <ul className="text-sm list-disc pl-5">
                <li>Tryout memiliki batas waktu otomatis.</li>
                <li>Dilarang membuka tab atau aplikasi lain.</li>
                <li>Kejakan soal dengan jujur.</li>
                <li>Jawaban hanya bisa dikumpulkan sekali.</li>
                <li>Jika terjadi kendala teknis, hubungi tim support.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#1E3A5F] text-white px-6 py-2 rounded-lg text-lg font-semibold">
            MULAI
          </button>
        </div>
      </div>
    </div>
  );
}
