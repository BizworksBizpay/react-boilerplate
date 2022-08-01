import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./checkbox.module.css";

const checkbox = ( { children, checked, size, ...rest } ) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" {...rest} />
        <div className={styles.icon}>
          {checked ? (
            <MdCheckBox className={styles.checked} size={size}/>
          ) : (
            <MdCheckBoxOutlineBlank size={size}/>
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  )
}

export default checkbox