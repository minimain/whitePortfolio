import React, { useRef } from 'react'
import'../styles/navigation.scss';
import useOnClickOutside from 'use-onclickoutside';
//import useOnClickOutside from 'hooks/useOnClickOutside';


function Navigation({setModalOpen}) {
  
  const ref = useRef();
  
 useOnClickOutside(ref, () => {setModalOpen(false)});
  
  return (
  <div className='navigation' ref={ref}>
    {/* 
    <div class="btnMenu" onClick={() => handleClick()}>
        <div class="btnMenu_burger"></div>
      </div>
     */}
    <div class="btnMenu" onClick={()=>{setModalOpen(false)}}>
    <div class="btnMenu_burger"></div>
    </div>

  <div className='line'>
    <span className='borderline'></span>
    <span className='borderline'></span>
    <span className='borderline'></span>
  </div>
  
  {/* <div className='width_line'>
  <span className='width_border'></span>
  <span className='width_border'></span>
  <span className='width_border'></span>
  </div> */}
   <ul>
    <li className='first_li'>
     <div>
     MAIN
      <span>MAIN</span>
      <span className='width_border'></span>
      <ul>
        <li>HOME</li>
        <li>INDEX</li>
        <li>MY PROFILE</li>
      </ul>
     </div>
    </li>
    <li className='first_li'>
      <div>
      PROJECT
    <span>PROJECT</span>
    <span className='width_border'></span>
      <ul>
        <li>KAKAO TALK</li>
        <li>NETFLIX</li>
        <li>KOSDAQ GLOBAL</li>
        <li>CJ ONE</li>
        <li>SAMSUNG</li>
      </ul>
      </div>
    </li>
    <li className='first_li'>
    
<div>
    CONTACT
    <span>CONTACT</span>
    <span className='width_border'></span>
      <ul>
      <li>CONCAT</li>
      </ul>
</div>
    </li>
   </ul>

  </div>
  )
}

export default Navigation