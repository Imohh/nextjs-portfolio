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

  // Cinematic parallax: image drifts slower than content, content fades on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePosition({
        x: (clientX - centerX) * 0.015,
        y: (clientY - centerY) * 0.015
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate title characters on mount
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'cubic-bezier(0.65, 0.05, 0, 1)',
          stagger: 0.04,
          delay: 0.35
        }
      );
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? ' ' : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* ── Full-bleed cinematic photo (Ken-Burns + mouse drift) ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <Image
            src="/images/hero-images.jpeg"
            alt="Oprime Tech studio"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* ── Colour grade + legibility scrims ── */}
      {/* warm tone tie-in with the amber palette */}
      <div className="absolute inset-0 bg-[#c79a45] mix-blend-soft-light opacity-25 pointer-events-none" />
      {/* base dim */}
      <div className="absolute inset-0 bg-dark/25 pointer-events-none" />
      {/* bottom scrim for the headline */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-transparent pointer-events-none" />
      {/* left scrim so text stays readable over busy areas */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/20 to-transparent pointer-events-none" />
      {/* top scrim keeps the navbar legible */}
      <div className="absolute inset-0 h-1/3 bg-gradient-to-b from-dark/80 to-transparent pointer-events-none" />
      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 220px 40px rgba(8,6,3,0.85)" }}
      />

      {/* ── Editorial vertical caption, right edge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="hidden lg:flex absolute top-1/2 right-6 -translate-y-1/2 items-center gap-4"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="text-xs tracking-[0.4em] text-secondary-300 uppercase">
          Digital Studio — Portfolio ’25
        </span>
        <span className="h-16 w-px bg-accent-lime/50" />
      </motion.div>

      {/* ── Content, anchored bottom-left ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container mx-auto px-6 lg:px-12 pb-16 lg:pb-24"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-10 bg-accent-lime" />
            <span className="text-accent-lime text-xs md:text-sm font-medium tracking-[0.35em] uppercase">
              Digital Studio · Est. 2021
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="text-white font-black leading-[0.9] overflow-hidden mb-6"
          >
            <span className="block text-[clamp(3.5rem,11vw,10rem)] tracking-[-0.03em]">
              {splitText("Oprime ")}
              <span className="text-accent-lime">{splitText("Tech")}</span>
            </span>
          </h1>

          {/* Kinetic tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
            className="text-xl md:text-3xl font-semibold text-secondary-100 mb-8 max-w-2xl"
          >
            We craft{" "}
            <TypeAnimation
              sequence={[
                "websites that convert.",
                1600,
                "apps people keep open.",
                1600,
                "brands that stand out.",
                1600,
                "digital products, end to end.",
                1600,
              ]}
              wrapper="span"
              speed={50}
              className="text-accent-lime"
              repeat={Infinity}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="group relative px-8 py-4 bg-accent-lime text-dark font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent-lime/25"
            >
              <span className="relative z-10">Start a project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/#projects"
              className="px-8 py-4 border border-white/25 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              View our work
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator, bottom-right ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[0.65rem] tracking-[0.4em] text-secondary-300 uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-14 bg-gradient-to-b from-accent-lime to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
