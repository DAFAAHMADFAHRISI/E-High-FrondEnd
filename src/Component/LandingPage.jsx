export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">
      <header className="bg-white text-black p-4 flex justify-between items-center shadow-md rounded-lg mx-6 mt-4 max-w-7xl mx-auto">
        <div className="text-lg font-bold">Logo</div>
        <nav className="space-x-6">
          <a
            href="#"
            className="text-black font-semibold bg-gray-200 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition duration-300"
          >
            Home
          </a>
          <a href="#" className="hover:text-gray-600 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-gray-600 transition duration-300">
            Tutorial
          </a>
        </nav>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300">
          Logout
        </button>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        <section className="bg-gray-200 text-black p-6 rounded-lg mb-8">
          <h2 className="font-bold text-lg mb-2 text-center">Balmond Hyper Css Html</h2>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 p-4 rounded-lg text-center shadow-sm hover:bg-gray-400 transition duration-300"
            >
              <div className="bg-gray-500 w-12 h-12 mx-auto mb-2 rounded-full"></div>
              <p className="text-blue-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet optio vitae deleniti quae maiores qui. Sed expedita
                eaque eos. Commodi pariatur exercitationem fugit ipsum quod nisi
                sapiente eveniet nulla a!
              </p>
            </div>
          ))}
        </section>

        <h3 className="text-center text-xl font-semibold mb-4">
          Tata cara penggunaan aplikasi
        </h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-32 rounded-lg shadow-sm hover:bg-gray-400 transition duration-300"
              
            >
            
              <p className="text-blue-900 text-center">
             jadi gini terus begini dan begitu
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-4 mt-8">
        <p>
          &copy; 2025 Barudak Nyungsang. All Rights Reserved PT. Mesir Timur
          Setengah
        </p>
      </footer>
    </div>
  );
}
