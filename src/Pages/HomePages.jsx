const HomePage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="bg-[#F5F0E9] flex flex-col items-center p-10 min-h-screen w-screen">
        <h1 className="text-3xl font-bold text-[#2F4A6D] mb-6">Selamat Datang di Homepage</h1>
        <button
          className="bg-[#2F4A6D] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#1E3550]"
          onClick={() => navigate("/dashboard")}
        >
          Pergi ke Dashboard
        </button>
      </div>
    );
  };
  
  export default HomePage;