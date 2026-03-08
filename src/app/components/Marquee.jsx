"use client";
import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ text = "OPRIME TECH", reverse = false, speed = 30 }) => {
  const marqueeVariants = {
    animate: {
      x: reverse ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-r from-accent-dark-green via-accent-grey-1 to-accent-dark-green">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-6xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-lime to-primary-500 mx-8">
                {text}
              </span>
              <span className="text-4xl lg:text-6xl mx-8 text-accent-lime">✦</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-6xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-lime to-primary-500 mx-8">
                {text}
              </span>
              <span className="text-4xl lg:text-6xl mx-8 text-accent-lime">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
