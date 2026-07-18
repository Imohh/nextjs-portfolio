"use client";
import React from "react";
import dynamic from "next/dynamic";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "",
    metric: "Happy Clients",
    value: "15",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Success Rate",
    value: "100",
    postfix: "%",
  },
];

const AchievementsSection = () => {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="relative bg-gradient-to-br from-accent-grey-1 to-accent-grey-2 border border-accent-lime/20 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />

            {/* Grid */}
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {achievementsList.map((achievement, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center group"
                  >
                    <h2 className="text-white text-5xl lg:text-6xl font-black flex flex-row items-baseline mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.prefix}
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={parseInt(achievement.value.replace(',', ''))}
                        locale="en-US"
                        className="gradient-text text-5xl lg:text-6xl font-black"
                        configs={(_, index) => {
                          return {
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1),
                          };
                        }}
                      />
                      <span className="gradient-text">{achievement.postfix}</span>
                    </h2>
                    <p className="text-secondary-300 text-sm lg:text-base font-medium tracking-wide">
                      {achievement.metric}
                    </p>

                    {/* Animated underline */}
                    <div className="mt-3 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-accent-lime to-primary-500 rounded-full" />
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-accent-lime/20 rounded-tl-2xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary-500/20 rounded-br-2xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AchievementsSection;
