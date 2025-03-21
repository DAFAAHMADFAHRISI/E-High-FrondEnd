export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen w-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        <h1 className="text-xl font-bold text-blue-900">LuLuSin</h1>
        <p className="text-xs text-gray-500">Education Academi</p>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-900 cursor-pointer">
              <a href="/Admin/DashBoard">
                <span className="text-lg">📊</span>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-900 cursor-pointer">
              <a href="/Admin/DetailGuru">
                <span className="text-lg">👨‍🏫</span>
                <span>Guru</span>
              </a>
            </li>
            <a href="/Admin/DeaailMurid"></a>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-900 cursor-pointer">
              <a href="/Admin/DetailMurid">
              <span className="text-lg">👩‍🎓</span>
              <span>Murid</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-600">Dashboard</h2>
          <button className="text-2xl">☰</button>
        </div>

        {/* Welcome Card */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold">Selamat Datang</h3>
          <p className="text-gray-700">Ambataqil Pramono</p>

          <div className="mt-4 flex gap-4">
            <div className="bg-[#F5F0E9] p-6 rounded-lg shadow-md text-center flex-1">
              <p className="text-gray-700 font-semibold">Guru Terdaftar</p>
              <p className="text-2xl font-bold">23</p>
            </div>
            <div className="bg-[#F5F0E9] p-6 rounded-lg shadow-md text-center flex-1">
              <p className="text-gray-700 font-semibold">Guru Terdaftar</p>
              <p className="text-2xl font-bold">234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
