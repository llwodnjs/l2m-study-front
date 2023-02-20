import "@/assets/scss/dialog/confirmpwdialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NamingInput from "../input/NamingInput";
import { useState } from "react";
import { ConfirmInfoParamType } from "@/type/pages/myinfo/MyInfo.type";

type ConfirmInfoProps = {
  isShow: boolean,
  close: React.MouseEventHandler<SVGSVGElement>
}

function ConfirmPwDialog({isShow, close}: ConfirmInfoProps) {

  const [confirmInfoParam, setConfirmInfoParam] = useState<ConfirmInfoParamType>({
    username: localStorage.getItem('username')?.replaceAll("\"", "") || '',
    password: ''
  })

  const confirmInfo = (confirmInfoParam: ConfirmInfoParamType) => {
    console.log(confirmInfoParam);
  }


  return (
    <div className={isShow ? "confirmPwDialogWrapper" : "confirm_none"}>
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
            <button type="button" onClick={() => confirmInfo(confirmInfoParam)}>비밀번호 확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPwDialog;