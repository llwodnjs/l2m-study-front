import "@/assets/scss/dialog/changepwdialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ChangePwDialog() {
  return (
    <div className="changePwDialogWrapper">
      <div className="changePwDialog">
        <div className="changePwDialog__header">
          <div className="changePwDialog__header__left">
            비밀번호 변경
          </div>
          <div className="changePwDialog__header__right">
            <FontAwesomeIcon className="close_icon" icon={faXmark}></FontAwesomeIcon>
          </div>
        </div>
        <div className="changePwDialog__content">
          <div className="changePwDialog__content__area">
            <div className="changePwDialog__content__area__input">
              <span className="join__content__input__area__span">현재 비밀번호</span>
              <input className="join__content__input__area__text" placeholder="현재 비밀번호" />
            </div>
            <div className="changePwDialog__content__area__input">
              <span className="join__content__input__area__span">변경할 비밀번호</span>
              <input className="join__content__input__area__text" placeholder="변경할 비밀번호" />
            </div>
            <div className="changePwDialog__content__area__input">
              <span className="join__content__input__area__span">변경할 비밀번호 확인</span>
              <input className="join__content__input__area__text" placeholder="변경할 비밀번호 확인" />
            </div>
          </div>
          <div className="changePwDialog__content__btn__area">
            <button type="button">비밀번호 변경</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePwDialog;