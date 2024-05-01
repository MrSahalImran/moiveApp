import React, { useEffect, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noProfileimage from "/no-image-icon.webp"

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  // console.log(searches)
  const GetSearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      // console.log(data.data.results)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] select-none relative flex justify-start ml-[15%] items-center">
      <IoSearch className="text-zinc-100 text-3xl " />
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-3 text-lg outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <IoClose
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl hover:cursor-pointer "
        />
      )}
        <div className="w-[50%] transition ease-linear duration-200 rounded-b-xl bg-zinc-800 overflow-auto max-h-[50vh] absolute  top-[100%] left-[6%]">
          {searches.map((search, index) => (
            <Link
              key={index}
              className="text-white border-0 font-semibold hover:bg-[#1f1e24] f  w-[100%] px-10 py-6 flex justify-start items-center hover:text-zinc-300 duration-300  "
            >
              <img className="w-[70px] h-[70px] object-cover shadow-lg rounded-md mr-5"
                src={search.profile_path||search.backdrop_path?`https://image.tmdb.org/t/p/original/${search.backdrop_path ||search.profile_path}`:noProfileimage}
                alt=""
              />
              <span>{search.original_title||search.name||search.original_title||search.original_name}</span>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default TopNav;
