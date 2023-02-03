import "@/assets/scss/pages/join/join.style.scoped.scss";

const logoImg = require("@/assets/images/l2m-logo.png");

function Join() {
  return (
    <div className="join">
      <div className="join__img">
        <img src={logoImg} alt="" />
      </div>
      <div className="join__content">
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">이름</span>
            <input className="join__content__input__area__text" placeholder="아이디" />
          </div>
        </div>
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">아이디</span>
            <input className="join__content__input__area__text" placeholder="아이디" />
          </div>
        </div>
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">비밀번호</span>
            <input className="join__content__input__area__text" placeholder="아이디" />
          </div>
        </div>
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">비밀번호 확인</span>
            <input className="join__content__input__area__text" placeholder="아이디" />
          </div>
        </div>
      </div>
      <div className="join__btn__area">
        <button type="button" className="join-btn">가입하기</button>
      </div>
    </div>
  );
};

export default Join;