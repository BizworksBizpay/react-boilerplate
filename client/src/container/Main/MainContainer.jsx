import React, { useState, useEffect } from 'react'
import { Custombutton, Checkbox } from '../../component'
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync } from '../../reducers/memberReducer';
import fetchData from '../../utils/fetchData';
import Postcode from "../../utils/Postcode";
const button_ary = [
  {
    key : 0,
    button_text : "신규"
  },
  {
    key : 1,
    button_text : "수정"
  },
  {
    key : 2,
    button_text : "저장(F12)"
  },
  {
    key : 3,
    button_text : "삭제"
  },
  {
    key : 4,
    button_text : "닫기"
  },
  {
    key : 5,
    button_text : "홈페이지 바로가기"
  },
];

const resource = fetchData("https://jsonplaceholder.typicode.com/users");

const MainContainer = () => {

  const dispatch = useDispatch();
  const nameList = resource.read();

  const [check, setCheck] = useState(false);
  const {value,status} = useSelector(state=> state.member);
  
  useEffect(()=>{

      dispatch(incrementAsync());
      return()=>{

      };
  },[]);

  const onChange = (e) => {
    setCheck(e.target.checked);
  }

  return (
    <div>
      {
        button_ary.map( (Item,index) => (
          <Custombutton className="topbtn" type="buton" onClick={()=>{console.log('custom button')}} key={index}>{Item.button_text}</Custombutton>
        ))
      }
      <Postcode></Postcode>
      <div className="mt-10 w-100">
          <table className="w-100 post_table">
            <colgroup>
            <col width="13%"></col>
            <col width="20%"></col>
            <col width="13%"></col>
            <col width="20%"></col>
            <col width="13%"></col>
            <col width="20%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>대분류</th>
                <td>
                  <select>
                    <option></option>
                  </select>
                </td>
                <th>회원구분</th>
                <td>
                  <select>
                    <option></option>
                  </select>
                </td>
                <th>회원가입상태</th>
                <td>
                  <select>
                    <option></option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>사업장명</th>
                <td>
                  
                </td>
                <th>업체구분</th>
                <td>
                  <Checkbox name="checkbox" onChange={onChange} checked={check} size="24">개인</Checkbox>
                </td>
                <th>사업자번호</th>
                <td>
                  {value}
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default MainContainer