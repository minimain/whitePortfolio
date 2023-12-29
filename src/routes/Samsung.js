import Nav from 'component/Nav';
import React from 'react'
import { Link } from 'react-router-dom'
import'styles/samsung.scss'; 

function Samsung() {
  return (
    <>
    <Nav/>

    <div className='sam_component'>   
       <div className='sam_compo_mokup'></div>
       <div className='sam_back'>
         <p>SAMSUNG</p>
         <p>DETAILPAGE</p>
       </div>
       <div className='sam_color'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className='sam_compo_button'>
         {/* button_name, href_go */}
         {/* <Button button_name="DETAIL" href_go="https://github.com/minimain/MINIchat_app"/> */}

       <a href="https://github.com/minimain/MINIchat_app"
        target="_blank"
        rel="noopener noreferrer">
        <button>DETAIL PDF</button>
        </a>

         <a href="https://github.com/minimain/clonsamsungsite"
        target="_blank"
        rel="noopener noreferrer">
        <button>GITHUB</button>
        </a>

        <a href='https://minimain.github.io/clonsamsungsite/'
        target="_blank"
        rel="noopener noreferrer">
        <button>SITE</button>
        </a>
       </div>
   </div>

   </>
  )
}

export default Samsung
