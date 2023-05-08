import React, { useEffect } from 'react'
import'../styles/nav.scss';
import { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  }

  // const menu = document.querySelector('.btnMenu');

  // useEffect(() => {
  //   menu.addEventListener('click', e => {
  //     e.preventDefault();
  //     e.classList.toggle('on');
  //   });
  // },[])
    

  return (
    <header>
     <nav>
      <Link to={'/'}>
      <h1>Portfolio</h1>
      </Link>
     
      

      <div class="btnMenu" onClick={() => handleClick()}>
        <div class="btnMenu_burger"></div>
      </div>
      {modalOpen && (
        <Navigation setModalOpen={setModalOpen}/>
      )}


      
     </nav>
     </header>
  )
}

export default Nav