import React, { useState } from 'react'
// import '../../styles/login/login.scss'
import imgLogo from '../../img/logo_swms.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navihgate = useNavigate()
  const [autoLoginCheck, setAutoLoginCheck] = useState(false);

  const handleChangeChecked = () => {
    setAutoLoginCheck(!autoLoginCheck);
  };

  return (
    <div>
      <section>
        <div className='login-box'>
          <form action="">
            {/* 로고 */}
            <img src={imgLogo} alt="Logo" />

            {/* input 창 */}
            <div className="input-box">
              <label htmlFor="loginId">아이디</label>
              <input type="text" id="loginId" placeholder="아이디를 입력해 주세요." />
            </div>

            <div className="input-box">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" placeholder="패스워드를 입력해 주세요." />
            </div>

            {/* 체크박스 */}
            <div className="check--box">
              <span onClick={handleChangeChecked}>자동 로그인</span>
              <label className="check-box-container">
                <input 
                  checked={autoLoginCheck} 
                  onChange={handleChangeChecked} 
                  type="checkbox" 
                />
                <div className="checkmark"></div>
              </label>
            </div>

            {/* 로그인 버튼 */}
            <button type="submit" onClick={() => navihgate('main')}>로그인</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login