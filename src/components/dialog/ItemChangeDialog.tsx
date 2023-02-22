import "@/assets/scss/dialog/itemchangedialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchSelect from "../select/SearchSelect";
import SearchInput from "../input/SearchInput";
import { ItemEnum } from "@/resources/enum/ItemEnum";
import { ChangePopParamType } from "@/type/pages/search/Search.type";

const itemImage = require("@/assets/images/itemImage.png");
const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");
const changeImage = require("@/assets/images/icon_changes.png");
const enumArray = new Array();
  for (const value of Object.values(ItemEnum)) {
    enumArray.push({
      value: value.code,
      text: value.name
    });
  }

type ItemChangeDialogProps = {
  isShow: boolean,
  setIsShow: (val: boolean) => void,
  changePopParam: ChangePopParamType,
  setChangePopParam: (val:ChangePopParamType) => void,
}

function ItemChangeDialog({
  isShow = false,
  setIsShow,
  changePopParam,
  setChangePopParam
}: ItemChangeDialogProps) {
  
  return (
    <div className={`itemChangeDialog-container ${isShow ? 'itemChangeDialog-container-active' : ''}`}>
      <div className="itemChangeDialog">
        <div className="itemChangeDialog__header">
          <span className="itemChangeDialog__header__span">아이템 교체</span>
          <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={() => setIsShow(false)}></FontAwesomeIcon>
        </div>
        <div className="itemChangeDialog__content">
          <div className="itemChangeDialog__content__search">
            <SearchSelect value={changePopParam.itemType} options={enumArray} />
            <SearchInput placeholder="아이템명을 입력해주세요." wd="560px" hi="60px" onChange={(val) => setChangePopParam({...changePopParam, searchKeyword: val})} />
            <button type="button">검색</button>
          </div>
          <div className="search__table">
            <div className="search__table__count">
              검색결과: 8건
            </div>
            <div className="search__table__content">
              <table className="search-table">
                <colgroup>
                  <col width={"40%"} />
                  <col width={"30%"} />
                  <col width={"15%"} />
                  <col width={"15%"} />
                </colgroup>
                <thead>
                  <tr className="header-tr">
                    <th>아이템 이름</th>
                    <th>재련 옵션</th>
                    <th>최저가</th>
                    <th>교체</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={itemImage} />
                      <span>아르카나 오브</span>
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>무기 데미지 증폭 100%</span>
                        <span>명중 +100</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={diamondImage} />
                        <span>1만 2000</span>
                      </div>
                    </td>
                    <td>
                      <div className="search-table-all">
                        <img src={changeImage} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default ItemChangeDialog;