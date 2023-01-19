import React from 'react'
import { RxGithubLogo } from 'react-icons/Rx';
import { FaLinkedinIn } from 'react-icons/Fa';
import { FaFacebook } from 'react-icons/Fa';
import { FaInstagram } from 'react-icons/Fa';
import { FaYoutube } from 'react-icons/Fa';
import userdata from '../userData';
const Footer = () => {


  return (
  
      <div className='text-center py-5 flex justify-center items-center footer'>
      <p id='footerText' className='text-sm pr-2'>Made With ❤️ By</p>
        <span className='text-[#F95E99]'>
          <img src='https://uploads-ssl.webflow.com/6344fe0ae449f96ce795b92b/635ef94c41528ad6b8ebd9df_Asset%201.svg' className='h-8 w-24 md:h-7 md:w-20  pl-5 hidden' />
        </span>
        <span className='font-bold'>Rudra Narayan Boitei</span>
      </div>
    
  )
}

export default Footer
