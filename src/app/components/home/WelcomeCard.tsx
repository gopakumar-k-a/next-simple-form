"use client";

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
const WelcomeCard = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#1f1e27]">
    
      <motion.div
        className="bg-[#1f1e27] border-4 border-[#cbe6ff] flex flex-col items-center justify-center text-2xl font-bold font-sans p-8 text-[#cbe6ff] rounded-3xl shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
        }}
      >
        <motion.div
          className="text-6xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ rotate: 15 }}
        >
          <FaUserCircle />
        </motion.div>
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Build Your Profile
        </motion.div>
        <Link href={"/create-profile"}>
          <motion.button
            className="px-6 py-2 mt-5 bg-transparent text-[#cbe6ff] font-sans text-sm border-2 border-[#cbe6ff] rounded-full transition-all duration-200 hover:bg-[#cbe6ff] hover:text-[#1f1e27]"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#cbe6ff",
              color: "#1f1e27",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default WelcomeCard;
