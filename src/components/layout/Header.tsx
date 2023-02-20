import { useNavigate } from "react-router-dom";
import "@/assets/scss/layout/header.style.scoped.scss";
const headerImg = require("@/assets/images/header.png");

type HeaderProps = {
  openDialog: () => void,
}

const RightHeader = ({openDialog}:HeaderProps) => {
  const authInfo = localStorage.getItem('auth');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  }

  if (authInfo) {
    return <div className="header__right">
      <div className="header__right__btn" onClick={openDialog}>나의 정보</div>
      <div className="header__right__btn__line"></div>
      <div className="header__right__btn" onClick={() => navigate("/login")}>나의 세팅</div>
      <div className="header__right__btn__line"></div>
      <div className="header__right__btn" onClick={() => navigate("/join")}>즐겨찾기</div>
      <div className="header__right__btn__line"></div>
      <div className="header__right__btn" onClick={logout}>로그아웃</div>
    </div>
  } else {
    return <div className="header__right">
      <div className="header__right__btn" onClick={() => navigate("/login")}>로그인</div>
      <div className="header__right__btn__line"></div>
      <div className="header__right__btn" onClick={() => navigate("/join")}>회원가입</div>
    </div>
  }
};

function Header({openDialog}:HeaderProps) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__img" src={headerImg} alt="" onClick={() => navigate("/")} />
      </div>
      <RightHeader openDialog={openDialog}/>
    </div>
  );
};

export default Header;
