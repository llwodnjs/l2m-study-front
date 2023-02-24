import "@/assets/scss/dialog/previewimagedialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchImage from "../img/SearchImage";

type PreviewImageDialogType = {
  isShow: boolean,
  setIsShow: (val:boolean) => void,
  imgUrl: string,
}

function PreviewImageDialog({
  isShow = false,
  setIsShow,
  imgUrl = '',
}: PreviewImageDialogType) {
  return (
    <div className={`previewImageDialogWrapper ${isShow ? 'previewImageDialogWrapper__show' : ''}`}>
      <div className={`previewImageDialog ${isShow ? 'previewImageDialog__show' : ''}`}>
        <div className="previewImageDialog__header">
          <div className="previewImageDialog__header__left">
            미리보기
          </div>
          <div className="previewImageDialog__header__right">
            <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={() => setIsShow(false)}></FontAwesomeIcon>
          </div>
        </div>
        <div className="previewImageDialog__content">
          <SearchImage imgUrl={imgUrl} wd="100%" hi="100%" />
        </div>
      </div>
    </div>
  );
};

export default PreviewImageDialog;