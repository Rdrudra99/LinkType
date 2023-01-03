import React from 'react'
// React Icons🐳
import {FaDocker,FaSass,FaCss3Alt,FaPython,FaJava,FaReact} from 'react-icons/Fa';
import { ListFormat } from 'typescript';


const Skills = () => {
  const icons=[<FaJava/>,<FaSass/>,<FaPython/>, <FaReact/>,<FaCss3Alt/>,<FaDocker/>];
  const itemList = [] ;
 
  
  icons.forEach((item,index)=>{
  itemList.push(<h1 className='text-[#6c757d] text-3xl p-2 pb-5'  key={index}>{item}</h1>);
})

  return (
    <div className='py-2'>
        
        <div className='flex justify-center items-center'>
         {itemList}
        </div>
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