import React from 'react'
import classNames from 'classnames';
import styles from "./header.module.css";

const headersubmenu = () => {
  return (
    <nav>
        <ul className={classNames('flex',styles.header__submenu_wrap)}>
            <li>경총행사관리</li>
            <li>회원사관리</li>
            <li>회비대장</li>
        </ul>
    </nav>
  )
}

export default headersubmenu