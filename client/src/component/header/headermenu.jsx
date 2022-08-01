import React from 'react'
import Headersubmenu from './headersubmenu'
import classNames from 'classnames';
import styles from "./header.module.css";
const headermenu = () => {
  return (
    <nav>
        <ul className={classNames('flex',styles.header__menu_wrap)}>
            <li>환경설정</li>
            <li>기초등록</li>
            <li>메모</li>
            <li>문서수발</li>
            <li>회원업무</li>
            <li>출력작업</li>
            <li>작업실</li>
            <li>노무업무</li>
            <li>도움말</li>
        </ul>
        <Headersubmenu></Headersubmenu>
    </nav>
  )
}

export default headermenu