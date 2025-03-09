export default function Header() {
  return (
    <div className="flex flex-col  flex-grow">
      <header className="bg-[#1B2B44] p-4 flex justify-between items-center shadow-md">
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
          <a href="/login" className="hover:text-gray-400 transition">
            Login
          </a>
        </nav>
      </header>
    </div>
  );
}
