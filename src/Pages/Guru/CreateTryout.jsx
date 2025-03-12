import React, { useState } from "react";
import { motion } from "framer-motion";

const CreateTryout = () => {
  const [namaTryout, setNamaTryout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tryout dibuat:", namaTryout);
  };

  return (
    <div className="flex items-center justify-center bg-[#f5f0e8] min-h-screen w-screen p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl shadow-lg border w-full max-w-md"
      >
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">Tambah Tryout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Nama Tryout</label>
            <input
              type="text"
              value={namaTryout}
              onChange={(e) => setNamaTryout(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />
          </div>
          <motion.hr 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ duration: 0.5 }} 
            className="border-gray-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#2e4460] text-white py-2 rounded-full hover:bg-[#1e3247] transition"
          >
            Buat
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateTryout;
