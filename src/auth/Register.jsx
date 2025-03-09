const Register = () => {
    return (
      <div className="flex items-center justify-center min-h-screen  bg-[#1B2B44] h-screen w-screen ">
        <section className="flex items-center justify-center w-full h-screen px-4">
          <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
            {/* Bagian Kiri - Deskripsi */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white px-6 md:px-10 py-8 bg-[#2D4562]">
              <h2 className="text-2xl font-bold mb-3 text-center">
                Selamat Datang di <br /> Lulusin!
              </h2>
              <p className="text-center text-sm px-4">
                Bersiaplah menaklukkan SNBT dengan materi lengkap, tryout interaktif, dan analisis skor cerdas. Daftar
                sekarang dan mulai langkahmu menuju masa depan cerah!
              </p>
            </div>
  
            {/* Bagian Kanan - Form Register */}
            <div className="w-full md:w-1/2 bg-[#F5F0EB] flex flex-col items-center justify-center px-6 md:px-10 py-8">
              <h2 className="text-3xl font-bold text-[#2D4562] mb-6 text-center">Register</h2>
  
              <div className="w-full mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                />
              </div>
  
              <div className="w-full mb-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="NISN"
                  className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none"
                />
              </div>
  
              <div className="w-full mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                />
              </div>
  
              <div className="w-full mb-5">
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                />
              </div>
  
              <div className="w-full border-t border-gray-300 my-4"></div>
  
              <button className="w-full bg-[#2D4562] text-white p-3 rounded-xl hover:bg-[#1B2B44] transition font-semibold">
                Register
              </button>
  
              <p className="mt-5 text-sm text-gray-600 text-center">
                sudah memiliki akun?{" "}
                <a href="#" className="text-[#2D4562] font-semibold">
                  Login
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Register
  
  