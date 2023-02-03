import "@/assets/scss/pages/findpw/findpw.style.scoped.scss";

const logoImg = require("@/assets/images/l2m-logo.png");

function FindPw() {
  return (
    <div className="find-pw">
      <div className="find-pw__img">
        <img src={logoImg} alt="" />
      </div>
      <div className="find-pw__content">
        <div className="find-pw__content__noti">
          <div className="find-pw__content__noti__text">
            <div>
              고객님의 임시 비밀번호가 발급되었습니다. <br />
              임시 비밀번호는 <span>testD123!</span> 입니다. <br />
              해당 비밀번호로 로그인해주세요.
            </div>
          </div>
        </div>
        <div className="find-pw__content__area">
          <div className="find-pw__content__area__input">
            <input className="find-pw__content__area__input__text" placeholder="이름" />
          </div>
          <div className="find-pw__content__area__input">
            <input className="find-pw__content__area__input__text" placeholder="아이디" />
          </div>
        </div>
      </div>
      <div className="find-pw__btn__area">
        <button type="button" className="find-pw">비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default FindPw;