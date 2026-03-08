"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePosition({
        x: (clientX - centerX) * 0.02,
        y: (clientY - centerY) * 0.02
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate title characters on mount
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'cubic-bezier(0.65, 0.05, 0, 1)',
          stagger: 0.02,
          delay: 0.2
        }
      );
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '0' }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-dark-green via-dark to-dark opacity-80" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-lime/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-12"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content */}
          <div className="col-span-1 lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent-lime/10 border border-accent-lime/20 rounded-full text-accent-lime text-sm font-medium tracking-wide">
                ✦ DIGITAL EXCELLENCE
              </span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-white mb-6 overflow-hidden"
            >
              <div className="text-display-md lg:text-display-lg font-extrabold mb-2">
                {splitText("Hello, we're")}
              </div>
              <div className="text-display-lg lg:text-display-xl font-black gradient-text">
                {splitText("Oprime Tech")}
              </div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.8 }}
              className="mb-4 text-2xl lg:text-4xl font-bold text-white"
            >
              <span className="text-secondary-400">Experts in: </span>
              <TypeAnimation
                sequence={[
                  "Web Development",
                  1500,
                  "Mobile Applications",
                  1500,
                  "UI/UX Design",
                  1500,
                  "Digital Innovation",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1 }}
              className="text-secondary-300 text-lg lg:text-xl mb-8 max-w-2xl text-balance mx-auto lg:mx-0"
            >
              Established in 2020, we're a pioneering force in the digital realm,
              dedicated to helping brands thrive in the online landscape through exceptional
              websites and innovative mobile applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#contact"
                className="group relative px-8 py-4 bg-accent-lime text-dark font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-lime/20"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/#projects"
                className="px-8 py-4 border-2 border-accent-lime/30 text-white font-bold rounded-full hover:bg-accent-lime/10 hover:border-accent-lime transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Image with parallax effect */}
          <motion.div
            className="col-span-1 lg:col-span-5 relative"
            style={{
              x: mousePosition.x,
              y: mousePosition.y
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="relative w-full max-w-[500px] mx-auto"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent-lime/20 rounded-full blur-3xl scale-110 animate-pulse" />

              {/* Main image container */}
              <div className="relative rounded-full bg-gradient-to-br from-accent-lime/20 to-primary-500/20 p-1">
                <div className="rounded-full bg-accent-grey-1 w-full aspect-square relative overflow-hidden">
                  <Image
                    src="/images/hero-image.png"
                    alt="Oprime Tech"
                    fill
                    className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-lime/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-secondary-400"
        >
          <span className="text-sm tracking-widest">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent-lime to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
