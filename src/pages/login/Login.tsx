import React from "react";

const logoImg = require("@/assets/images/l2m-logo.png");

function Login() {
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
          <input className="main__search__input__text" placeholder="아이템 이름을 입력해주세요." />
        </div>
        <div className="main__search__button">
          <button type="button" className="low-price-setting">최저가 세팅</button>
          <button type="button" className="search-item">아이템 조회</button>
        </div>
      </div>
    </div>
  );
};

export default Login;