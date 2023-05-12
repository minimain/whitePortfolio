import React from 'react'
import'styles/button.scss';

function Button({button_name, href_go}) {
  return (
    <div className='button_compo'> 
    <a href={href_go} className="button"
    target="_blank"
    rel="noopener noreferrer">
    <div className="border">
      <div className="border__top"></div>
      <div className="border__right"></div>
      <div className="border__bottom"></div>
      <div className="border__left"></div>
    </div>
    <div className="button__labl">{button_name}</div>
    </a>
  </div>
  )
}

export default Button