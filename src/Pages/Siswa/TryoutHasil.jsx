export default function SiswaTryoutHasil() {
  return (
    <div className="bg-[#F5F0E9] flex flex-col items-center p-6 min-h-screen w-screen">
      <div className="w-full max-w-5xl space-y-6">
        <div className="grid grid-cols-4 gap-4 bg-[#1E3A5F] text-white p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <p>Nilai rata-rata</p>
            <span className="text-2xl font-bold">763</span>
          </div>
          <div className="flex flex-col items-center">
            <p>Total Jawaban Benar</p>
            <span className="text-2xl font-bold">67</span>
          </div>
          <div className="flex flex-col items-center">
            <p>Total Jawaban Salah</p>
            <span className="text-2xl font-bold">9</span>
          </div>
          <div className="flex flex-col items-center">
            <p>Total Jawaban Kosong</p>
            <span className="text-2xl font-bold">2</span>
          </div>
        </div>

        <div className="bg-[#1E3A5F] text-white p-4 rounded-lg">
          <h2 className="text-center text-xl font-semibold">Tes Skolastik</h2>
          {[
            "Penalaran Umum",
            "Pengetahuan dan Pemahaman Umum",
            "Pemahaman Baca dan Menulis",
            "Pengetahuan Kuantitatif",
          ].map((category) => (
            <div key={category} className="mt-4">
              <h3 className="text-lg font-semibold">{category}</h3>
              <div className="grid grid-cols-4 gap-4 p-2">
                {[
                  "Nilai",
                  "Total Jawaban Benar",
                  "Total Jawaban Salah",
                  "Total Jawaban Kosong",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#2C4A6E] p-4 rounded-lg text-center"
                  >
                    <p>{item}</p>
                    <span className="text-xl font-bold">
                      {item === "Nilai"
                        ? "763"
                        : item.includes("Benar")
                        ? "23"
                        : item.includes("Salah")
                        ? "5"
                        : "2"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1E3A5F] text-white p-4 rounded-lg">
          <h2 className="text-center text-xl font-semibold">Tes Literasi</h2>
          {["Literasi Bahasa Indonesia", "Literasi Bahasa Inggris"].map(
            (category) => (
              <div key={category} className="mt-4">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="grid grid-cols-4 gap-4 p-2">
                  {[
                    "Nilai",
                    "Total Jawaban Benar",
                    "Total Jawaban Salah",
                    "Total Jawaban Kosong",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-[#2C4A6E] p-4 rounded-lg text-center"
                    >
                      <p>{item}</p>
                      <span className="text-xl font-bold">
                        {item === "Nilai"
                          ? "763"
                          : item.includes("Benar")
                          ? "23"
                          : item.includes("Salah")
                          ? "5"
                          : "2"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className="bg-[#1E3A5F] text-white p-4 rounded-lg">
          <h2 className="text-center text-xl font-semibold">
            Tes Penalaran Matematika
          </h2>
          <div className="grid grid-cols-4 gap-4 p-2">
            {[
              "Nilai",
              "Total Jawaban Benar",
              "Total Jawaban Salah",
              "Total Jawaban Kosong",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#2C4A6E] p-4 rounded-lg text-center"
              >
                <p>{item}</p>
                <span className="text-xl font-bold">
                  {item === "Nilai"
                    ? "763"
                    : item.includes("Benar")
                    ? "23"
                    : item.includes("Salah")
                    ? "5"
                    : "2"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#1E3A5F] text-white px-6 py-2 rounded-lg">
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
