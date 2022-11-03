import React from "react";
import Image from "next/image";
import img from "../public/assets/img.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4f8e38]">
            About
          </p>
          <h2 className="py-4 text-green-200">Who I Am.</h2>
          <p className="py-2 text-green-100">BIO Intro</p>
          <p className="py-2 text-green-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ullam beatae odio minus temporibus, quasi voluptatibus quas dicta
            quibusdam vitae.
          </p>
          <p className="py-2 text-green-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo
            est ab voluptate laudantium in recusandae temporibus placeat unde
            magni!
          </p>
          <p className="py-2 text-green-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            explicabo vero exercitationem recusandae maxime laudantium!
          </p>
          <p className="py-2 mb-2 text-green-100 underline cursor-pointer">
            Projects link
          </p>
        </div>
        <div className="realative h-auto w-full mx-auto py-0 shadow-md mb-3  shadow-yellow-200 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image className="m-auto rounded-xl" src={img} alt="/"></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
