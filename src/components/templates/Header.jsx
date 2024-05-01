import React from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { FaCompactDisc } from "react-icons/fa";
const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path
          })`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[40vh] flex flex-col justify-end items-start p-[2%]"
    >
      <h1 className="text-3xl w-1/2 overflow-hidden font-black text-white">{data.name || data.title || data.original_name || data.original_title}</h1>
      <p className="w-1/2 text-sm overflow-hidden text-zinc-300 p-2">{data.overview.slice(0, 200)}...<Link className="text-blue-400">more</Link></p>
      {(data.release_date && data.media_type) && 
      <p className="text-white text-xs">
        <div className="flex gap-1 items-center">
        <HiSpeakerphone className="text-yellow-500 text-sm "/>
        {data.release_date}
        <FaCompactDisc className="text-yellow-500  text-sm" />
        {data.media_type}
        </div>
      </p>}

      <Link className="bg-[#6556cd] p-2 rounded text-white font-semibold mt-2">Watch Trailer</Link>
    </div>
  );
};

export default Header;
