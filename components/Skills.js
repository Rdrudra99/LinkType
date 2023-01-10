import React from 'react'
// React Icons🐳
import {FaYoutube,FaInstagram,FaLinkedin, FaReddit, FaTwitch, FaTwitter, FaFacebook, FaTelegram, FaWhatsapp} from 'react-icons/Fa';
import { ListFormat } from 'typescript';
import { IconContext } from "react-icons";

import userdata from '../userData';

const Skills = () => {

  return ( 
    // Use IconContext To Style The Icons IN LinkType 
    <div className='pb-4 flex justify-center'>
    <IconContext.Provider value={{ color: "dark", className: "global-class-name" ,size:"1.5rem" }}>
    {
           userdata.mediaIcon.map((data)=>{
            let dataIcons = <FaYoutube/>
            switch (data.name) {
              case "Youtube":
                dataIcons = <FaYoutube/>
                break;
              case "Instagram":
                dataIcons = <FaInstagram/>
                break;
              case "LinkedIn":
                dataIcons = <FaLinkedin/>
                break;
              case "Reddit":
                dataIcons = <FaReddit/>
                break;
              case "Twitter":
                dataIcons = <FaTwitter/>
                break;
              case "Facebook":
                dataIcons = <FaFacebook/>
                break;
              case "Telegram":
                dataIcons = <FaTelegram/>
                break;
              case "Whatsapp":
                dataIcons = <FaWhatsapp/>
                break;
            }
            
              return(
                  <span className='pl-2 pr-2'><a href={data.link}>{dataIcons}</a>
                  </span>
              )
          })
    }
    </IconContext.Provider>
        </div>
  )
}

export default Skills;




{/* <h1 className='text-[#6c757d] text-3xl p-4'><DiVim/></h1>
<h1 className='text-[#6c757d] text-3xl p-4'><FaDocker/></h1>
<h1 className='text-[#6c757d] text-3xl p-4'><FaPython/></h1>
<h1 className='text-[#6c757d] text-3xl p-4'><FaCss3Alt/></h1>
<h1 className='text-[#6c757d] text-3xl p-4'><IoLogoJavascript/></h1>
<h1 className='text-[#6c757d] text-3xl p-4'><FaReact/></h1>
<h1 className='text-[#6c757d] text-3xl p-4 hidden md:block'><FaJava/></h1>
<h1 className='text-[#6c757d] text-3xl p-4 hidden md:block'><AiFillGithub/></h1>
<h1 className='text-[#6c757d] text-3xl p-4 hidden md:block'><FaSass/></h1>
<h1 className='text-[#6c757d] text-3xl p-4 hidden md:block'><BsBootstrapReboot/></h1> */}



// const Skills = () => {
//   {
//     userdata.container.links.map((data)=>{
//         return(
//             <h1>rudrar</h1>
//         )
//     })
//   }
// }