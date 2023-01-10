import React from 'react'
import { RxGithubLogo } from 'react-icons/Rx';
import { FaLinkedinIn } from 'react-icons/Fa';
import { FaFacebook } from 'react-icons/Fa';
import { FaInstagram } from 'react-icons/Fa';
import { FaYoutube } from 'react-icons/Fa';
import userdata from '../userData';
const Footer = () => {

  return (
    <>
      <div className='text-center py-5 flex justify-center items-center footer'>Made With ❤️ By
        <span className='text-[#F95E99]'>
          <img src='https://uploads-ssl.webflow.com/6344fe0ae449f96ce795b92b/635ef94c41528ad6b8ebd9df_Asset%201.svg' className='h-8 w-24 md:h-9 md:w-19  pl-5' />
        </span>
      </div>
    </>
  )
}

export default Footer
