"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { profileSchema, ProfileFormData } from "./validation-schema";

export default function ProfileBuildForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const createAnotherProfile = () => {
    setIsSubmitted(false);
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="w-screen h-screen flex items-center justify-center bg-[#1f1e27] text-[#cbe6ff]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <motion.div
            className="inline-block mb-4"
            animate={{
              scale: 1.5,
            }}
            transition={{
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop",
            }}
          >
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cbe6ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </motion.div>

          <h2 className="text-2xl font-bold mb-4">
            Profile Successfully Created!
          </h2>

          <button
            onClick={createAnotherProfile}
            className="px-6 py-2 bg-[#cbe6ff] text-[#1f1e27] rounded-lg"
          >
            Create Another Profile
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#1f1e27]">
      <motion.div
        className="bg-[#1f1e27] border-4 border-[#cbe6ff] flex flex-col items-center justify-center text-[#cbe6ff] p-8 rounded-3xl shadow-xl w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="name" className="text-sm font-medium mb-1">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </motion.div>

          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="email" className="text-sm font-medium mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="phone" className="text-sm font-medium mb-1">
              Phone (Optional)
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Enter your phone number"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
          </motion.div>

          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="password" className="text-sm font-medium mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="px-4 py-2 bg-transparent border-2 border-[#cbe6ff] rounded-lg text-sm text-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-[#cbe6ff]"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
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
