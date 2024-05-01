import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import { RiH1 } from "react-icons/ri";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
const Home = () => {
  document.title = "Home Page";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)
  const [category, setCategory] = useState("all")

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.error(error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
    console.log(category);
  }, [category]);
  
  
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className=" content w-[80%] h-full overflow-y-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        <div className='my-3 flex justify-between' >
          <h1 className='text-xl text-zinc-400 font-semibold p-3'>Trending</h1>

          <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e)=>setCategory(e.target.value )} />

        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : <h1>Loading....</h1>
};

export default Home;
