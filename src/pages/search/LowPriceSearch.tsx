import "@/assets/scss/pages/search/lowpricesearch.style.scoped.scss";
import { useState, useEffect } from "react";
import { getItemInfoPopApi, lowPriceSearchApi, mySettingLowPriceSearchApi } from "@/resources/api/pages/search/Search.api";
import { LowPriceSearchParamType, LowPriceSearchParamTypeDefault, LowPriceSearchType, LowPriceSearchTypeListDefault, ChangePopParamType, ChangePopParamTypeDefault, LowPriceSearchTypeDefault, ItemSearchType, ChangePopTypeRow, ItemInfoType, ItemInfoTypeDefault, ItemPriceInfoType, ItemPriceInfoTypeDefault } from "@/type/pages/search/Search.type";
import ServerSearchSelect from "@/components/select/ServerSearchSelect";
import SearchSelect from "@/components/select/SearchSelect";
import { serverList, classList, gradeList, enchantLevelList } from "@/type/pages/main/Main.type";
import { useLocation, useNavigate } from "react-router-dom";
import LowPriceSearchGrid from "@/components/grid/LowPriceSearchGrid";
import ItemChangeDialog from "@/components/dialog/ItemChangeDialog";
import { ItemEnum } from "@/resources/enum/ItemEnum";
import { apiSearchItemInfo, apiSearchPriceInfo } from "@/resources/api/pages/main/Main.api";
import ItemInfoDialog from "@/components/dialog/ItemInfoDialog";
import html2canvas from "html2canvas";
import { insertMySettingFileApi, insertMySettingItemApi } from "@/resources/api/pages/mysetting/MySetting.api";
import { MySettingInsertParamSetting } from "@/type/pages/mysetting/MySetting.type";
import SettingSaveDialog from "@/components/dialog/SettingSaveDialog";
import { addFavoriteApi } from "@/resources/api/pages/favorites/Favorite.api";
import { ControlFavoritesParamType, ControlFavoritesParamTypeDefault } from "@/type/pages/favorite/Favorites.type";
import { Skeleton } from "@mui/material";
import { isNotEmpty } from "@/utils/PredicateUtil";

const diamondImage = require("@/assets/images/diamond.png");
// const equipNonActive = require("@/assets/images/equip_non_active.png");
// const equipActive = require("@/assets/images/active_item_paging.png");
// const accNonActive = require("@/assets/images/acc_non_active.png");
// const accActive = require("@/assets/images/acc_active.png");

