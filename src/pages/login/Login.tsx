import { useNavigate } from "react-router-dom";
import "@/assets/scss/login/login.style.scoped.scss";

const logoImg = require("@/assets/images/l2m-logo.png");

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__img">
        <img src={logoImg} alt="" />
      </div>
      <div className="login__content">
        <div className="login__content__input">
          <input className="login__content__input__text" placeholder="아이디" />
        </div>
        <div className="login__content__input">
          <input className="login__content__input__text" placeholder="패스워드" />
        </div>
        <div className="login__content__button">
          <button type="button" className="login-btn">로그인</button>
          <button type="button" className="find-pw-btn" onClick={() => navigate("/findPw")}>비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;