import "@/assets/scss/pages/join/join.style.scoped.scss";
import { JoinParamType, JoinParamTypeDefault } from "@/type/pages/join/Join.type";
import { joinApi } from "@/resources/api/pages/join/Join.api";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NamingInput from "@/components/input/NamingInput";
import SearchButton from "@/components/button/SearchButton";
import { editInfoApi } from "@/resources/api/pages/confirmInfo/ConfirmInfo.api";

const logoImg = require("@/assets/images/l2m-logo.png");

function Join() {
  const navigate = useNavigate();
  const location = useLocation();
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

  // 내 정보 수정 api
  const edit = () => {
    editInfoApi(joinParam)
      .then((result) => {
        if (result.data.bizStatusCode === 'E0GGG000') {
          alert('정보가 수정되었습니다.');
          // navigate('/login');
        } else {
          alert(result.data.bizStatusMessage);
        }
      })
  }

  return (
    <div className='join'>
      <div className='join__img'>
        <img src={logoImg} alt='' />
      </div>
      <div className='join__content'>
        <div className='join__content__input'>
            {location.state === null && <NamingInput span='이름' placeholder='이름' value={joinParam.name} onChange={(val) => setJoinParam({ ...joinParam, name: val })} />}
            {location.state !== null && <NamingInput span='이름' placeholder='이름' effect="readonly" value={location.state.resultInfo.name} />}
        </div>
        <div className='join__content__input'>
          {location.state === null && <NamingInput span='아이디' placeholder='아이디' value={joinParam.username} onChange={(val) => setJoinParam({ ...joinParam, username: val })} />}
          {location.state !== null && <NamingInput span='아이디' placeholder='아이디' effect="readonly" value={location.state.resultInfo.username} />}
        </div>
        <div className='join__content__input'>
          <NamingInput span='비밀번호' type='password' placeholder='비밀번호' value={joinParam.password} onChange={(val) => setJoinParam({ ...joinParam, password: val })} />
        </div>
        <div className='join__content__input'>
          <NamingInput span='비밀번호 확인' type='password' placeholder='비밀번호 확인' value={joinParam.rePassword} onChange={(val) => setJoinParam({ ...joinParam, rePassword: val })} />
        </div>
      </div>
      <div className='join__btn__area'>
        {location.state === null && <SearchButton onClickFunction={join} text='가입하기' wd='707px' hi='95px' />}
        {location.state !== null && <SearchButton onClickFunction={edit} text='수정하기' wd='707px' hi='95px' />}
      </div>
    </div>
  );
};

export default Join;