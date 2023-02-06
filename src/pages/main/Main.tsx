import { useNavigate } from "react-router-dom";
import "@/assets/scss/pages/main/main.style.scoped.scss";

const logoImg = require("@/assets/images/l2m-logo.png");
const classImg = require("@/assets/images/class.png");
/**
 * 메인 화면
 * TODO (구현필요) 메인 화면 컨텐츠 구상 필요
 */
function Main() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__img">
        <img src={logoImg} alt="" />
      </div>
      <div className="main__search">
        <div className="main__search__select">
          <select className="select-button">
            <option>서버</option>
          </select>
          <select className="select-button">
            <option>클래스</option>
          </select>
          <select className="select-button">
            <option>장비등급</option>
          </select>
          <select className="select-button">
            <option>강화수치</option>
          </select>
        </div>
        <div className="main__search__input">
          <input type={"text"} className="main__search__input__text" placeholder="아이템 이름을 입력해주세요." />
        </div>
        <div className="main__search__button">
          <button type="button" className="low-price-setting" onClick={() => navigate("/lowPriceSearch")}>최저가 세팅</button>
          <button type="button" className="search-item" onClick={() => navigate("/itemSearch")}>아이템 조회</button>
        </div>
        <div className="main__search__img">
          <img src={classImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
