"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Web Development", level: 95 },
  { name: "Mobile Apps", level: 90 },
  { name: "UI/UX Design", level: 88 },
  { name: "Cloud Solutions", level: 85 },
  { name: "E-Commerce", level: 92 },
  { name: "Digital Strategy", level: 87 },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      id="about"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent-dark-green/20 to-dark" />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 bg-accent-lime/10 border border-accent-lime/20 rounded-full text-accent-lime text-sm font-medium tracking-wide mb-6"
          >
            ABOUT US
          </motion.span>
          <h2 className="text-display-sm lg:text-display-md font-black text-white mb-6">
            Transforming Ideas Into
            <span className="block gradient-text">Digital Reality</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto text-balance">
            We&apos;re not just developers—we&apos;re digital architects crafting exceptional
            experiences that drive real business results.
          </p>
        </ScrollReveal>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image side */}
          <ScrollReveal direction="left" delay={0.2}>
            <motion.div
              className="relative"
              style={{ y: imageY, rotate: imageRotate }}
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-lime/20 to-primary-500/20 rounded-3xl blur-2xl" />

              <div className="relative rounded-3xl overflow-hidden border border-accent-lime/20 bg-gradient-to-br from-accent-grey-1 to-accent-grey-2">
                <div className="relative aspect-square">
                  <Image
                    src="/images/image.jpeg"
                    fill
                    alt="Oprime Tech Team"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 right-6 bg-accent-lime text-dark px-6 py-3 rounded-full font-bold text-lg shadow-2xl"
                >
                  Est. 2021
                </motion.div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-accent-lime/40 rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-primary-500/40 rounded-br-3xl" />
            </motion.div>
          </ScrollReveal>

          {/* Content side */}
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-secondary-200 leading-relaxed">
                  At <span className="text-accent-lime font-semibold">Oprime Tech</span>, we believe in the power of digital transformation.
                  Our experienced team of highly skilled developers are passionate about creating seamless
                  online experiences that captivate your audience.
                </p>
                <p className="text-lg text-secondary-200 leading-relaxed mt-4">
                  Whether you&apos;re a startup looking to make a mark or an established business aiming for
                  digital evolution, we have the expertise to make it happen. We combine cutting-edge
                  technology with creative excellence to deliver solutions that exceed expectations.
                </p>
              </div>
            </ScrollReveal>

            {/* Skills grid */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-accent-grey-1/50 backdrop-blur-sm border border-accent-lime/10 rounded-xl p-4 hover:border-accent-lime/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                      <span className="text-accent-lime text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-accent-grey-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-lime to-primary-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
