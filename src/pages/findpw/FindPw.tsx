import "@/assets/scss/pages/findpw/findpw.style.scoped.scss";
import NamingInput from "@/components/input/NamingInput";
import SearchButton from "@/components/button/SearchButton";
import { useState } from "react";
import { findPwApi } from "@/resources/api/pages/findpw/FindPw.api";

const logoImg = require("@/assets/images/l2m-logo.png");

function FindPw() {
  const [isFindPw, setIsFindPw] = useState<boolean>(false);
  const [pw, setPw] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  // 패스워드변경 세팅
  const settingPw = (pw: string) => {
    setPw(pw);
    setIsFindPw(true);
  }

  // 비밀번호 찾기
  const findPw = () => {
    findPwApi(name, username)
      .then((result) => {
        if (result.data.bizStatusCode === 'E0GGG000') {
          alert('비밀번호를 찾았습니다.\r\n확인해주세요.');

          settingPw(result.data.results.changePw);
        } else {
          alert(result.data.bizStatusMessage);
        }
      })
  }
  return (
    <div className="find-pw">
      <img src={logoImg} alt="" />
      <div className="find-pw__content__noti">
        <div className="find-pw__content__noti__text">
          {isFindPw ?
            <div>
              고객님의 임시 비밀번호가 발급되었습니다. <br />
              임시 비밀번호는 <span>{pw}</span> 입니다. <br />
              해당 비밀번호로 로그인해주세요.
            </div> :
            <div>
              이름과 아이디를 입력하신 후 비밀번호 찾기를 눌러주세요.
            </div>
          }
        </div>
      </div>
      <div className="find-pw__content__area">
        <div className="find-pw__content__area__input">
          <NamingInput placeholder="이름" wd="670px" hi="79px" onChange={(val) => setName(val)} />
        </div>
        <div className="find-pw__content__area__input">
          <NamingInput placeholder="아이디" wd="670px" hi="79px" onChange={(val) => setUsername(val)} />
        </div>
      </div>
      <SearchButton text="비밀번호 찾기" wd="707px" hi="95px" onClickFunction={findPw} />
    </div>
  );
};

export default FindPw;