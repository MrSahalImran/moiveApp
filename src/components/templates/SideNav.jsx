import React from "react";
import { PiTelevisionSimpleFill,PiTelevisionFill } from "react-icons/pi";
import { IoIosPeople,IoIosCall } from "react-icons/io";
import { RiFireFill, RiMovie2Fill } from "react-icons/ri";
import { SiGooglebard } from "react-icons/si";
import { FaPager } from "react-icons/fa";

import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <>
      <div className="nav w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl flex text-white font-bold items-center ">
          <PiTelevisionSimpleFill className=" text-[#6556cd] mr-2" />
          <span>Movie Info.</span>
        </h1>
        <nav className="flex-col flex  text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            New Feeds
          </h1>
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            <RiFireFill />
            Trending
          </Link>
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            <SiGooglebard className="w-fit" />
            Popular
          </Link>
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            <RiMovie2Fill/>
            Movies
          </Link>
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            <PiTelevisionFill/>
            Tv Shows
          </Link>
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            <IoIosPeople/>
            People
          </Link>
        </nav>
        <hr  className="h-[1px] bg-zinc-400 border-none"/>
        <nav className="flex-col flex text-zinc-400 text-xl ">
          <h1 className="text-white font-semibold text-xl mt-6 mb-2">
            
            Additional Information
          </h1>
         
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            < FaPager/>
            About
          </Link>
          <Link className="hover:bg-[#6556cd] p-4 hover:text-white duration-200 flex items-center gap-2 rounded-lg">
            <IoIosCall/>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
