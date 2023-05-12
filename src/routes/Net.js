import Nav from 'component/Nav';
import React from 'react'
import'styles/net.scss';

function Net() {
  return (
    <>
     <Nav/>

     <div className='net_component'>   
        <div className='net_compo_mokup'></div>
        <div className='net_back'>
          <p>NETFLIX</p>
          <p>DETAILPAGE</p>
        </div>
        <div className='net_color'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <span></span> */}
        </div>
        <div className='net_compo_button'>
          {/* button_name, href_go */}
          {/* <Button button_name="DETAIL" href_go="https://github.com/minimain/MINIchat_app"/> */}

        <a href="https://github.com/minimain/MINIchat_app"
         target="_blank"
         rel="noopener noreferrer">
         <button>DETAIL PDF</button>
         </a>

          <a href="https://github.com/minimain/MINIchat_app"
         target="_blank"
         rel="noopener noreferrer">
         <button>GITHUB</button>
         </a>

         <a href='https://minimain.github.io/MINIchat_app/'
         target="_blank"
         rel="noopener noreferrer">
         <button>SITE</button>
         </a>
        </div>
    </div>

    </>
  )
}

export default Net