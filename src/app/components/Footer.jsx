"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-accent-lime/10 bg-gradient-to-b from-dark to-accent-dark-green">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className={`${orbitron.className} text-2xl lg:text-3xl font-bold mb-4 inline-block`}
            >
              <span className="gradient-text">OPRIME TECH</span>
            </Link>
            <p className="text-secondary-300 text-sm lg:text-base max-w-sm">
              Crafting exceptional digital experiences that drive real business results since 2020.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-accent-lime transition-colors duration-300 text-sm lg:text-base"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm lg:text-base">
              <p className="text-secondary-300">
                <span className="text-accent-lime">Email:</span>{" "}
                <a href="mailto:hello@oprime.tech" className="hover:text-white transition-colors">
                  hello@oprime.tech
                </a>
              </p>
              <p className="text-secondary-300">
                <span className="text-accent-lime">Location:</span> Lagos, Nigeria
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-accent-lime/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-secondary-400 text-sm text-center md:text-left">
            © {currentYear} Oprime Tech. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-secondary-400">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              className="text-accent-lime"
            >
              ♥
            </motion.span>
            <span>by Oprime Tech</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
