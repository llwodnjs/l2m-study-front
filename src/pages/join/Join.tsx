import "@/assets/scss/pages/join/join.style.scoped.scss";
import { JoinParamType, JoinParamTypeDefault } from "@/type/pages/join/Join.type";
import { joinApi } from "@/resources/api/pages/join/Join.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const logoImg = require("@/assets/images/l2m-logo.png");

function Join() {
  const navigate = useNavigate();
  // 회원가입 파라미터 정의
  const [joinParam, setJoinParam] = useState<JoinParamType>(JoinParamTypeDefault());

  // 회원가입 api
  const join = () => {
    joinApi(joinParam)
      .then((result) => {
        if (result.data.bizStatusCode === 'E0GGG000') {
          alert('가입되었습니다!');
          navigate('/login');
        } else {
          alert(result.data.bizStatusMessage);
        }
      });
  }

  return (
    <div className="join">
      <div className="join__img">
        <img src={logoImg} alt="" />
      </div>
      <div className="join__content">
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">이름</span>
            <input className="join__content__input__area__text" placeholder="이름" value={joinParam.name} onChange={(e) => setJoinParam({...joinParam, name: e.target.value})} />
          </div>
        </div>
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">아이디</span>
            <input className="join__content__input__area__text" placeholder="아이디" value={joinParam.username} onChange={(e) => setJoinParam({...joinParam, username: e.target.value})} />
          </div>
        </div>
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">비밀번호</span>
            <input type="password" className="join__content__input__area__text" placeholder="비밀번호" value={joinParam.password} onChange={(e) => setJoinParam({...joinParam, password: e.target.value})} />
          </div>
        </div>
        <div className="join__content__input">
          <div className="join__content__input__area">
            <span className="join__content__input__area__span">비밀번호 확인</span>
            <input type="password" className="join__content__input__area__text" placeholder="비밀번호 확인" value={joinParam.rePassword} onChange={(e) => setJoinParam({...joinParam, rePassword: e.target.value})} />
          </div>
        </div>
      </div>
      <div className="join__btn__area">
        <button type="button" className="join-btn" onClick={join}>가입하기</button>
      </div>
    </div>
  );
};

export default Join;