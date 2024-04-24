import React, { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="w-full h-[10vh] select-none relative flex justify-start ml-[15%] items-center">
      <IoSearch className="text-zinc-400 text-3xl " />
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-3 text-lg outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && <IoClose onClick={()=>setQuery("")} className="text-zinc-400 text-3xl hover:cursor-pointer " />}
      
      <div className="w-[50%] overflow-auto max-h-[50vh] bg-zinc-200 absolute  top-[90%]">
        {/* <Link className="text-zinc-700 font-semibold hover:bg-zinc-300 f hover:text-black w-[100%] p-10 flex justify-start items-center duration-300 border-b-2 border-zinc-100 ">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
        
      </div>
    </div>
  );
};

export default TopNav;
