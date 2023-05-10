import React from 'react'
import'../styles/main.scss';
import { skillList } from '../data/skill';
import Nav from '../component/Nav';
import { Link } from 'react-router-dom';
import Mainmokup from 'component/Mainmokup';
import Titlename from 'component/Titlename';



function Main() {
  return (
<> 
<Nav/>

<div className='container'>

{/* main */}
<div className='main'>
<Titlename/>
 {/*  <div className='letter_title'>
  <h1><span>KIM</span><span>MIN</span><span>HEE</span></h1>
  <h1><span>UI/UX</span><span>MIN</span><span>HEE</span></h1>
  <h1><span>MIN</span><span>HEE</span><span>P.M</span></h1>
  </div> */}
  {/* <span>MINHEE</span> */}
  
  <div className='cube_svg'>
  {/* require('./src_assets/logo.svg').default */}
  
  {/* 보류 */}
  </div>

  <p>사용자 중심으로 사고하는 UI DEVELOPER</p>
</div>

{/* section */}
<section>
  {/* <div className='content1'>

  <div className='line'>
    <span className='borderline'></span>
    <span className='borderline'></span>
    <span className='borderline'></span>
  </div>
  
  <div className='width_line'>
  <span className='width_border'></span>
  <span className='width_border'></span>
  <span className='width_border'></span>
  </div>
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

  </div> */}

  <div className='content2'>
    <h1>MY PROFILE</h1>
    <div className='profile'>

    <div className='profile_left'>
      <div className='border_radius'></div>
      <h2>김민희</h2>
      <p>2000.11.15</p>
    </div>

    <div className='profile_right'>
      <p>
      <span>안녕하세요.</span>
      <span>사용자 중심으로 기획하는것을 좋아하고 신기한것에 호기심이 강한 </span>
      <span>UI DEVELOPER </span> 
      <span> 김민희 입니다.</span>
      </p>

      <div>
        <h3>교육</h3>
        <ul>
          <li>ux/ui디자인 첫걸음 시작하기 2022-09-14 ~ 2022-11-09 (패스트 캠퍼스)</li>
          <li>ui/ux웹&앱 디자인 & 프론트엔드(react.js)_D 2022-12-14 ~ 2023-5-24 (이젠평생교육원)</li>
        </ul>
      </div>

      <div>
        <h3>기술</h3>
        <ul>
         {skillList.map(({key, icon}) => (
          <li>{icon()}</li>
         ))}
        </ul>
      </div>
    </div>

  </div>

  </div>
  <div className='content3'>
    <div className='letter'>
    <h2>KAKAO TALK
      <span>KAKAO TALK</span>
    </h2>
    <div className='content_in1'>
      <div className='content_in1_1'>
      <p>REACT | firebase를 이용한 카카오톡 반응형웹사이트</p>
      <span className='border_line1'></span>
      <span className='border_line2'></span>
      <span className='border_line3'></span>

      <ul>
        <li>- 카카오톡 기반의 앱을 sass(scss)를 적용하여 리뉴얼한 React 반응형웹사이트</li>
        <li>
        - firebase를 활용하여 
        <span>Authentication를 사용하여 로그인페이지(로그인,회원가입) 생성</span>
        <span>Cloud Firestore를 이용하여 채팅내용(저장, 삭제, 편집) 저장</span>
        <span>Storage를 이용하여 프로필 이미지 저장</span>
        </li>
        <li>- json파일을 생성하여 데이터를 저장하고 axios를 이용하여 외부데이터 전달</li>
      </ul>
      <p>사용기술</p>
      <p>react | sass(scss) | firebase</p>
      <p>기여도 | 100%</p>
      <Link to={'/katalk'}>
      <button>Detail</button>
      </Link>
      
      {/* <div class="frame">
      <button class="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
      </div> */}
      {/* <button>DETAIL</button> */}
      </div>
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
    <div className='mainkakaoicons'>
    <span className='mainiconka1'>{skillList[2].icon()}</span>
    <span className='mainiconka2'>{skillList[3].icon()}</span>
    <span className='mainiconka3'>{skillList[4].icon()}</span>
    <span className='mainiconka4'>{skillList[5].icon()}</span>
    </div>
    </div>

    
    
    </div>

    
{/* <div className='mokup'>
<div className='mokup_main_mo'>
      <div className='fram_main_mo'>
        <div className='backmokup_main_mo'>
        </div>
      </div>
      <div className='mokup_img_main_mo'></div>
    </div>
<div className='line_main1'></div>
<div className='line_main2'></div> */}
{/* <ul>
  {skillList.map(({key, icon}) => (
  <li>{icon()}</li>
  ))}
</ul> */}
{/* <ul className='iins'>
  {skillList.map(({icon, index})=> (
    <li key={index}>
      {icon(1)}</li>
  ))}
</ul> */}
{/* <span className='icons1'>{skillList[2].icon()}</span>
<span className='icons2'>{skillList[3].icon()}</span>
<span className='icons3'>{skillList[4].icon()}</span>
<span className='icons4'>{skillList[5].icon()}</span> */}
{/* <span className='icons5'>{skillList[1].icon()}</span> */}

{/* <animateMotion
       xlink:href="#car3"
       dur="3s"
       begin="0s"
       fill="freeze"
       repeatCount="indefinite">
       <mpath xlink:href="#motionPath3"/>
</animateMotion> */}

{/* 
<span className='icons1'>{skillList[2].icon()}</span>
<span className='icons2'>{skillList[3].icon()}</span>
<span className='icons3'>{skillList[4].icon()}</span>
<span className='icons4'>{skillList[5].icon()}</span>
*/}




{/* </div> */}
</div>

  <div className='content4'>
    <div className='letter'>
     <h2>NETFLIX
    <span>NETFLIX</span>
     </h2>
    <div className='content_in2'>
      <p>REACT 기반으로 외부API(영화정보)를 Axios로 가져온 NETFLIX Project</p>
      <span className='border_line1'></span>
      <span className='border_line2'></span>
      <span className='border_line3'></span>

      <ul>
        <li>- 외부 영화 정보 API를 Axios를 사용하여 불러들임.</li>
        <li>- 중첩라우트를 사용하여 컴포넌트 정리</li>
        <li>- SWIPER 라이브러리 사용</li>
        <li>- useNavigate 를 사용하여 검색기능 구현</li>
        <li>- sass(styled component)를 적용하여 클래스중복 방지</li>
        <li>- 다양한 연산자를 사용하여 오류가 나지않도록 보완 </li>
      </ul>
      <p>사용기술</p>
      <p>react | sass(styled component,scss) | firebase</p>
      <p>기여도 | 100%</p>
     
      <Link to={'/net'}>
      <button>Detail</button>
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
      <div className='net_mokup_img_main_mo'>
        {/* <video src={process.env.PUBLIC_URL + `/video/netflix.mp4`} autoPlay={`autoPlay`}></video> */}
        {/* <video src='/video/netflix.mp4' autoPlay/> */}
        {/* <video src={process.env.PUBLIC_URL + '/video/netflix.mp4'} autoPlay muted playsInline width={220}>
        </video> */}
      </div>
      <div className='mainneticons'>
    <span className='mainiconka1'>{skillList[2].icon()}</span>
    <span className='mainiconka2'>{skillList[3].icon()}</span>
    <span className='mainiconka3'>{skillList[4].icon()}</span>
    <span className='mainiconka4'>{skillList[5].icon()}</span>
    </div>
    </div>

    </div>
 

  </div>
  <div className='content5'>
    <div className='letter'>
  <h2>KOSDAQ GLOBAL
    <span>KOSDAQ GLOBAL</span>
  </h2>
    <div className='content_in3'>
      <p>HTML과 CSS, JS로 이루어진 반응형웹사이트</p>
      <span className='border_line1'></span>
      <span className='border_line2'></span>
      <span className='border_line3'></span>

      <ul>
        <li>- 미디어쿼리를 사용하여 PC,Tablet,Mobile 외 2개의 크기를 추가하여 더 자세하게 구현</li>
        <li>- javascript 를 사용하여 autoBanner기능으로 javascript 를 사용하여 autoBanner기능으로 </li>
        <li>- toggle을 사용하여 scroll top을 클릭시 해당 페이지 이동</li>
        <li>- scroll 이벤트로 section단위로 페이지 스크롤이 가능하게 구현</li>
        <li>- 웹표준검사,접근성검사 완료 (말 보완)</li>
      </ul>
      <p>사용기술</p>
      <p>HTML | CSS | JavaScript</p>
      <p>기여도 | 100%</p>

      <Link to={'/kosdaq'}>
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
      <div className='kos_mokup_img_main_mo'>
        {/* <video src={process.env.PUBLIC_URL + `/video/netflix.mp4`} autoPlay={`autoPlay`}></video> */}
        {/* <video src='/video/netflix.mp4' autoPlay/> */}
        {/* <video src={process.env.PUBLIC_URL + '/video/netflix.mp4'} autoPlay muted playsInline width={220}>
        </video> */}
      </div>

    <div className='mainkoicons'>
    <span className='mainiconka1'>{skillList[1].icon()}</span>
    <span className='mainiconka2'>{skillList[2].icon()}</span>
    <span className='mainiconka3'>{skillList[0].icon()}</span>
    {/* <span className='mainiconka4'>{skillList[5].icon()}</span> */}
    </div>
    </div>

    
    </div>
  </div>

  <div className='content6'>
    <div className='letter'>
  <h2>CJ ONE
    <span>CJ ONE</span>
  </h2>
    <div className='content_in4'>
      <p>웹접근성을 준수한 반응형 웹사이트</p>
      <span className='border_line1'></span>
      <span className='border_line2'></span>
      <span className='border_line3'></span>

      <ul>
        <li>- mouseover시에 연속된 이미지를 동영상처럼 보이게 구현 </li>
        <li>- 미디어쿼리를 사용하여 PC,Tablet,Mobile  외 2개의 크기를 추가하여
     더 자세하게 구현</li>
        <li>- scroll 이벤트로 스크롤방향으로 이미지가 움직이도록 구현</li>
        <li>- 웹접근성,웹표준 검사 완료</li>
      </ul>
      <p>사용기술</p>
      <p>HTML | CSS | JavaScript</p>
      <p>기여도 | 100%</p>

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
      <div className='cj_mokup_img_main_mo'>
        {/* <video src={process.env.PUBLIC_URL + `/video/netflix.mp4`} autoPlay={`autoPlay`}></video> */}
        {/* <video src='/video/netflix.mp4' autoPlay/> */}
        {/* <video src={process.env.PUBLIC_URL + '/video/netflix.mp4'} autoPlay muted playsInline width={220}>
        </video> */}
      </div>

      <div className='maincjicons'>
    <span className='mainiconka1'>{skillList[1].icon()}</span>
    <span className='mainiconka2'>{skillList[2].icon()}</span>
    <span className='mainiconka3'>{skillList[0].icon()}</span>
    {/* <span className='mainiconka4'>{skillList[5].icon()}</span> */}
    </div>

    </div>
   
    </div>
  </div>

  <div className='content7'>
    <div className='letter'>
  <h2>SAMSUNG
    <span>SAMSUNG</span>
  </h2>
    <div className='content_in5'>
      <p>적응형 페이지로 만든 삼성전기 Web Site</p>
      <span className='border_line1'></span>
      <span className='border_line2'></span>
      <span className='border_line3'></span>

      <ul>
        <li>scroll 을 이용하여 스크롤의 위치에 따라 글이 나타나는 효과 구현</li>
        <li>autoBanner 기능으로 배너 구현</li>
        <li>웹접근성, 유효성 검사 완료</li>
      </ul>

      <p>사용기술</p>
      <p>HTML | CSS | JavaScript</p>
      <p>기여도 | 100%</p>

      <Link to={'/samsung'}>
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
      <div className='sam_mokup_img_main_mo'>
        {/* <video src={process.env.PUBLIC_URL + `/video/netflix.mp4`} autoPlay={`autoPlay`}></video> */}
        {/* <video src='/video/netflix.mp4' autoPlay/> */}
        {/* <video src={process.env.PUBLIC_URL + '/video/netflix.mp4'} autoPlay muted playsInline width={220}>
        </video> */}
      </div>

      <div className='mainsamicons'>
    <span className='mainiconka1'>{skillList[1].icon()}</span>
    <span className='mainiconka2'>{skillList[2].icon()}</span>
    <span className='mainiconka3'>{skillList[0].icon()}</span>
    {/* <span className='mainiconka4'>{skillList[5].icon()}</span> */}
    </div>
    </div>
    
    </div> 
  </div>


</section>



<div className='concat'>
  
</div>





</div>


</>
  )
}

export default Main