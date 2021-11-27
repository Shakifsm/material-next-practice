import React from 'react';
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div style={{border:"1px solid yellow", textAlign:"center"}}>
        <Image width="80px" height="40px" src="https://i.ibb.co/HBHqS1y/evRvi.png" alt="sidebar logo" />
        <ul>
          <Link href="/" passHref><li>Home</li></Link>
          <Link href="/HomeCleaning" passHref><li>Home & Cleaning</li></Link>
          <Link href="/airFreshner" passHref><li>AirFreshner</li></Link>
        </ul>
    </div>
  );
};

export default Sidebar;
