import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../public/assets/travel.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto my-10 px-2 py-20">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4 tracking-widest text-green-200">What i've built</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
      </div>
  
    </div>
  );
};

export default Projects;
