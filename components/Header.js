import React from "react";
import Image from "next/image";
import { HiDownload } from "react-icons/Hi";
import userData from "../userData";




const Header = () => {

  return (
      <div className="md:w-12/12 md:px-52 md:py-[80] py-5  mx-auto flex-col">
        <div className="basic-[50%] flex justify-around items-center md:flex md:max-w-full md:mr-8">
          <img src={userData.profile.avatar} alt="Profile Picture" className="rounded-full object-fill h-28 w-28"/>
        </div>
        <div className="basic-[50%]">
        <p className='font-sans text-xl md:text-4xl text-[#F95E99] text-center md:text-center pb-3 pt-3 font-bold'>{userData.profile.name}</p>
        <p className='text-lg text-center md:text-center md:pt-0 md:pb-0 text-[#6c757d] font-medium'>{userData.profile.bio}</p>
        </div>
      </div>
  );
};

export default Header;

