import "@/assets/scss/dialog/settingsavedialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NamingInput from "../input/NamingInput";
import SearchButton from "../button/SearchButton";

type SettingSaveDialogProps = {
  onClickFunction: () => void,
  setSettingName: (val: string) => void,
  isShow: boolean,
  setIsSettingNamePopShow: (val: boolean) => void,
}

function SettingSaveDialog({
  onClickFunction = () => { },
  setSettingName,
  isShow = false,
  setIsSettingNamePopShow,
}: SettingSaveDialogProps) {
  return (
    <div className={`settingSaveDialogWrapper ${isShow ? 'settingSaveDialogWrapper-active' : ''}`}>
      <div className="settingSaveDialog">
        <div className="settingSaveDialog__header">
          <div className="settingSaveDialog__header__left">
            세팅명 저장
          </div>
          <div className="settingSaveDialog__header__right">
            <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={() => setIsSettingNamePopShow(false)}></FontAwesomeIcon>
          </div>
        </div>
        <div className="settingSaveDialog__content">
          <div className="settingSaveDialog__content__area">
            <div className="settingSaveDialog__content__area__input">
              <NamingInput wd="500px" hi="67px" placeholder="세팅명" span="세팅명" onChange={(val) => setSettingName(val)} />
            </div>
          </div>
          <div className="settingSaveDialog__content__btn__area">
            <SearchButton text="세팅 저장" wd="540px" hi="67px" onClickFunction={onClickFunction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingSaveDialog;