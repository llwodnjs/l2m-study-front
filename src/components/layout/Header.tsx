import { useNavigate } from "react-router-dom";
import "@/assets/scss/layout/header.style.scoped.scss";
const headerImg = require("@/assets/images/header.png");



const RightHeader = () => {
  const authInfo = localStorage.getItem('auth');
  
  const navigate = useNavigate();

  if (authInfo) {
    return <div className="header__right">
      <div className="header__right__btn" onClick={() => navigate("/login")}>나의 세팅</div>
      <div>|</div>
      <div className="header__right__btn" onClick={() => navigate("/join")}>즐겨찾기</div>
      <div>|</div>
      <div className="header__right__btn" onClick={() => navigate("/join")}>로그아웃</div>
    </div>
  } else {
    return <div className="header__right">
      <div className="header__right__btn" onClick={() => navigate("/login")}>로그인</div>
      <div>|</div>
      <div className="header__right__btn" onClick={() => navigate("/join")}>회원가입</div>
    </div>
  }
};

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__img" src={headerImg} alt="" onClick={() => navigate("/")} />
      </div>
      <RightHeader />
    </div>
  );
};

export default Header;
