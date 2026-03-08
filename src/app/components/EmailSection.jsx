"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import InstagramIcon from "../../../public/instagram.png";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://oprime-backend.vercel.app/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
        setTimeout(() => setEmailSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent-dark-green/20 to-dark" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 bg-accent-lime/10 border border-accent-lime/20 rounded-full text-accent-lime text-sm font-medium tracking-wide mb-6"
          >
            ✦ GET IN TOUCH
          </motion.span>
          <h2 className="text-display-sm lg:text-display-md font-black text-white mb-6">
            Let's Create Something
            <span className="block gradient-text">Amazing Together</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto text-balance">
            Ready to transform your digital presence? Let's discuss your project
            and bring your vision to life.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left side - Info */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-lg text-secondary-300 leading-relaxed mb-6">
                  We're always looking for new opportunities to create exceptional
                  digital experiences. Whether you have a question, a project idea,
                  or just want to say hi, our inbox is always open!
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-accent-grey-1/50 border border-accent-lime/10 rounded-xl hover:border-accent-lime/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-lime/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-400">Email</p>
                    <p className="text-white font-medium">hello@oprime.tech</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-accent-grey-1/50 border border-accent-lime/10 rounded-xl hover:border-accent-lime/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-lime/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-400">Location</p>
                    <p className="text-white font-medium">Lagos, Nigeria</p>
                  </div>
                </motion.div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-secondary-400 mb-4">Follow us</p>
                <div className="flex gap-4">
                  <Link
                    href="https://instagram.com/oprime.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent-grey-1 border border-accent-lime/20 rounded-full flex items-center justify-center hover:bg-accent-lime/10 hover:border-accent-lime/40 hover:scale-110 transition-all duration-300"
                  >
                    <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative bg-gradient-to-br from-accent-grey-1 to-accent-grey-2 border border-accent-lime/20 rounded-2xl p-8 lg:p-10">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/5 rounded-bl-3xl" />

              {emailSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent-lime/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-secondary-300">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-white block mb-2 text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="bg-accent-grey-2 border border-accent-lime/10 focus:border-accent-lime/40 focus:ring-2 focus:ring-accent-lime/20 placeholder-secondary-400 text-white text-base rounded-xl block w-full p-4 transition-all duration-300 outline-none"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-white block text-sm mb-2 font-medium"
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="bg-accent-grey-2 border border-accent-lime/10 focus:border-accent-lime/40 focus:ring-2 focus:ring-accent-lime/20 placeholder-secondary-400 text-white text-base rounded-xl block w-full p-4 transition-all duration-300 outline-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-white block text-sm mb-2 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      className="bg-accent-grey-2 border border-accent-lime/10 focus:border-accent-lime/40 focus:ring-2 focus:ring-accent-lime/20 placeholder-secondary-400 text-white text-base rounded-xl block w-full p-4 transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent-lime hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-dark font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-lime/20 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
