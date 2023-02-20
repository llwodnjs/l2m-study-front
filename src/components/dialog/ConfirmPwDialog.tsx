import "@/assets/scss/dialog/confirmpwdialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NamingInput from "../input/NamingInput";
import { useState } from "react";
import { ConfirmInfoParamType, ConfirmInfoResponseType } from "@/type/pages/myinfo/MyInfo.type";
import { confirmInfoApi } from "@/resources/api/pages/confirmInfo/ConfirmInfo.api";
import SearchButton from "../button/SearchButton";
import { useNavigate } from "react-router-dom";

type ConfirmInfoProps = {
  close: () => void
}

function ConfirmPwDialog({close}: ConfirmInfoProps) {

  const navigate = useNavigate();
  const [confirmInfoParam, setConfirmInfoParam] = useState<ConfirmInfoParamType>({
    username: JSON.parse(localStorage.getItem('auth') || '').username,
    password: ''
  })


  const confirmInfo = () => {
    confirmInfoApi(confirmInfoParam.username, confirmInfoParam.password)
      .then((res) => {
        if(res.data.bizStatusCode === 'E0GGG000') {
          const resultInfo:ConfirmInfoResponseType = res.data.results;
          alert('비밀번호가 확인되었습니다.');
          close();
          navigate('/myInfo', {
            state: {resultInfo}
          });
        } else {
          alert(res.data.bizStatusMessage);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }


  return (
    <div className="confirmPwDialogWrapper">
      <div className="confirmPwDialog">
        <div className="confirmPwDialog__header">
          <div className="confirmPwDialog__header__left">
            비밀번호 확인
          </div>
          <div className="confirmPwDialog__header__right">
            <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={close}></FontAwesomeIcon>
          </div>
        </div>
        <div className="confirmPwDialog__content">
          <div className="confirmPwDialog__content__area">
            <div className="confirmPwDialog__content__area__input">
              {/* <span className="join__content__input__area__span">현재 비밀번호</span> */}
              {/* <input className="join__content__input__area__text" placeholder="현재 비밀번호" type="password"/> */}
              <NamingInput type="password" placeholder="현재 비밀번호" span="현재 비밀번호" onChange={(val) => setConfirmInfoParam({ ...confirmInfoParam, password: val })}/>
            </div>
          </div>
          <div className="confirmPwDialog__content__btn__area">
            <SearchButton text="비밀번호 찾기" wd="707px" hi="95px" onClickFunction={confirmInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPwDialog;