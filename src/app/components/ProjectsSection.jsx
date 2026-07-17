"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sope Adelaja Portfolio",
    description: "Portfolio website for a creative professional showcasing artistic works and achievements.",
    image: "/images/projects/sope.png",
    tag: ["All", "Web"],
    previewUrl: "https://sopeadelaja.com/",
  },
  {
    id: 2,
    title: "Chekam",
    description: "Property listing website with advanced filters enabling users to search for properties with ease.",
    image: "/images/projects/chekam.png",
    tag: ["All", "Web"],
    previewUrl: "https://chekam.com",
  },
  {
    id: 3,
    title: "Yacht Crew Center",
    description: "A platform connecting crew members, suppliers, and service providers across the yachting industry.",
    image: "/images/projects/ycc.png",
    tag: ["All", "Web"],
    previewUrl: "https://yachtcrewcenter.com",
  },
  {
    id: 4,
    title: "Recreate Africa",
    description: "Engaging storytelling website for an innovative company making impact across Africa.",
    image: "/images/projects/recreate.png",
    tag: ["All", "Web"],
    previewUrl: "https://recreateafrica.org",
  },
  {
    id: 5,
    title: "Glintz Photography",
    description: "A stunning photography showcase website featuring professional photography services.",
    image: "/images/projects/glintz.png",
    tag: ["All", "Web"],
    previewUrl: "https://glintzphotography.org",
  },
  {
    id: 6,
    title: "JoelAdu Portfolio",
    description: "Portfolio website for a seasoned commercial photographer and advertising consultant.",
    image: "/images/projects/joel.png",
    tag: ["All", "Web"],
    previewUrl: "https://joeladu.com",
  },
  {
    id: 7,
    title: "Could It Be Love",
    description: "Fashion e-commerce storefront for the CIBL label, built to showcase and sell each new collection.",
    image: "/images/projects/coulditbelove.png",
    tag: ["All", "Web"],
    previewUrl: "https://coulditbelove.com",
  },
];

const ProjectTag = ({ name, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
        isSelected
          ? "bg-accent-lime text-dark shadow-lg shadow-accent-lime/20"
          : "bg-accent-grey-1 text-secondary-300 border border-accent-lime/20 hover:bg-accent-lime/10 hover:text-white"
      }`}
    >
      {name}
    </button>
  );
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent-dark-green/10 to-dark" />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 bg-accent-lime/10 border border-accent-lime/20 rounded-full text-accent-lime text-sm font-medium tracking-wide mb-6"
          >
            OUR WORK
          </motion.span>
          <h2 className="text-display-sm lg:text-display-md font-black text-white mb-6">
            Projects That
            <span className="block gradient-text">Make an Impact</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto text-balance">
            Explore our portfolio of digital solutions that have helped businesses
            transform their online presence and achieve remarkable results.
          </p>
        </ScrollReveal>

        {/* Filter tags */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 mb-12 lg:mb-16">
            {["All", "Web", "Mobile"].map((tagName) => (
              <ProjectTag
                key={tagName}
                name={tagName}
                isSelected={tag === tagName}
                onClick={handleTagChange}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-secondary-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
