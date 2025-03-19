"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GuruTryoutSubjek = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1e3247",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f0e8] p-6 w-screen">
      {!isOpen ? (
        <motion.button
          className="bg-[#2e4460] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#1e3247] transition"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buka Tes Potensi Skolastik
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg border"
          >
            <motion.h1 className="text-2xl font-bold text-gray-800 mb-4">Tes Potensi Skolastik</motion.h1>
            <motion.button
              className="bg-red-600 text-white px-4 py-2 rounded-md mb-4"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tutup
            </motion.button>

            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 className="text-lg font-semibold text-gray-800 mb-2" variants={itemVariants}>
                Penalaran Umum
              </motion.h2>
              <motion.textarea
                placeholder="Soal"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 font-bold text-blue-800"
              />
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <motion.input
                    key={index}
                    type="text"
                    placeholder={`Pilihan ${String.fromCharCode(65 + index)}`}
                    className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              <motion.input
                type="text"
                placeholder="Jawaban yang benar:"
                className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-blue-900 font-bold"
              />
              <motion.textarea
                placeholder="Pembahasan:"
                className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-blue-900 font-bold"
              />
              <motion.button
                className="bg-[#2e4460] text-white px-6 py-2 rounded-md text-sm transition relative overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.span initial={{ x: 0 }} animate={{ x: isHovered ? -5 : 0 }} transition={{ duration: 0.2 }}>
                  Edit
                </motion.span>
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      className="absolute right-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default GuruTryoutSubjek;
