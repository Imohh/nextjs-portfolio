"use client";
import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, previewUrl, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.65, 0.05, 0, 1] }}
      viewport={{ once: true }}
      className="group relative bg-accent-grey-1 rounded-2xl overflow-hidden border border-accent-lime/10 hover:border-accent-lime/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-grey-1 via-accent-grey-1/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Clip-path reveal overlay */}
        <motion.div
          initial={false}
          animate={{
            clipPath: isHovered
              ? "ellipse(100% 120% at 50% 0%)"
              : "ellipse(0% 0% at 50% 0%)"
          }}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className="absolute inset-0 bg-accent-lime/10 backdrop-blur-sm flex items-center justify-center"
        >
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center gap-3 px-6 py-3 bg-accent-lime text-dark font-bold rounded-full hover:scale-110 transition-transform duration-300"
          >
            <span>View Project</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-accent-lime/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-3">
          <h5 className="text-xl lg:text-2xl font-bold text-white group-hover:text-accent-lime transition-colors duration-300">
            {title}
          </h5>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-accent-lime" />
          </motion.div>
        </div>

        <p className="text-secondary-300 text-base leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Progress bar animation */}
        <div className="mt-4 h-1 bg-accent-grey-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-accent-lime to-primary-500"
          />
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-lime/20 to-primary-500/20 blur-xl" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
