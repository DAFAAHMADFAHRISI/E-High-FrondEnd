import { FaUserCheck, FaClipboardList, FaBook } from "react-icons/fa";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <main className="flex-grow w-full bg-amber-50">
        <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-[#F5EDE4] p-10 rounded-lg">
          <div className="md:w-1/2 text-[#1B2B44]">
            <h2 className="font-bold text-3xl md:text-4xl leading-tight">
              Bersiaplah Menempuh Jenjang Pendidikan Yang Lebih Tinggi
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/santoso tk lulus kuliah.png"
              alt="Education Illustration"
              className="w-80"
            />
          </div>
        </section>

        <section className="relative bg-[#1B2B44] py-10 px-6 mt-[-40px] rounded-t-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: " Learning Untuk Lulus Seleksi Nasional",
                text: "Persiapan SNBT kini lebih mudah dan terarah! Dengan materi lengkap, tryout interaktif, serta analisis skor yang akurat, Lulusin siap membantumu melewati seleksi masuk perguruan tinggi dengan percaya diri.",
              },
              {
                icon: <FaUserCheck className="text-4xl text-white mb-4" />,
                title: "Learning Untuk Lulus Seleksi Nasional",
                text: "Persiapan SNBT kini lebih mudah dan terarah! Dengan materi lengkap, tryout interaktif, serta analisis skor yang jelas, kamu siap menentukan strategi terbaik.",
              },
              {
                icon: <FaClipboardList className="text-4xl text-white mb-4" />,
                title: "Seluruh Materi SNBT",
                text: "Belajar lebih mudah dengan kurikulum lengkap yang dirancang untuk menghadapi SNBT dengan percaya diri.",
              },
              {
                icon: <FaBook className="text-4xl text-white mb-4" />,
                title: "Tryout Interaktif & Pencatatan Skor",
                text: "Latih kemampuanmu dengan tryout SNBT dan pantau perkembangan skor setiap sesi.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#23395d] p-6 rounded-lg shadow-lg text-center text-white"
              >
                {item.icon}
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1B2B44] py-10 px-6 text-white">
            <h3 className="text-center text-lg font-semibold mb-4">
              Tata cara penggunaan aplikasi
            </h3>
            <div className="border-t border-gray-400 mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-[#2E4568] h-32 rounded-lg shadow-md"
                ></div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
