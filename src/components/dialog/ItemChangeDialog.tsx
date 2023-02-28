import "@/assets/scss/dialog/itemchangedialog.style.scoped.scss";
import { changePopListApi } from "@/resources/api/pages/search/Search.api";
import { ItemEnum } from "@/resources/enum/ItemEnum";
import { gradeList } from "@/type/pages/main/Main.type";
import { ChangePopParamType, ChangePopType, ChangePopTypeListDefault, ItemSearchType, PagingType } from "@/type/pages/search/Search.type";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import SearchGrid from "../grid/SearchGrid";
import SearchInput from "../input/SearchInput";
import SearchPaging from "../paging/SearchPaging";
import SearchSelect from "../select/SearchSelect";

const enumArray = new Array();
for (const value of Object.values(ItemEnum)) {
  enumArray.push({
    value: value.detailCode,
    text: value.name
  });
}

type ItemChangeDialogProps = {
  isShow: boolean,
  setIsShow: (val: boolean) => void,
  changePopParam: ChangePopParamType,
  setChangePopParam: (val: React.SetStateAction<ChangePopParamType>) => void,
  selectRow: (row: ItemSearchType, tradeCategoryName: string) => void,
}

function ItemChangeDialog({
  isShow = false,
  setIsShow,
  changePopParam,
  setChangePopParam,
  selectRow
}: ItemChangeDialogProps) {

  const [changePopList, setChangePopList] = useState<ChangePopType[]>(ChangePopTypeListDefault());
  const [paging, setPaging] = useState<PagingType>({
    page: 1,
    size: 10,
    total: 0,
  });

  // 아이템 교체 리스트 조회
  const searchChangePopList = () => {
    changePopListApi(changePopParam)
      .then((result) => {
        setChangePopList(result.data.results);
        setPaging({ ...paging, page: result.data.offset, size: result.data.limit, total: result.data.total });
      });
  }

  // 페이지 데이터 변경
  const pageChangeHandler = (page: number) => {
    setChangePopParam((current) => ({
      ...changePopParam,
      page: page,
      size: current.size,
    }));
  };

  return (
    <div className={`itemChangeDialog-container ${isShow ? 'itemChangeDialog-container-active' : ''}`}>
      <div className="itemChangeDialog">
        <div className="itemChangeDialog__header">
          <span className="itemChangeDialog__header__span">아이템 교체</span>
          <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={() => setIsShow(false)}></FontAwesomeIcon>
        </div>
        <div className="itemChangeDialog__content">
          <div className="itemChangeDialog__content__search">
            <SearchSelect value={changePopParam.itemType} options={enumArray} effect="disabled" wd="120px" />
            <SearchSelect value={changePopParam.gradeId} options={gradeList} wd="120px" onChange={(val) => setChangePopParam({ ...changePopParam, gradeId: val })} />
            <SearchInput placeholder="아이템명을 입력해주세요." wd="560px" hi="60px" onChange={(val) => setChangePopParam({ ...changePopParam, searchKeyword: val })} />
            <button type="button" onClick={searchChangePopList}>검색</button>
          </div>
          <SearchGrid search_result={paging} list={changePopList} isCountColor={true} mode="change" selectRow={selectRow} itemType={changePopParam.itemType} />
          <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
        </div>
      </div >
    </div>
  );
};

export default ItemChangeDialog;