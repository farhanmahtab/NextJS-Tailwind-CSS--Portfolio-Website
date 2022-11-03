import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectURL }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-green-200 rounded-xl p-4 group hover:bg-gradient-to-r from bg-green-100 to bg-green-300">
      <Image
        className="w-full h-auto m-auto rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      ></Image>
      <div className="hidden group-hover:block absolute top-50% left-50% ">
        <h3 className="text-2xl tracking-wider text-green-600 text-center">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-green-600 text-center font-bold">NextJS</p>
        <Link href={projectURL}>
          <p className="py-4 text-center bg-green-600 text-green-100 rounded-xl font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
