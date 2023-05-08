import Nav from 'component/Nav';
import React from 'react'
import { Link } from 'react-router-dom'
import'styles/cj.scss';

function Cj() {
  return (
    <>
    <Nav/>

    <div className='cjmokup_img_compo'>
    {/* 이미지 넣기 */}
    <div className='mokup_pc'>
      <div className='fram_pc'>
        <div className='backmokup_pc'>
        </div>
      </div>
      <div className='mokup_img_pc'>

    <div className='block_cj1'>
      <button>Page</button>
      <p>완성한 사이트로 이동합니다.</p>
    </div>

      </div>
    </div>

    <div className='mokup_tab'>
    <div className='fram_tab'>
        <div className='backmokup_tab'>
        </div>
    </div>
    <div className='mokup_img_tab'>

    <div className='block_cj2'>
      <button>Github</button>
      <p>완성한 사이트의 코드가 저장된 github로 이동합니다.</p>
    </div>

    </div>
    </div>

    <div className='mokup_mo'>

    <div className='fram_mo'>
        <div className='backmokup_mo'>
        </div>
    </div>
    <div className='mokup_img_mo'>

    <div className='block_cj3'>
      <button>검사PDF파일</button>
      <p>완성한 사이트의 웹접근성 검사 파일로 이동합니다.</p>
    </div>
    
    </div>
    </div>
    </div>

    {/* <div className='button_cj'>

    <div className='block_cj1'>
      <button>Page</button>
      <p>완성한 사이트로 이동합니다.</p>
    </div>
    <div className='block_cj2'>
      <button>Github</button>
      <p>완성한 사이트의 코드가 저장된 github로 이동합니다.</p>
    </div>
    <div className='block_cj3'>
      <button>검사PDF파일</button>
      <p>완성한 사이트의 웹접근성 검사 파일로 이동합니다.</p>
    </div>

    </div> */}
    
    </>
  )
}

export default Cj