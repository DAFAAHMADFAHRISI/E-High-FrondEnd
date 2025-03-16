"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const GuruTryoutSubjek = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)

  // Container variants
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
  }

  // Item variants for staggered animations
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
  }

  // Button variants
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
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f0e8] p-6 w-screen">
      <motion.h1
        className="text-2xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.2,
        }}
      >
        Tes Potensi Skolastik
      </motion.h1>

      <motion.div
        className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg border relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.3,
          },
        }}
        whileHover={{
          boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Decorative background element */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Header */}
        <div className="flex justify-between items-center mb-4 relative z-10">
          <motion.h2
            className="text-lg font-semibold text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Penalaran Umum
          </motion.h2>
          <motion.button
            className="bg-[#2e4460] text-white px-4 py-1 rounded-md text-sm transition"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsEditing(!isEditing)}
          >
            Buat Soal
          </motion.button>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
          {/* Input Soal */}
          <motion.div variants={itemVariants}>
            <motion.textarea
              placeholder="Soal"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 font-bold text-blue-800"
              whileFocus={{
                boxShadow: "0px 0px 0px 3px rgba(59, 130, 246, 0.3)",
                borderColor: "#3b82f6",
              }}
            />
          </motion.div>

          {/* Pilihan Jawaban */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.input
                  type="text"
                  placeholder={`Pilihan ${String.fromCharCode(65 + index)}`}
                  className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus={{
                    boxShadow: "0px 0px 0px 3px rgba(59, 130, 246, 0.3)",
                    scale: 1.02,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Jawaban Benar */}
          <motion.div variants={itemVariants}>
            <motion.input
              type="text"
              placeholder="Jawaban yang benar:"
              className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-blue-900 font-bold"
              whileFocus={{
                boxShadow: "0px 0px 0px 3px rgba(59, 130, 246, 0.3)",
                scale: 1.02,
              }}
            />
          </motion.div>

          {/* Pembahasan */}
          <motion.div variants={itemVariants}>
            <motion.textarea
              placeholder="Pembahasan:"
              className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-blue-900 font-bold"
              whileFocus={{
                boxShadow: "0px 0px 0px 3px rgba(59, 130, 246, 0.3)",
                scale: 1.01,
              }}
            />
          </motion.div>

          {/* Tombol Edit */}
          <motion.div variants={itemVariants} className="flex justify-end">
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
      </motion.div>
    </div>
  )
}

export default GuruTryoutSubjek

