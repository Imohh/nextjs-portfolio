"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sope Adelaja Portfolio",
    description: "Portfolio website for a creative professional.",
    image: "/images/projects/sope.png",
    tag: ["All", "Web"],
    previewUrl: "https://sopeadelaja.com/",
  },
  {
    id: 2,
    title: "Chekam",
    description: "Property listing website with filters that enables users search for properies with ease.",
    image: "/images/projects/chekam.png",
    tag: ["All", "Web"],
    previewUrl: "https://chekam.com",
  },
  {
    id: 3,
    title: "Learnbuddie",
    description: "A comprehensive learning platform for students.",
    image: "/images/projects/learnbuddie.png",
    tag: ["All", "Web"],
    previewUrl: "https://learnbuddie.com",
  },
  {
    id: 4,
    title: "Recreate Africa",
    description: "Storytelling website for a company based in Africa.",
    image: "/images/projects/recreate.png",
    tag: ["All", "Web"],
    previewUrl: "https://recreateafrica.org",
  },
  {
    id: 5,
    title: "Glintz Photography",
    description: "A photography website",
    image: "/images/projects/glintz.png",
    tag: ["All", "Mobile"],
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
    title: "Grep",
    description: "Delivery app where users track their orders and also see details of the delivery person assigned to them.",
    image: "/images/projects/grep.png",
    tag: ["All", "Web"],
    previewUrl: "https://grep-website.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
