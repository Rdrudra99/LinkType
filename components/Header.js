import React ,{useState,useEffect}from "react";
import Image from "next/image";
import { HiDownload } from "react-icons/Hi";
import userData from "../userData";





const Header = () => {

  if (typeof window === 'object') {
  var elements = document.getElementById('nameColor');
  // elements.style.color = userData.profile.nameColor;
  var elements = document.getElementById('bio');
  // elements.style.color = userData.profile.bioColor;
  }



  return (
    <div className="md:w-12/12 md:px-52 md:py-[80] py-5  mx-auto flex-col">
      <div className="basic-[50%] flex justify-around items-center md:flex md:max-w-full md:mr-8">
        <img src={userData.profile.avatar} alt="Profile Picture" className="rounded-full object-fill h-28 w-28" />
      </div>
      <div className="basic-[50%]">
        <p className='text-xl md:text-2xl text-center md:text-center pb-3 pt-3 font-bold' id="nameColor">{userData.profile.name}</p>
        <p className='text-lg  text-center md:text-center md:pt-0 md:pb-0' id="bio">{userData.profile.bio}</p>
      </div>
    </div>
  );
};

export default Header;

