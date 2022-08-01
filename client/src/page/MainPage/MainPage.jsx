import React, { Suspense } from 'react'
import { MainContainer } from "../../container";


const MainPage = () => {
  
  

  //if (status === "loading") return <div>로딩중...</div> 
  return (
    <Suspense fallback={<div>로딩중...</div> }>
      <MainContainer></MainContainer>
    </Suspense>
  )
}

export default MainPage