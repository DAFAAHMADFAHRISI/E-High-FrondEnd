const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-[#1B2B44]  h-screen w-screen ">
      <section className="flex items-center justify-center w-full h-screen px-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
          {/* Bagian Kiri - Form Login */}
          <div className="w-full md:w-1/2 bg-[#F5F0EB] flex flex-col items-center justify-center px-6 md:px-10 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
            <p className="text-gray-600 text-center mb-4">Masuk untuk melanjutkan perjalananmu menuju kesuksesan!</p>
            <div className="w-full mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full p-3 border border-gray-400 rounded-xl focus:outline-none"
              />
            </div>
            <div className="w-full mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full p-3 border border-gray-400 rounded-xl focus:outline-none"
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition">Login</button>
            <p className="mt-5 text-sm text-gray-600">
              Belum memiliki akun?{" "}
              <a href="/register" className="text-blue-600 font-semibold">
                Register
              </a>
            </p>
          </div>

          {/* Bagian Kanan - Deskripsi */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white px-6 md:px-10 py-8 bg-gradient-to-b from-blue-300 to-blue-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Selamat Datang <br /> Kembali di Lulusin!
            </h2>
            <p className="text-center text-sm">
              Ayo lanjutkan perjalananmu menuju kampus impian. <br />
              Masuk sekarang dan pantau progres belajarmu!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login

