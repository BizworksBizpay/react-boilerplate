import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer, Leftside, Headermenu } from "../component";
const format = () => {
  
  return (
    <>
      <div className="wrap">
        <Leftside></Leftside>
        <div className="right__wrap">
            <Headermenu></Headermenu>
            <main className="main__layout">
              <Outlet />
            </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default format;