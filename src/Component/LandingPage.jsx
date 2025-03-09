import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaSignInAlt,
  FaGraduationCap,
  FaUserCheck,
  FaClipboardList,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-[#0F1A2A] text-white ">
      <header className="bg-[#1B2B44] p-4 flex justify-between items-center shadow-md w-full">
        <div className="text-white font-bold text-lg">
          Santoso
          <p className="text-xs font-light">Education Assistant</p>
        </div>
        <nav className="space-x-6 flex text-white text-sm font-semibold">
          <a href="#" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Tutorial
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Login
          </a>
        </nav>
      </header>
      <main className="p-1 w-full bg-amber-50">
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
                title: "Learning Untuk Lulus Seleksi Nasional",
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

      <footer className="bg-[#1B2B44] text-white text-center p-6 mt-8 w-full border-t-4">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div className="mb-4 md:mb-0 text-left">
            <h4 className="font-bold">LuluSin</h4>
            <p>Education Academy</p>
            <p>Learning Untuk Lulus Seleksi Nasional</p>
          </div>
          <div className="mb-4 md:mb-0 text-left">
            <p>Jl. Raya Lenteng No.km, RW.2,</p>
            <p>Aredake, Batuan, Kec. Batuan,</p>
            <p>Kabupaten Sumenep, Jawa Timur 80552</p>
          </div>
          <div className="text-left">
            <p>Hubungi Kami :</p>
            <p>Email: dawaru839@gmail.com</p>
            <p>Kontak: +62 812-3516-3528</p>
          </div>
        </div>
        <div className="mt-4 text-sm">
          © 2025 Faidur. All Rights Reserved PT. Mesir Timur setengah
        </div>
      </footer>
    </div>
  );
}
