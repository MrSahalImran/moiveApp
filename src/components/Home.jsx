import React from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';

const Home = () => {
    document.title = 'Home Page';
  return (
    <>
        <SideNav/>
        <div className=' content w-[80%] h-full'>
          <TopNav/>

        </div>
    </>
  )
}

export default Home