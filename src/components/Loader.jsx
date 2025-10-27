import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#060814] text-[#FFD166] z-[9999]">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="text-5xl font-bold pixel-text tracking-widest"
      >
        SELECTA
      </motion.div>
      <motion.div
        className="mt-6 text-sm pixel-text text-[#06AED5]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading...
      </motion.div>
    </div>
  );
}
