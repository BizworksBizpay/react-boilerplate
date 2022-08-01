import React from 'react'

const footer = () => {
    
  
  return (
    <div className="flex footer flex-space-between">
        {footerItem()}
    </div>
  )
}

const footerItem = () => {
  const LinkItem = [
    {
      key : 0,
      item_name : "경남경총",
      href : "#",
    },
    {
      key : 1,
      item_name : "경총플라자",
      href : "#",
    },
    {
      key : 2,
      item_name : "경남경총HRD",
      href : "#",
    },
    {
      key : 3,
      item_name : "노동부",
      href : "#",
    },
    {
      key : 4,
      item_name : "네이버",
      href : "#",
    },
    {
      key : 5,
      item_name : "오마이뉴스",
      href : "#",
    },
    {
      key : 6,
      item_name : "매일노동뉴스",
      href : "#",
    },
    {
      key : 7,
      item_name : "발송닷컴",
      href : "#",
    },
    {
      key : 8,
      item_name : "우리은행",
      href : "#",
    },
    {
      key : 9,
      item_name : "이나라도움",
      href : "#",
    },
  ];
  
  
  return (
    <>
      {
        LinkItem.map(Item => (
          <div className="footer__item w-10" key={Item.key}>{Item.item_name}</div>
        ))
      }
    </>
  )
}

export default footer