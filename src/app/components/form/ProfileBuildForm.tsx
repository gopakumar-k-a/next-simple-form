"use client";

import React from "react";
import { motion } from "framer-motion";
export default function ProfileBuildForm() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#1f1e27]">
      <motion.div
        className="bg-[#1f1e27] border-4 border-[#cbe6ff] flex flex-col items-center justify-center text-[#cbe6ff] p-8 rounded-3xl shadow-xl w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-2xl font-bold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Create Your Profile
        </motion.h1>
        <motion.form
          className="w-full flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label htmlFor="name" className="text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label htmlFor="email" className="text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label htmlFor="phone" className="text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <label htmlFor="password" className="text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="px-6 py-2 mt-4 bg-transparent text-[#cbe6ff] font-sans text-sm border-2 border-[#cbe6ff] rounded-full transition-all duration-200 hover:bg-[#cbe6ff] hover:text-[#1f1e27]"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#cbe6ff",
              color: "#1f1e27",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
