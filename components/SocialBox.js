import React from 'react'
import Link from 'next/link'
import { FaInstagramSquare } from 'react-icons/Fa';
import userdata from '../userData';

// if (typeof window === 'object') {}

/**============================================
 *               CODE FOR DYNAMIC BOX
 *=============================================**/

const SocialBox = () => {
  
  return (
    <div className='cardbody'>
    <div className='ml-5 mr-5 md:mr-52 md:ml-52 md:pb-5'>
    
    
    {
      userdata.container.links.map((data)=>{
        // Function to count number of times the container box clicked
        let click = 0;
        const handleClick = (path) => {
        
          click++;
          console.log(click);
        };
       
          return(
            <div className='card bg-blue-400 mb-5 -lg drop-shadow-2xl h-12 text-white flex justify-center items-center rounded-full' >
              <a  className='text-md font-semibold tracking-widest'onClick={() => handleClick("/posts")}>{data.name}</a>
            </div>
          )
      })
    }
    
    
    </div>
    </div>

  )
}

export default SocialBox;




// export default Box;

// const Box = () => {
//   const SocialIcons=[""];
//   for (let i = 0; i < SocialIcons.length; z++) {
//     const element = array[index];
    
//   }
//   const Social = [] ;
//   SocialIcons.forEach((item,index) => {
//     Social.push(
//       <div className="card bg-blue-400 mb-5 -lg drop-shadow-2xl h-12 text-white flex justify-center items-center rounded-full">
//       <a href="{container.link.name}" className='text-md font-semibold tracking-widest' key={index}>{item}</a>
//       </div>
//       )
//   });


//   return (
//       <div className='cardbody'>
//         <div className='ml-5 mr-5 md:mr-52 md:ml-52 md:pb-5'>
//         {Social}
//         </div> 
//       </div>  
//   )
// }
