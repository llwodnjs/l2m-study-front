import { useNavigate } from "react-router-dom";
import "@/assets/scss/layout/header.style.scoped.scss";
const headerImg = require("@/assets/images/header.png");

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left">
        <img className="header__img" src={headerImg} alt="" onClick={() => navigate("/main")} />
      </div>
      <div className="header__right">
        <div className="header__right__btn" onClick={() => navigate("/login")}>로그인</div>
        <div>|</div>
        <div className="header__right__btn">회원가입</div>
      </div>
    </div>
  );
};

export default Header;
