import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#4f8e38]">
          Skills
        </p>
        <h2 className="py-4 text-green-200">Things I can do</h2>
        <div className="grid md:grid-cols-2 md-grid-cols-4 gap-8 text-green-200">

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/html.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/css-3.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse bg-color-red">
                <Image
                  src="/../public/assets/java-script.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/react.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/vue.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vue</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/java.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/mongodb.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/sql-server.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>mySQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto animate-pulse">
                <Image
                  src="/../public/assets/nodejs.png"
                  width="64px"
                  height="64px"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
