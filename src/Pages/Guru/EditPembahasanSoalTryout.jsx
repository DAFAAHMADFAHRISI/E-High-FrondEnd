"use client"
import { motion } from "framer-motion"
import { FiArrowLeft, FiArrowRight, FiSave } from "react-icons/fi"

const EditPembahasanSoalTryout = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-b from-[#f5efe4] to-[#e8e0d0] p-4">
      <motion.div className="w-full max-w-lg" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200" variants={itemVariants}>
          <motion.h2 className="text-xl font-bold mb-6 text-gray-800 relative" variants={itemVariants}>
            Edit Pembahasan Soal Tryout
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gray-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />
          </motion.h2>

          <div className="space-y-5">
            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 mb-2 font-medium">Jawaban</label>
              <motion.input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(107, 114, 128, 0.2)" }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 mb-2 font-medium">Pembahasan</label>
              <motion.textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                rows="5"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(107, 114, 128, 0.2)" }}
              ></motion.textarea>
            </motion.div>

            <motion.button
              className="w-full py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 flex items-center justify-center gap-2 mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <FiSave /> Simpan
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="flex justify-between w-full mt-4" variants={itemVariants}>
          <motion.button
            className="px-5 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft /> Sebelumnya
          </motion.button>

          <motion.button
            className="px-5 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Selanjutnya <FiArrowRight />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EditPembahasanSoalTryout

