import React from 'react'
// React Icons🐳
import {FaYoutube,FaInstagram,FaLinkedin, FaReddit, FaTwitch, FaTwitter, FaFacebook, FaTelegram, FaWhatsapp} from 'react-icons/Fa';
import { ListFormat } from 'typescript';
import userdata from '../userData';
import {  } from "react-icons/bs";

const Skills = () => {

  return ( 
    <div className='pb-4 flex justify-center'>
    {
           userdata.mediaIcon.map((data)=>{
            let dataIcons = <FaYoutube/>
            switch (data.icons) {
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
                  <span className=''><a href={data.link}>{dataIcons}</a>
                  </span>
              )
          })
    }
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