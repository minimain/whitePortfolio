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
      <div className='mokup_img_pc'></div>
    </div>

    <div className='mokup_tab'>
    <div className='fram_tab'>
        <div className='backmokup_tab'>
        </div>
    </div>
    <div className='mokup_img_tab'></div>
    </div>

    <div className='mokup_mo'>
    <div className='fram_mo'>
        <div className='backmokup_mo'>
        </div>
    </div>
    <div className='mokup_img_mo'></div>
    </div>
    </div>
    </>
  )
}

export default Cj