import React from 'react'

const custombutton = ({children,type, ...rest }) => {
  return (
    <button 
    type={type} 
    {...rest}>
      {children}
    </button>
  )
}

export default custombutton