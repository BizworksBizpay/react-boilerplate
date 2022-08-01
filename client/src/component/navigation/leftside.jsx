import React from 'react'
import styels from "./leftside.module.css";
import classNames from 'classnames';

const leftside = () => { 
  return (
    <nav className={classNames(styels.left__side_wrap)}>
      <div className={classNames(styels.logo_container)}>
        <div className={classNames(styels.logo)}>(사)경남경영자총협회</div>
      </div>
    </nav>
  )
}

export default leftside