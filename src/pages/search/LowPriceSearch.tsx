import "@/assets/scss/pages/search/lowpricesearch.style.scoped.scss";
import { useState, useEffect } from "react";
import { lowPriceSearchApi } from "@/resources/api/pages/search/Search.api";
import { LowPriceSearchParamType, LowPriceSearchParamTypeDefault, LowPriceSearchType, LowPriceSearchTypeListDefault, ChangePopParamType, ChangePopParamTypeDefault, LowPriceSearchTypeDefault, ChangePopType, ItemSearchType, ChangePopTypeRow, ItemInfoType, ItemInfoTypeDefault, ItemPriceInfoType, ItemPriceInfoTypeDefault } from "@/type/pages/search/Search.type";
import ServerSearchSelect from "@/components/select/ServerSearchSelect";
import SearchSelect from "@/components/select/SearchSelect";
import { serverList, classList, gradeList, enchantLevelList } from "@/type/pages/main/Main.type";
import { useLocation } from "react-router-dom";
import LowPriceSearchGrid from "@/components/grid/LowPriceSearchGrid";
import ItemChangeDialog from "@/components/dialog/ItemChangeDialog";
import { ItemEnum } from "@/resources/enum/ItemEnum";
import { apiSearchItemInfo, apiSearchPriceInfo } from "@/resources/api/pages/main/Main.api";
import ItemInfoDialog from "@/components/dialog/ItemInfoDialog";
import html2canvas from "html2canvas";
import { insertMySettingFileApi, insertMySettingItemApi } from "@/resources/api/pages/mysetting/MySetting.api";
import { MySettingInsertParamSetting } from "@/type/pages/mysetting/MySetting.type";
import SettingSaveDialog from "@/components/dialog/SettingSaveDialog";
import axios from "axios";

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
  const [itemInfo, setItemInfo] = useState<ItemInfoType>(() => ItemInfoTypeDefault());
  const [itemPriceInfo, setItemPriceInfo] = useState<ItemPriceInfoType>(() => ItemPriceInfoTypeDefault());
  const [isInfoPopShow, setIsInfoPopShow] = useState<boolean>(false);
  const [isChangePopShow, setIsChangePopShow] = useState<boolean>(false);
  const [isSettingNamePopShow, setIsSettingNamePopShow] = useState<boolean>(false);
  const [changePopParam, setChangePopParam] = useState<ChangePopParamType>(ChangePopParamTypeDefault());
  const [settingName, setSettingName] = useState<string>('');

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

    setIsChangePopShow(true);
  };

  // 교체후 팝업닫기
  const itemChange = (row: ItemSearchType, itemType: string) => {
    let resultListCopy = [...resultList];
    let index = resultListCopy.findIndex((result) => result.tradeCategoryName === resultRow?.tradeCategoryName);
    let tradeCategoryName = Object.values(ItemEnum).filter((value) => value.code === itemType).map((value) => value.name)[0];
    resultListCopy[index] = ChangePopTypeRow(row, tradeCategoryName);
    setResultList(resultListCopy);

    setIsChangePopShow(false);
  }

  // 아이템 상세보기 액션
  const itemInfoOpen = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchItemInfo(item_id, enchant_level)
      .then((result) => {
        setItemInfo(result.data);
      })
    searchItemPriceInfo(item_id, server_id, enchant_level);
    setIsInfoPopShow(true);
  };

  // 아이템 시세정보 조회
  const searchItemPriceInfo = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchPriceInfo(item_id, server_id, enchant_level)
      .then((result) => {
        setItemPriceInfo(result.data);
      });
  };

  // 강화수치 변경시 이벤트
  const changeEnchant = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchItemInfo(item_id, enchant_level)
      .then((result) => {
        setItemInfo(result.data);
      })
    searchItemPriceInfo(item_id, server_id, enchant_level);
  };

  // 시세정보 서버 변경시 이벤트
  const changeServerPrice = (item_id: number, server_id: number, enchant_level: number) => {
    searchItemPriceInfo(item_id, server_id, enchant_level);
  };

  // 아이템 상세보기 닫기
  const itemInfoClose = () => {
    setIsInfoPopShow(false);
  };

  // 세팅명 입력 팝업 오픈
  const settingNamePopOpen = () => {
    setIsSettingNamePopShow(true);
  }

  // 세팅 저장하기
  const settingSave = () => {
    setIsSettingNamePopShow(false);
    setTimeout(() => {
      html2canvas(document.body, { useCORS: true, proxy: '/' })
        .then(function (canvas) {
          let img = canvas.toDataURL('image/png');
  
          let blobBin = window.atob(img.split(',')[1]);	// base64 데이터 디코딩
          let array = [];
          for (let i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
          }
          let blob = new Blob([new Uint8Array(array)]);	// Blob 생성
          let file = new File([blob], settingName + '.png', { type: 'image/png' });
          let formdata = new FormData();	// formData 생성
          formdata.append("file", file);	// file data 추가
  
          insertMySettingFileApi(formdata)
            .then((result) => {
              const totalPrice = resultList.map((x) => x.now_min_unit_price).reduce((prev, current) => prev + current);
              insertMySettingItemApi(MySettingInsertParamSetting(resultList, searchParam, settingName, result.data.results.fileUrl, totalPrice))
                .then((result) => {
                  console.log(result, 'result');
                  alert('세팅등록완료!');
                });
            });
        })
    }, 500);

  }

  useEffect(() => {
    searchLowPriceSetting();
  }, []);
  return (
    <div id="screen-area">
      <div className="low-price-search">
        <span className="low-price-search__text">내가 원하는 클래스의 최저가를 확인해보세요.</span>
        <div className="low-price-search__select">
          <ServerSearchSelect defaultValue="서버" effect="disabled" options={serverList} value={searchParam.server_id} onChange={(val) => setSearchParam({ ...searchParam, server_id: val })} />
          <SearchSelect defaultValue="클래스" effect="disabled" options={classList} value={searchParam.class_id} onChange={(val) => setSearchParam({ ...searchParam, class_id: val })} />
          <SearchSelect defaultValue="장비등급" effect="disabled" options={gradeList} value={searchParam.grade_id} onChange={(val) => setSearchParam({ ...searchParam, grade_id: val })} />
          <SearchSelect defaultValue="강화수치" effect="disabled" options={enchantLevelList} value={searchParam.from_enchant_level} onChange={(val) => setSearchParam({ ...searchParam, from_enchant_level: parseInt(val) })} />
        </div>
      </div>
      <LowPriceSearchGrid list={resultList} onClickFunction={openChangePopup} itemInfoOpen={itemInfoOpen} />
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
          <button type="button" className="low-price-item__setting__btn" onClick={settingNamePopOpen}>저장하기</button>
        </div>
      </div>
      {isChangePopShow &&
        <ItemChangeDialog
          isShow={isChangePopShow}
          setIsShow={setIsChangePopShow}
          changePopParam={changePopParam}
          setChangePopParam={setChangePopParam}
          selectRow={itemChange}
        />
      }
      {isInfoPopShow &&
        <ItemInfoDialog changeEnchant={changeEnchant} changeServerPrice={changeServerPrice} isShow={isInfoPopShow} info={itemInfo} priceInfo={itemPriceInfo} close={itemInfoClose} />
      }
      {isSettingNamePopShow &&
        <SettingSaveDialog onClickFunction={settingSave} isShow={isSettingNamePopShow} setSettingName={setSettingName} setIsSettingNamePopShow={setIsSettingNamePopShow} />
      }
    </div>
  );
};

export default LowPriceSearch;