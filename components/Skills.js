import React from 'react'
// React Icons🐳
import {FaDocker,FaSass,FaCss3Alt,FaPython,FaJava,FaReact, FaYoutube} from 'react-icons/Fa';
import { ListFormat } from 'typescript';
import userdata from '../userData';

const Skills = () => {

  return (
    <div className='pb-4'>
    {
           userdata.container.links.map((data)=>{
              return(
                  <span><a href={data.link}></a>{data.icons}</span>
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