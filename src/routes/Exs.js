import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import'styles/exs.scss';

function Exs() {
  const [scrollY, setScrollY] = useState(0);

 const targetRef = useRef(null);  
  const handleScroll = () => {
    console.log("scrolling");

    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition)
    
    if (window.scrollY > 0) {
      targetRef.current.style.position = "fixed";      
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log('scrollY->',scrollY);
  
  return (
    <div className="App">
      <div ref={targetRef}>이벤트 발생위치</div>
      <div className='onstar1'>
      <ul>
  <li className={ ( 725 < scrollY && scrollY < 928 ) ? 'show' : 'hide' }>비약적으로 강화된 카메라 시스템.</li> 
  <li className={ ( 928 < scrollY && scrollY < 1100 ) ? 'show' : 'hide'}> 뛰어난 반응성으로 매일 하던 제스처에 전혀 새로운 감각을 선사하는 디스플레이. </li>
  <li className={ ( 1100 < scrollY && scrollY < 1330 ) ? 'show' : 'hide' } >스마트폰 사상 가장 빠른 칩.</li>
  <li className={ ( 1330 < scrollY && scrollY < 1550 ) ? 'show' : 'hide' } >독보적인 내구성. 획기적인 도약을 이뤄낸 배터리 성능까지.</li>
      </ul>
      </div>
      <div className='onstar2'>
        이
      </div>
      <div className='onstar3'>
        일심
      </div>
      <div className='onstar4'>
        일4
      </div>
      <div className='onstar5'>
        일5
      </div>
      <div className='onstar6'>
        일6
      </div>
      <div className='onstar7'>
        일7
      </div>
      <div className='onstar8'>
        일8
      </div>
    </div>
  ) 

/*   const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition)
  };

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  console.log(scrollY) */



  
}

export default Exs