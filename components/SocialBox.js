import React from 'react'
import Link from 'next/link'
import { FaInstagramSquare } from 'react-icons/Fa';
/**============================================
 *               CODE FOR BOX SHAPE
 *=============================================**/ 

// if (typeof window === 'object') {

//   let shapes = ["0rem", "20rem", "30rem" ,"40rem" ];

// for (let index = 0; index < shapes.length; index++) {
//   let changeshape = (value) => {
//   let card = document.querySelector(".card");
//   card.style.borderRadius = shapes[1];
// }
// changeshape(); 
// }
// let changeshape = (value) => {
//     let card = document.querySelector('.card');
//     card.style.borderRadius = shapes[1];
//   }
//   changeshape(); 
  
// }

/**============================================
 *               CODE FOR DYNAMIC BOX
 *=============================================**/
const Box = () => {
  const SocialIcons=["FaceBook","Instagram","Linkedin","Twitter","Reddit"];
  const Social = [] ;
  SocialIcons.forEach((item,index) => {
    Social.push(
      <div className="card bg-blue-400 mb-5 -lg drop-shadow-2xl h-12 text-white flex justify-center items-center rounded-full">
      <a href="https://www.linkedin.com/in/rudra99/" className='text-md font-semibold tracking-widest' key={index}>{item}</a>
      </div>
      )
  });

































































































































































































































  

  return (
      <div className='cardbody'>
        <div className='ml-5 mr-5 md:mr-52 md:ml-52 md:pb-5'>
        {Social}
        </div> 
      </div>  
  )
}

export default Box;