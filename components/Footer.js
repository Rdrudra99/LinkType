import React from 'react'
import {RxGithubLogo} from 'react-icons/Rx';
import {FaLinkedinIn} from 'react-icons/Fa';
import {FaFacebook} from 'react-icons/Fa';
import {FaInstagram} from 'react-icons/Fa';
import {FaYoutube} from 'react-icons/Fa';
const Footer = () => {
  // Pass Name Here For Footer🐳
  const yourName = "Your Name Here";
  return (
    <>
    <div className='text-center py-5'>Made With ❤️ By <span className='text-blue-600'>{yourName}</span> </div>
    
    </>
  )
}

export default Footer
