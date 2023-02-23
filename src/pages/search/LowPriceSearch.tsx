import "@/assets/scss/pages/search/lowpricesearch.style.scoped.scss";
import { useState, useEffect } from "react";
import { lowPriceSearchApi } from "@/resources/api/pages/search/Search.api";
import { LowPriceSearchParamType, LowPriceSearchParamTypeDefault, LowPriceSearchType, LowPriceSearchTypeListDefault, ChangePopParamType, ChangePopParamTypeDefault, LowPriceSearchTypeDefault, ChangePopType, ItemSearchType, ChangePopTypeRow } from "@/type/pages/search/Search.type";
import ServerSearchSelect from "@/components/select/ServerSearchSelect";
import SearchSelect from "@/components/select/SearchSelect";
import { serverList, classList, gradeList, enchantLevelList } from "@/type/pages/main/Main.type";
import { useLocation } from "react-router-dom";
import LowPriceSearchGrid from "@/components/grid/LowPriceSearchGrid";
import ItemChangeDialog from "@/components/dialog/ItemChangeDialog";
import { ItemEnum } from "@/resources/enum/ItemEnum";

const diamondImage = require("@/assets/images/diamond.png");
// const equipNonActive = require("@/assets/images/equip_non_active.png");
// const equipActive = require("@/assets/images/active_item_paging.png");
// const accNonActive = require("@/assets/images/acc_non_active.png");
// const accActive = require("@/assets/images/acc_active.png");

function LowPriceSearch() {
  // 파라미터
  const location = useLocation();
  const [searchParam, setSearchParam] = useState<LowPriceSearchParamType>(location.state || LowPriceSearchParamTypeDefault());
  const [resultList, setResultList] = useState<LowPriceSearchType[]>(LowPriceSearchTypeListDefault());
  const [resultRow, setResultRow] = useState<LowPriceSearchType>(LowPriceSearchTypeDefault());
  const [isShow, setIsShow] = useState<boolean>(false);
  const [changePopParam, setChangePopParam] = useState<ChangePopParamType>(ChangePopParamTypeDefault());

  // 최저가세팅 조회 api 호출
  const searchLowPriceSetting = () => {
    lowPriceSearchApi(searchParam)
      .then((result) => {
        setResultList(result.data.results);
      });
  };

  // 교체 팝업 open
  const openChangePopup = (row: LowPriceSearchType, itemType: string) => {
    setResultRow(row);
    setChangePopParam({
      ...changePopParam, itemId: row.item_id,
      itemType: itemType,
      serverId: searchParam.server_id,
      classId: searchParam.class_id,
      gradeId: searchParam.grade_id,
      enchantLevel: searchParam.from_enchant_level
    });

    setIsShow(true);
  };

  // 교체후 팝업닫기
  const itemChange = (row: ItemSearchType, itemType: string) => {
    let resultListCopy = [...resultList];
    let index = resultListCopy.findIndex((result) => result.tradeCategoryName === resultRow?.tradeCategoryName);
    let tradeCategoryName = Object.values(ItemEnum).filter((value) => value.code === itemType).map((value) => value.name)[0];
    resultListCopy[index] = ChangePopTypeRow(row, tradeCategoryName);
    setResultList(resultListCopy);

    setIsShow(false);
  }

  // 세팅 저장하기
  const settingSave = () => {

  }

  useEffect(() => {
    searchLowPriceSetting();
  }, []);
  return (
    <div>
      <div className="low-price-search">
        <span className="low-price-search__text">내가 원하는 클래스의 최저가를 확인해보세요.</span>
        <div className="low-price-search__select">
          <ServerSearchSelect defaultValue="서버" effect="disabled" options={serverList} value={searchParam.server_id} onChange={(val) => setSearchParam({ ...searchParam, server_id: val })} />
          <SearchSelect defaultValue="클래스" effect="disabled" options={classList} value={searchParam.class_id} onChange={(val) => setSearchParam({ ...searchParam, class_id: val })} />
          <SearchSelect defaultValue="장비등급" effect="disabled" options={gradeList} value={searchParam.grade_id} onChange={(val) => setSearchParam({ ...searchParam, grade_id: val })} />
          <SearchSelect defaultValue="강화수치" effect="disabled" options={enchantLevelList} value={searchParam.from_enchant_level} onChange={(val) => setSearchParam({ ...searchParam, from_enchant_level: parseInt(val) })} />
        </div>
      </div>
      <LowPriceSearchGrid list={resultList} onClickFunction={openChangePopup} />
      <div className="low-price-item">
        <div className="low-price-item__total">
          <span>세팅 최저가:</span>
          <div className="low-price-item__total__price">
            <img src={diamondImage} />
            <span>{resultList.map((x) => x.now_min_unit_price).reduce((prev, current) => prev + current)}</span>
          </div>
        </div>
        <div className="low-price-item__setting">
          <span>세팅을 저장해보세요.</span>
          <button type="button" className="low-price-item__setting__btn" onClick={settingSave}>저장하기</button>
        </div>
      </div>
      {isShow &&
        <ItemChangeDialog
          isShow={isShow}
          setIsShow={setIsShow}
          changePopParam={changePopParam}
          setChangePopParam={setChangePopParam}
          selectRow={itemChange}
        />
      }
    </div>
  );
};

export default LowPriceSearch;