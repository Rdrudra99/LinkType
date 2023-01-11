import React from 'react'
import Link from 'next/link'
import { FaInstagramSquare } from 'react-icons/Fa';
import userdata from '../userData';

// if (typeof window === 'object') {}

/**============================================
 *               CODE FOR DYNAMIC BOX
 *=============================================**/

const SocialBox = () => {
  // Function to count number of times the container box clicked
  let click = 0;
  const handleClick = (path) => {
    click++;
    console.log(click);
  };

  
  
  return (
    <div className='cardbody' >
    <div className='ml-5 mr-5 md:mr-96 md:ml-96 md:pb-5' onClick={() => handleClick("/posts")}>   
    {
      userdata.container.links.map((data)=>{
        if (typeof window === 'object') {
    
          let card = document.querySelector('.card');
          
          card.style.borderRadius = userdata.container.borderradius;
      
          }
          return(
            <div className='card bg-[#F95E99] mb-5 -lg  h-14 text-white flex justify-center items-center ' >
            
              <h1><a className='font-semibold tracking-widest' href={data.link}>{data.name}</a></h1>
            </div>
          )
      })
    }    
    </div>
    </div>
  )
}

export default SocialBox;





