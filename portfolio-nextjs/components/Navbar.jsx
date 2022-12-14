import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px=16">
        <Image
          src="/../public/assets/kn (1).png"
          alt=""
          width="150"
          height="75"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text:sm uppercase hover:border-b-1">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text:sm uppercase hover:border-b-1">
                About Me
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text:sm uppercase hover:border-b-1">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text:sm uppercase hover:border-b-1">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text:sm uppercase hover:border-b-1">
                Contacts
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/20" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#1d1d1f] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                className="rounded-full shadow-lg shadow-[#585c58] p-2 cursor-pointer"
                src="/../public/assets/kn (1).png"
                alt="/"
                width="85"
                height="43"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#585c58] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                From dust I have come,Dust shall I be.
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-2 text-md">Home</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-md">About Me</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-md">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-md">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-md">Contacts</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="py-4 tracking-widest text-[#bea12f]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
