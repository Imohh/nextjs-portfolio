"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navLinks = [
  { title: "About",    path: "#about"    },
  { title: "Projects", path: "#projects" },
  { title: "Contact",  path: "#contact"  },
];

/* ─── Magnetic button hook ─── */
function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    x.set((e.clientX - left - width / 2) * strength);
    y.set((e.clientY - top - height / 2) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return { ref, sx, sy, onMove, onLeave };
}

/* ─── Single nav link with animated underline ─── */
function NavLink({ link, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={link.path}
        onClick={(e) => onClick(e, link.path)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block px-5 py-2 text-sm font-medium tracking-wide cursor-pointer select-none"
        style={{ color: hovered ? "#c79a45" : "rgba(255,255,255,0.6)" }}
      >
        {/* Letter-by-letter stagger on hover */}
        <span className="relative z-10 flex overflow-hidden">
          {link.title.split("").map((char, i) => (
            <motion.span
              key={i}
              animate={{ y: hovered ? -2 : 0, color: hovered ? "#c79a45" : "rgba(255,255,255,0.6)" }}
              transition={{ duration: 0.25, delay: i * 0.03, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>

        {/* Slim underline that draws from center */}
        <motion.span
          className="absolute bottom-0.5 left-1/2 h-px"
          style={{ backgroundColor: "#c79a45", translateX: "-50%" }}
          animate={{ width: hovered ? "60%" : "0%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Soft glow pill behind text */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: "#c79a45" }}
          animate={{ opacity: hovered ? 0.07 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.25 }}
        />
      </a>
    </motion.li>
  );
}

/* ─── CTA Button with magnetic pull ─── */
function CTAButton({ onClick }) {
  const { ref, sx, sy, onMove, onLeave } = useMagnetic(0.28);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        ref={ref}
        href="#contact"
        onClick={(e) => onClick(e, "#contact")}
        onMouseMove={onMove}
        onMouseLeave={() => { onLeave(); setHovered(false); }}
        onMouseEnter={() => setHovered(true)}
        style={{ x: sx, y: sy }}
        className="relative ml-3 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer overflow-hidden select-none"
      >
        {/* Animated background fill */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: "#c79a45" }}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Shimmer sweep */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: hovered ? "200% 0" : "-200% 0" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />

        <motion.span
          className="relative z-10 font-bold"
          style={{ color: "#14120e" }}
          animate={{ letterSpacing: hovered ? "0.06em" : "0.01em" }}
          transition={{ duration: 0.3 }}
        >
          Let&apos;s Talk
        </motion.span>

        {/* Arrow that slides in on hover */}
        <motion.span
          className="relative z-10 text-base"
          style={{ color: "#14120e" }}
          animate={{ x: hovered ? 2 : -4, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.li>
  );
}

/* ─── Mobile menu overlay ─── */
function MobileMenu({ open, links, onLinkClick, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Sliding panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
            style={{
              background: "linear-gradient(160deg, #17140f 0%, #1c1712 100%)",
              borderLeft: "1px solid rgba(199,154,69,0.12)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <div className="flex justify-end p-6">
              <motion.button
                onClick={onClose}
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-9 h-9 flex items-center justify-center rounded-full border text-white text-xl"
                style={{ borderColor: "rgba(199,154,69,0.25)" }}
              >
                ✕
              </motion.button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 px-8 mt-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => { onLinkClick(e, link.path); onClose(); }}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-3 py-4 border-b text-2xl font-semibold cursor-pointer"
                  style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
                  whileHover={{ x: 6, color: "#c79a45" }}
                >
                  <motion.span
                    className="text-xs font-mono opacity-40 group-hover:opacity-100"
                    style={{ color: "#c79a45" }}
                  >
                    0{i + 1}
                  </motion.span>
                  {link.title}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="mt-auto px-8 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <a
                href="#contact"
                onClick={(e) => { onLinkClick(e, "#contact"); onClose(); }}
                className="flex items-center justify-center w-full py-3.5 rounded-full font-bold text-base cursor-pointer"
                style={{ backgroundColor: "#c79a45", color: "#14120e" }}
              >
                Let&apos;s Talk →
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Navbar ─── */
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setNavbarOpen(false);
    const el = document.querySelector(targetId);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          // Dynamic glass background
          backgroundColor: useTransform(bgOpacity, (o) => `rgba(10,10,10,${o})`),
          backdropFilter: useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]),
          WebkitBackdropFilter: useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]),
          borderBottom: `1px solid rgba(199,154,69,${useTransform(borderOpacity, (o) => o)})`,
        }}
      >
        {/* Subtle scanning line — only at top */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(199,154,69,0.4), transparent)" }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-5">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className={`${orbitron.className} relative group flex items-center gap-2`}>
              {/* Animated dot */}
              <motion.span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#c79a45" }}
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <span
                className={`${orbitron.className} text-lg md:text-xl lg:text-2xl font-bold tracking-wider`}
                style={{ color: "#f2ede3" }}
              >
                OPRIME <span style={{ color: "#c79a45" }}>TECH</span>
              </span>

              {/* Glow on hover */}
              <motion.span
                className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse, rgba(199,154,69,0.1), transparent 70%)" }}
              />
            </Link>
          </motion.div>

          {/* Desktop links */}
          <motion.ul
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {navLinks.map((link, i) => (
              <NavLink key={link.path} link={link} onClick={handleSmoothScroll} index={i} />
            ))}
            <CTAButton onClick={handleSmoothScroll} />
          </motion.ul>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full"
            style={{ border: "1px solid rgba(199,154,69,0.25)" }}
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileHover={{ borderColor: "rgba(199,154,69,0.6)", backgroundColor: "rgba(199,154,69,0.05)" }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px rounded-full"
                style={{ backgroundColor: "#c79a45" }}
                animate={
                  navbarOpen
                    ? i === 0 ? { rotate: 45, y: 6, width: "20px" }
                    : i === 2 ? { rotate: -45, y: -6, width: "20px" }
                    : { opacity: 0, width: "0px" }
                    : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? "14px" : "20px" }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <MobileMenu
        open={navbarOpen}
        links={navLinks}
        onLinkClick={handleSmoothScroll}
        onClose={() => setNavbarOpen(false)}
      />
    </>
  );
};

export default Navbar;