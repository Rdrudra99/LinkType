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
          userdata.container.links.map((data) => {
            /**------------------------------------------------------------------------
             **                            chnage style of card
             *------------------------------------------------------------------------**/
            function changeStyle() {
              if (typeof window === 'object') {
                var elements = document.getElementsByClassName('card');
                for (var i = 0; i < elements.length; i++) {
                  elements[i].style.backgroundColor = userdata.container.containerColor;
                  elements[i].style.color = userdata.container.textColor;
                  elements[i].style.border = userdata.container.borderColor;
                  // elements[i].style.fontFamily = userdata.container.fontFamily;
                }
              }

              if (userdata.container.shape == "circle") {

                return "card rounded-full  mb-5 -lg  h-14 flex justify-center items-center"

              }

              if (userdata.container.shape == "rectangle") {

                return "card rounded-sm  mb-5 -lg  h-14 flex justify-center items-center"
              }
              else {

                return "card rounded-lg  mb-5 -lg  h-14 flex justify-center items-center"

              }
            }

            return (
              <div className={changeStyle()}>
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





// if (typeof window === 'object') {
            //   let shapes = userdata.container.shape;
            //   if (shapes == "round") {
            //     shapes = "50px";
            //   }
            //   if (shapes == "rectangle") {
            //     shapes = "0px";
            //   }
            //   else {
            //     shapes = "25px"
            //   }
            //   let card = document.querySelector('.card');

            //   card.style.borderRadius = shapes;

            // }