function LowPriceSearch() {
  // ????????????
  const location = useLocation();
  const navigate = useNavigate();
  const mySettingKey = location.state.mySettingKey;
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
  const [isFavorite, setIsFavorite] = useState('Y' || 'N');
  const [username, setUsername] = useState<string>('');
  const [controlFavoritesParam, setControlFavoritesParam] = useState<ControlFavoritesParamType>(() => ControlFavoritesParamTypeDefault());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ??????????????? ?????? api ??????
  const searchLowPriceSetting = () => {
    lowPriceSearchApi(searchParam)
      .then((result) => {
        if (result.data.bizStatusCode === 'E0GGG000') {
          setResultList(result.data.results);
          setIsLoading(true);
        } else {
          alert(result.data.bizStatusMessage);
          navigate('/');
        }
      });
  };

  // ?????? ?????? open
  const openChangePopup = (row: LowPriceSearchType, itemType: string) => {
    setResultRow(row);
    setChangePopParam({
      ...changePopParam, itemId: row === undefined ? 0 : row.item_id,
      itemType: itemType,
      serverId: searchParam.server_id,
      classId: searchParam.class_id,
      gradeId: searchParam.grade_id,
      enchantLevel: searchParam.from_enchant_level
    });

    setIsChangePopShow(true);
  };

  // ????????? ????????????
  const itemChange = (row: ItemSearchType, itemType: string) => {
    let resultListCopy = [...resultList];
    // let index = resultListCopy.findIndex((result) => result.tradeCategoryName === resultRow?.tradeCategoryName);
    console.log(itemType, 'itemType');
    let index = Object.values(ItemEnum).findIndex((value) => value.detailCode === itemType);
    console.log(index, 'index');
    let tradeCategoryName = Object.values(ItemEnum).filter((value) => value.detailCode === itemType).map((value) => value.name)[0];
    resultListCopy[index] = ChangePopTypeRow(row, tradeCategoryName);
    setResultList(resultListCopy);

    setIsChangePopShow(false);
  }

  // ????????? ???????????? ??????
  const itemInfoOpen = (item_id: number, server_id: number, enchant_level: number) => {

    if (localStorage.getItem('auth') !== null) {
      setUsername(JSON.parse(localStorage.getItem('auth') || '').username);
    }
    
    getItemInfoPopApi(item_id, server_id, enchant_level, username)
      .then((result) => {
        if (result.data.bizStatusCode === "E0GGG000") {
          setItemInfo(result.data.results.itemInfo);
          setItemPriceInfo(result.data.results.priceInfo);
          setIsFavorite(result.data.results.isFavorite);
          setIsInfoPopShow(true);
        } else {
          alert(result.data.bizStatusMessage);
        }
      })
      .catch((error) => alert(error));
  };

  // ????????? ???????????? ??????
  const searchItemPriceInfo = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchPriceInfo(item_id, server_id, enchant_level)
      .then((result) => {
        setItemPriceInfo(result.data);
      });
  };

  // ???????????? ????????? ?????????
  const changeEnchant = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchItemInfo(item_id, enchant_level)
      .then((result) => {
        setItemInfo(result.data);
      })
    searchItemPriceInfo(item_id, server_id, enchant_level);
  };

  // ???????????? ?????? ????????? ?????????
  const changeServerPrice = (item_id: number, server_id: number, enchant_level: number) => {
    searchItemPriceInfo(item_id, server_id, enchant_level);
  };

  // ????????? ???????????? ??????
  const itemInfoClose = () => {
    setIsInfoPopShow(false);
  };

  // ????????? ?????? ?????? ??????
  const settingNamePopOpen = () => {
    console.log(localStorage.getItem('auth'), 'localstorage');
    if (localStorage.getItem('auth') === null) {
      alert('???????????? ????????? ??????????????????.');
      navigate('/login');
    } else {
      setIsSettingNamePopShow(true);
    }
  }

  // ?????? ????????????
  const settingSave = () => {

    if (!isNotEmpty(settingName)) {
      alert('???????????? ???????????? ??????????????????.');
    } else {
      setIsSettingNamePopShow(false);
      setTimeout(() => {
        html2canvas(document.body, { useCORS: true, proxy: '/' })
          .then(function (canvas) {
            let img = canvas.toDataURL('image/png');
    
            let blobBin = window.atob(img.split(',')[1]);	// base64 ????????? ?????????
            let array = [];
            for (let i = 0; i < blobBin.length; i++) {
              array.push(blobBin.charCodeAt(i));
            }
            let blob = new Blob([new Uint8Array(array)]);	// Blob ??????
            let file = new File([blob], settingName + '.png', { type: 'image/png' });
            let formdata = new FormData();	// formData ??????
            formdata.append("file", file);	// file data ??????
    
            insertMySettingFileApi(formdata)
              .then((result) => {
                const totalPrice = resultList.map((x) => x.now_min_unit_price).reduce((prev, current) => prev + current);
                insertMySettingItemApi(MySettingInsertParamSetting(resultList, searchParam, settingName, result.data.results.fileUrl, totalPrice))
                  .then((result) => {
                    console.log(result, 'result');
                    alert('??????????????????!');
                  });
              });
          })
      }, 500);
    }
  }

  // ?????? ?????? ?????? ???????????? ???????????? api
  const mySettingLowPriceSearch = () => {
    mySettingLowPriceSearchApi(mySettingKey)
      .then((result) => {
        setResultList(result.data.results.list);
        setIsLoading(true);
      });
    }
    
	// ????????? ???????????? ??????
  const settingParam = (info:ItemInfoType) => {
    if (localStorage.getItem('auth') !== null) {
      const loginUsername:string = JSON.parse(localStorage.getItem('auth') || '').username;
      setControlFavoritesParam({
        itemId: info.item_id,
        itemName: info.item_name,
        gradeCode: info.grade,
        gradeName: info.grade_name,
        imgUrl: info.image,
        username: loginUsername
      })
    } else {
      alert('?????? ???????????????. ?????????????????????');
    }
  }

  useEffect(() => {
    if (mySettingKey === undefined) {
      // ???????????? ?????? ??? ????????? ??????
      searchLowPriceSetting();
    } else {
      // ????????? ????????? ??????????????? ????????? ??????
      mySettingLowPriceSearch();
    }
  }, []);

  useEffect(() => {
    const controlFavorite = () => {
      // ???????????? ??? ???????????? ??????.  
      addFavoriteApi(controlFavoritesParam)
        .then((res) => {
          if (res.data.bizStatusCode === 'E0GGG000') {
            if (res.data.results.isFavorite === 'N') {
              alert(controlFavoritesParam.itemName + ' ???????????? ?????????????????? ?????????????????????.');
              setControlFavoritesParam(() => ControlFavoritesParamTypeDefault());
            } else {
              alert(controlFavoritesParam.itemName + ' ???????????? ??????????????? ?????????????????????.');
              setControlFavoritesParam(() => ControlFavoritesParamTypeDefault());
            }

            setIsFavorite(res.data.results.isFavorite);
          } else {
            alert(res.data.bizStatusMessage);
          }
        })
        .catch((err) => console.log(err));
    }
    
    if(controlFavoritesParam.itemId !== 0) controlFavorite();
  }, [controlFavoritesParam]);

  return (
    <div className="screen-area">
      <div className="low-price-search">
        <span className="low-price-search__text">?????? ????????? ???????????? ???????????? ??????????????????.</span>
        <div className="low-price-search__select">
          <ServerSearchSelect defaultValue="??????" effect="disabled" options={serverList} value={searchParam.server_id} onChange={(val) => setSearchParam({ ...searchParam, server_id: val })} />
          <SearchSelect defaultValue="?????????" effect="disabled" options={classList} value={searchParam.class_id} onChange={(val) => setSearchParam({ ...searchParam, class_id: val })} />
          <SearchSelect defaultValue="????????????" effect="disabled" options={gradeList} value={searchParam.grade_id} onChange={(val) => setSearchParam({ ...searchParam, grade_id: val })} />
          <SearchSelect defaultValue="????????????" effect="disabled" options={enchantLevelList} value={searchParam.from_enchant_level} onChange={(val) => setSearchParam({ ...searchParam, from_enchant_level: parseInt(val) })} />
        </div>
      </div>      
        {isLoading && <LowPriceSearchGrid list={resultList} onClickFunction={openChangePopup} itemInfoOpen={itemInfoOpen}/>}
        {!isLoading && <Skeleton variant="rectangular" animation="wave" width={740} height={740}></Skeleton>}
      <div className="low-price-item">
        <div className="low-price-item__total">
          <span>?????? ?????????:</span>
          <div className="low-price-item__total__price">
            <img src={diamondImage} />
            <span>{resultList.map((x) => x.now_min_unit_price).reduce((prev, current) => prev + current)}</span>
          </div>
        </div>
        <div className="low-price-item__setting">
          <span>????????? ??????????????????.</span>
          <button type="button" className="low-price-item__setting__btn" onClick={settingNamePopOpen}>????????????</button>
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
        <ItemInfoDialog changeEnchant={changeEnchant} changeServerPrice={changeServerPrice} isShow={isInfoPopShow} info={itemInfo} priceInfo={itemPriceInfo} close={itemInfoClose} isFavorite={isFavorite} controlFavorite={settingParam}/>
      }
      {isSettingNamePopShow &&
        <SettingSaveDialog onClickFunction={settingSave} isShow={isSettingNamePopShow} setSettingName={setSettingName} setIsSettingNamePopShow={setIsSettingNamePopShow} />
      }
    </div>
  );
};

export default LowPriceSearch;