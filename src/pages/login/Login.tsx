import { useNavigate } from "react-router-dom";
import "@/assets/scss/pages/login/login.style.scoped.scss";
import { useState } from "react";
import { loginProcess } from "@/resources/api/pages/login/Login.api";
import { LoginParamType, LoginParamTypeDefault } from "@/type/pages/login/Login.type";

const logoImg = require("@/assets/images/l2m-logo.png");

function Login() {
  const navigate = useNavigate();
  const [loginObj, setLoginObj] = useState<LoginParamType>(LoginParamTypeDefault());

  // 로그인
  const login = () => {
    loginProcess(loginObj)
      .then((result) => {
        localStorage.setItem('auth', JSON.stringify(result.data.results));
        localStorage.setItem('username', JSON.stringify(result.data.results.username));
        navigate("/");
      });
  }

  return (
    <div className="login">
      <div className="login__img">
        <img src={logoImg} alt="" />
      </div>
      <div className="login__content">
        <div className="login__content__input">
          <input
            className="login__content__input__text"
            placeholder="아이디"
            value={loginObj.username}
            onChange={(e) => setLoginObj({ ...loginObj, username: e.target.value })}
          />
        </div>
        <div className="login__content__input">
          <input
            type="password"
            className="login__content__input__text"
            placeholder="패스워드"
            value={loginObj.password}
            onChange={(e) => setLoginObj({ ...loginObj, password: e.target.value })}
          />
        </div>
        <div className="login__content__button">
          <button type="button" className="login-btn" onClick={login}>로그인</button>
          <button type="button" className="find-pw-btn" onClick={() => navigate("/findPw")}>비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;