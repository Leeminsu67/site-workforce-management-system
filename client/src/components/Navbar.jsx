import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Inner from './Inner';

import navbarLogo from '../img/navbar_logo_swms.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // navbar 로그인 화면에서 안 보이게 하기위한 useState
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    // /login일 경우 root 경로로 돌려줌
    if(location.pathname === '/login') {
      navigate('/');
    }
    
    if(location.pathname === '/'){
      setHideNavbar(false);
    }else{
      setHideNavbar(true);
    }
  }, [location]);

  // const authority = true;

  // 사용자 권한 확인
  // const userAuthorityCheck = () => {
  //   if(authority){
  //     return (
  //       <div>
  //         <img src={navbarLogo} alt="Logo" />
  //       </div>
  //     )
  //   }else{
  //     return (
  //       <div>false</div>
  //     )
  //   }
  // }

  // navbar main contents
  const navbarContents = (
    <div className='navbar-contents-box'>
      <img src={navbarLogo} alt="Logo" />

      <ul>
        <li>
          <a className="main-category-name">공지사항</a>
          <div className='active'></div>
          <div className="category-contents-box">
            <a className="category-contents">인력관리</a>
            <a className="category-contents">휴가관리</a>
            <a className="category-contents">휴가관리</a>
          </div>
        </li>
        <li>
          <a className="main-category-name">당직조회</a>
          <div className='active'></div>
          <div className="category-contents-box">
            <a className="category-contents">인력관리</a>
            <a className="category-contents">휴가관리</a>
          </div>
        </li>
        <li>
          <a className="main-category-name">인력관리</a>
            <div className='active'></div>
            <div className="category-contents-box">
              <a className="category-contents">인력관리</a>
              <a className="category-contents">휴가관리</a>
          </div>
        </li>
        <li>
          <a className="main-category-name">휴가조회</a>
          <div className='active'></div>
          <div className="category-contents-box">
            <a className="category-contents">인력관리</a>
            <a className="category-contents">인력관리</a>
            <a className="category-contents">휴가관리</a>
          </div>
        </li>
        <li>
          <a className="main-category-name">특이사항</a>
          <div className='active'></div>
          <div className="category-contents-box">
            <a className="category-contents">인력관리</a>
            <a className="category-contents">휴가관리</a>
            <a className="category-contents">휴가관리</a>
          </div>
        </li>
      </ul>

      <div className='user-circle'>민수</div>
    </div>)

  return (
    <>
      {hideNavbar ? 
        <nav>
          <Inner 
            children={navbarContents}
          />
        </nav> : <></>
      }
    </>
  )
}

export default Navbar