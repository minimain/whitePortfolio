import React, { useEffect, useRef, useState } from 'react'
import'../styles/main.scss';
import { skillList } from '../data/skill';
import Nav from '../component/Nav';
import { Link } from 'react-router-dom';
//import Mainmokup from 'component/Mainmokup';
import { GoX } from "react-icons/go";
import { FaBarcode } from "react-icons/fa";




function Main() {

  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelector('.main');

      if (window.scrollY > 0) {
        content.classList.add('on');
      } else {
        content.classList.remove('on');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
<> 
{/* <body id="smooth-scroll">
    <div id="root"></div>
</body> */}


<Nav/>

<div className='container' >

{/* main */}
<div className='main'>
  <h1>MINHEE</h1>
  <h1>PORTFOLIO</h1>
  <div className='content_main'>
    <span> UI/UX </span><GoX/><span> UI DEVELOPER </span>
    <GoX/><span> PM </span>
  </div>
  <p>사용자 중심으로 사고하는 UI DEVELOPER</p>
</div>

{/* section */}

  <div className='content1'>
    <ul className='go_page'>
      <li>이력서<span className='contact_page'>#01</span></li>
      <li>GitHub<span className='contact_page'>#02</span></li>
      <li>PDF<span className='contact_page'>#03</span></li>
    </ul>

    <div className='portfile'>
      <p>
        NAME KIMMINHEE AGE 2000.11.15 사용자 중심으로 기획하는것을 좋아하고 신기한것에 호기심이 강한 UI DEVELOPER <span><GoX/></span> PM 입니다.
      </p>
    </div>

<div className='main_content1'>
<div className='aca'>
    <ul>
      <li>교육</li>
      <li>ux/ui디자인 첫걸음 시작하기 2022-09-14 ~ 2022-11-09 (패스트 캠퍼스)</li>
      <li>ui/ux웹&앱 디자인 & 프론트엔드(react.js)_D 2022-12-14 ~ 2023-5-24 (이젠평생교육원)</li>
    </ul>
    </div>

    <div className='tech'>
    {/* <p>사용기술</p> */}
    <ul className='content1_icon'>
         {skillList.map(({key, icon}) => (
          <li>{icon()}</li>
         ))}
    </ul>
</div>
</div>
    
  </div>

  <div className='content2'>
    <div className='box_content2'>
      <h2>#KAKAO</h2>
      <span className='content2_rotate'>RESPONSIVE WEB DISIGN</span>
      <span className='content2_rotate'>KAKAO TALK CLON CODING</span>
      <span className='content2_rotate'><FaBarcode/><FaBarcode/><FaBarcode/></span>
      <div className='content2_box_in'>
        <ul>
          <li><span>기여도</span> <span>100%</span></li>
          <li><span>REACT</span> <span>100%</span></li>
          <li><span>FIREBASE</span> <span>100%</span></li>
          <li><span>SASS(SCSS)</span> <span>100%</span></li>
        </ul>

        <ul>
          <li>사이트 이동은 BUTTON 클릭</li>
          <li>BUTTON을 클릭하면 DETAIIL한 내용을 볼수있습니다.</li>
          <li>빠른 이동은 상단의 아이콘 클릭</li>
        </ul>

      </div>

      <div className='content2_out1'>
      <ul>
        <li>- 카카오톡 기반의 앱을 sass(scss)를 적용하여<br/>리뉴얼한 React 반응형웹사이트</li>
        <li>
        - firebase를 활용하여 
        <span>Authentication를 사용하여 로그인페이지
          <span>(로그인,회원가입) 생성</span></span>
        <span>Cloud Firestore를 이용하여 채팅내용
          <span>(저장, 삭제, 편집) 저장</span></span>
        <span>Storage를 이용하여 프로필 이미지 저장</span>
        </li>
        <li>- json파일을 생성하여 데이터를 저장하고 
          <span>axios를 이용하여 외부데이터 전달</span></li>
      </ul>
      </div>

      <div className='content2_out2'>
        <p className='letter_name'>
      KAKAO
        </p>
      <Link to={'/katalk'}>
      <button>DETAIL</button>
      </Link>
      </div>
    </div>
    
    <div className='kakao_mokup'>
    <div className='kakao_mokup_main_mo'>
      <div className='kakao_fram_main_mo'>
        <div className='kakao_backmokup_main_mo'>
        <video src={process.env.PUBLIC_URL + '/video/kakaomain.mp4'} autoPlay muted playsInline loop>
        </video>
        </div>
      </div>
      <div className='kakao_mokup_img_main_mo'></div>
      </div>
      </div>

  </div>

{/* content3 넷플릭스 */}
  <div className='content3'>
  <div className='box_content3'>
      <h2>#NETFLIX</h2>
      <span className='content3_rotate'>RESPONSIVE WEB DISIGN</span>
      <span className='content3_rotate'>NETFLIX CLON CODING</span>
      <span className='content3_rotate'><FaBarcode/><FaBarcode/><FaBarcode/></span>
      <div className='content3_box_in'>
        <ul>
          <li><span>기여도</span> <span>100%</span></li>
          <li><span>REACT</span> <span>100%</span></li>
          <li><span>FIREBASE</span> <span>100%</span></li>
          <li><span>SASS(SCSS)</span> <span>100%</span></li>
        </ul>

        <ul>
          <li>사이트 이동은 BUTTON 클릭</li>
          <li>BUTTON을 클릭하면 DETAIIL한 내용을 볼수있습니다.</li>
          <li>빠른 이동은 상단의 아이콘 클릭</li>
        </ul>

      </div>

      <div className='content3_out1'>
      <ul>
      <li>- 외부 영화 정보 API를 Axios를 사용하여 불러들임.</li>
        <li>- 중첩라우트를 사용하여 컴포넌트 정리</li>
        <li>- SWIPER 라이브러리 사용</li>
        <li>- useNavigate 를 사용하여 검색기능 구현</li>
        <li>- sass(styled component)를 적용하여 클래스중복 방지</li>
        <li>- 다양한 연산자를 사용하여 오류가 나지않도록 보완 </li>
      </ul>
      </div>

      <div className='content3_out2'>
        <p className='letter_name'>
      NETFLIX
        </p>
      <Link to={'/netflix'}>
      <button>DETAIL</button>
      </Link>
      </div>
    </div>
    
    <div className='net_main_mokup'>    
    <div className='net_mokup_main_mo'>

      <div className='net_fram_main_mo'>
        <div className='net_backmokup_main_mo'>
        <video src={process.env.PUBLIC_URL + '/video/netmain.mp4'} autoPlay muted playsInline loop>
        </video>
        </div>
      </div>
      <div className='net_mokup_img_main_mo'></div>

    </div>

    </div>
  </div>

{/* content4 코스닥 글로벌 */}
  <div className='content4'>
  <div className='box_content4'>
      <h2>#KOSDAQ GLOBAL</h2>
      <span className='content4_rotate'>RESPONSIVE WEB DISIGN</span>
      <span className='content4_rotate'>KOSDAQ GLOBAL CLON CODING</span>
      <span className='content4_rotate'><FaBarcode/><FaBarcode/><FaBarcode/></span>
      <div className='content4_box_in'>
        <ul>
          <li><span>기여도</span> <span>100%</span></li>
          <li><span>HTML</span> <span>100%</span></li>
          <li><span>CSS</span> <span>100%</span></li>
          <li><span>JAVASCRIPT</span> <span>100%</span></li>
        </ul>

        <ul>
          <li>사이트 이동은 BUTTON 클릭</li>
          <li>BUTTON을 클릭하면 DETAIIL한 내용을 볼수있습니다.</li>
          <li>빠른 이동은 상단의 아이콘 클릭</li>
        </ul>

      </div>

      <div className='content4_out1'>
      <ul>
        <li>- 미디어쿼리를 사용하여 PC,Tablet,Mobile<br/>외 2개의 크기를 추가하여 더 자세하게 구현</li>
        <li>- javascript 를 사용하여 autoBanner 구현</li>
        <li>- toggle을 사용하여 scroll top을 클릭시 해당 페이지 이동</li>
        <li>- scroll 이벤트로 section단위로 페이지 스크롤이 가능하게 구현</li>
        <li>- 웹표준검사,접근성검사 완료 (말 보완)</li>
      </ul>
      </div>

      <div className='content4_out2'>
        <p className='letter_name'>
        KOSDAQ<br/>GLOBAL
        </p>
      <Link to={'/kos'}>
      <button>DETAIL</button>
      </Link>
      </div>
    </div>

    <div className='kos_main_mokup'>
    <div className='kos_mokup_main_mo'>
      <div className='kos_fram_main_mo'>
        <div className='kos_backmokup_main_mo'>
        <video src={process.env.PUBLIC_URL + '/video/kosmain.mp4'} autoPlay muted playsInline loop>
        </video>
        </div>
      </div>
      <div className='kos_mokup_img_main_mo'></div>
    </div>   
    </div>
  </div>

{/* content5 cj one */}

<div className='content5'>
  <div className='box_content5'>
      <h2>#CJONE</h2>
      <span className='content5_rotate'>RESPONSIVE WEB DISIGN</span>
      <span className='content5_rotate'>CJONE CLON CODING</span>
      <span className='content5_rotate'><FaBarcode/><FaBarcode/><FaBarcode/></span>
      <div className='content5_box_in'>
        <ul>
          <li><span>기여도</span> <span>100%</span></li>
          <li><span>HTML</span> <span>100%</span></li>
          <li><span>CSS</span> <span>100%</span></li>
          <li><span>JAVASCRIPT</span> <span>100%</span></li>
        </ul>

        <ul>
          <li>사이트 이동은 BUTTON 클릭</li>
          <li>BUTTON을 클릭하면 DETAIIL한 내용을 볼수있습니다.</li>
          <li>빠른 이동은 상단의 아이콘 클릭</li>
        </ul>

      </div>

      <div className='content5_out1'>
      <ul>
      <li>- mouseover시에 연속된 이미지를 동영상처럼 보이게 구현 </li>
        <li>- 미디어쿼리를 사용하여 PC,Tablet,Mobile<br/>
              외 2개의 크기를 추가하여 더 자세하게 구현</li>
        <li>- scroll 이벤트로 스크롤방향으로 이미지가 움직이도록 구현</li>
        <li>- 웹접근성,웹표준 검사 완료</li>
      </ul>
      </div>

      <div className='content5_out2'>
        <p className='letter_name'>
      CJONE
        </p>
      <Link to={'/cj'}>
      <button>DETAIL</button>
      </Link>
      </div>
    </div>
    
    <div className='cj_main_mokup'>
    <div className='cj_mokup_main_mo'>
      <div className='cj_fram_main_mo'>
        <div className='cj_backmokup_main_mo'>
        <video src={process.env.PUBLIC_URL + '/video/cjmain.mp4'} autoPlay muted playsInline loop>
        </video>
        </div>
      </div>
      <div className='cj_mokup_img_main_mo'></div>
    </div>
    </div>
  </div>

  {/* content6 */}
  <div className='content6'>
  <div className='box_content6'>
      <h2>#SAMSUNG</h2>
      <span className='content6_rotate'>WEB DISIGN</span>
      <span className='content6_rotate'>SAMSUNG CLON CODING</span>
      <span className='content6_rotate'><FaBarcode/><FaBarcode/><FaBarcode/></span>
      <div className='content6_box_in'>
        <ul>
          <li><span>기여도</span> <span>100%</span></li>
          <li><span>HTML</span> <span>100%</span></li>
          <li><span>CSS</span> <span>100%</span></li>
          <li><span>JAVASCRIPT</span> <span>100%</span></li>
        </ul>

        <ul>
          <li>사이트 이동은 BUTTON 클릭</li>
          <li>BUTTON을 클릭하면 DETAIIL한 내용을 볼수있습니다.</li>
          <li>빠른 이동은 상단의 아이콘 클릭</li>
        </ul>

      </div>

      <div className='content6_out1'>
      <ul>
        <li>- scroll 을 이용하여 스크롤의 위치에 따라 글이 나타나는 효과 구현</li>
        <li>- autoBanner 기능으로 배너 구현</li>
        <li>- 웹접근성, 유효성 검사 완료</li>
      </ul>
      </div>

      <div className='content6_out2'>
        <p className='letter_name'>
        SAMSUNG
        </p>
      <Link to={'/sam'}>
      <button>DETAIL</button>
      </Link>
      </div>
    </div>

    <div className='sam_main_mokup'>
    <div className='sam_mokup_main_mo'>
      <div className='sam_fram_main_mo'>
        <div className='sam_backmokup_main_mo'>
        <video src={process.env.PUBLIC_URL + '/video/sammain.mp4'} autoPlay muted playsInline loop>
        </video>
        </div>
      </div>
      <div className='sam_mokup_img_main_mo'></div>
    </div>
    
    </div> 
  </div>





<div className='concat'>
  
</div>





</div>


</>
  )
}

export default Main