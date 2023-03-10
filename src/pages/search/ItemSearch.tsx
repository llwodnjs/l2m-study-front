import "@/assets/scss/pages/search/itemsearch.style.scoped.scss";
import SearchButton from "@/components/button/SearchButton";
import CompareDialog from "@/components/dialog/CompareDialog";
import ItemInfoDialog from "@/components/dialog/ItemInfoDialog";
import SearchGrid from "@/components/grid/SearchGrid";
import SearchInput from "@/components/input/SearchInput";
import SearchPaging from "@/components/paging/SearchPaging";
import SearchSelect from "@/components/select/SearchSelect";
import ServerSearchSelect from "@/components/select/ServerSearchSelect";
import { addFavoriteApi } from "@/resources/api/pages/favorites/Favorite.api";
import { apiSearchItem, apiSearchItemInfo, apiSearchPriceInfo } from "@/resources/api/pages/main/Main.api";
import { getCompareItemApi, getItemInfoPopApi } from "@/resources/api/pages/search/Search.api";
import { ControlFavoritesParamType, ControlFavoritesParamTypeDefault } from "@/type/pages/favorite/Favorites.type";
import { enchantLevelList, SearchListParam, SearchListParamInit, serverList } from "@/type/pages/main/Main.type";
import { ItemCompareInfoType, ItemCompareInfoTypeDefault, ItemCompareParamListType, ItemCompareParamListTypeDefault, ItemCompareParamType, ItemInfoType, ItemInfoTypeDefault, ItemPriceInfoType, ItemPriceInfoTypeDefault, ItemSearchType, ItemSearchTypeListDefault, PagingDefault, PagingType } from "@/type/pages/search/Search.type";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ItemSearch() {
  const location = useLocation();

  const [listParam, setListParam] = useState<SearchListParam>(() => location.state || SearchListParamInit());
  const [list, setList] = useState<ItemSearchType[]>(() => ItemSearchTypeListDefault());
  const [paging, setPaging] = useState<PagingType>(() => PagingDefault());
  const [isShow, setIsShow] = useState<boolean>(false);
  const [itemInfo, setItemInfo] = useState<ItemInfoType>(() => ItemInfoTypeDefault());
  const [itemPriceInfo, setItemPriceInfo] = useState<ItemPriceInfoType>(() => ItemPriceInfoTypeDefault());
  const [compareParams, setCompareParams] = useState<ItemCompareParamType[]>([]);
  const [compareInfos, setCompareInfos] = useState<ItemCompareInfoType>(() => ItemCompareInfoTypeDefault());
  const [isShowCompareDialog, setIsShowCompareDialog] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState('Y' || 'N');
  const [compareParamList, setCompareParamList] = useState<ItemCompareParamListType>(() => ItemCompareParamListTypeDefault());
  const [controlFavoritesParam, setControlFavoritesParam] = useState<ControlFavoritesParamType>(() => ControlFavoritesParamTypeDefault());

  // ???????????????
  const searchItem = () =>
    apiSearchItem(listParam)
      .then((result) => {
        setList(result.data.contents);
        setPaging(result.data.pagination);
      });

  // ????????? ????????? ??????
  const pageChangeHandler = (page: number) => {
    setListParam((current) => ({
      ...listParam,
      page: page,
      size: current.size,
    }));

    if (page === 1) searchItem();
  };

  // ???????????? ????????? 1????????? ??????
  const initSearchItem = () => {
    pageChangeHandler(1);
  };

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
          setIsShow(true);
        } else {
          alert(result.data.bizStatusMessage);
        }
      })
      .catch((error) => alert(error));
      // apiSearchItemInfo(item_id, enchant_level)
      //   .then((result) => {
      //     setItemInfo(result.data);
      //   })
      // searchItemPriceInfo(item_id, server_id, enchant_level);
      // setIsShow(true);
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
  const searchItemPriceInfo = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchPriceInfo(item_id, server_id, enchant_level)
      .then((result) => {
        setItemPriceInfo(result.data);
      });
  };

  // ????????? ???????????? ??????
  const itemInfoClose = () => {
    setIsShow(false);
  };

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

  // ????????? ????????? ??????
  const checkItem = (item_id: number, server_id: number, enchant_level: number, item_name: string) => {
    // setState
    if (compareParams.length <= 1) {

        if (localStorage.getItem('auth') !== null) {
          setUsername(JSON.parse(localStorage.getItem('auth') || '').username);
        }

        setCompareParams([
          ...compareParams,
          {
            item_id: item_id,
            server_id: server_id,
            enchant_level: enchant_level,
            item_name: item_name,
            username: username
          }
        ])
    }
  }

  const closeCompareDialog = () => {
    setCompareParams([]);
    setIsShowCompareDialog(false);
  }

  useEffect(() => { 
    searchItem();
  }, [listParam.page]);

  useEffect(() => {
    const controlFavorite = () => {
      // ???????????? ??? ???????????? ??????.  
      addFavoriteApi(controlFavoritesParam)
        .then((res) => {
          if (res.data.bizStatusCode === 'E0GGG000') {
            if (res.data.results.isFavorite === 'N') {
              alert(controlFavoritesParam.itemName + ' ???????????? ?????????????????? ?????????????????????.');
              // setControlFavoritesParam(() => ControlFavoritesParamTypeDefault());
            } else {
              alert(controlFavoritesParam.itemName + ' ???????????? ??????????????? ?????????????????????.');
              // setControlFavoritesParam(() => ControlFavoritesParamTypeDefault());
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

  useEffect(() => {
    if (compareParams.length === 2) {
      getCompareItemApi(compareParams)
      .then((result) => {
        if (result.data.bizStatusCode === 'E0GGG000') {
          const firstInfo = result.data.results[0];
          const secondInfo = result.data.results[1];
          setCompareInfos({
            itemInfos: [firstInfo.itemInfo, secondInfo.itemInfo],
            itemPriceInfos: [secondInfo.priceInfo, secondInfo.priceInfo],
            isFavorite: [firstInfo.isFavorite, secondInfo.isFavorite]
          });
          setIsShowCompareDialog(true);
        } else {
          alert(result.data.bizStatusMessage);
          setCompareParams([]);
        }
        
      })
      .catch((error) => console.log(error));
  }
  }, [compareParams]);
  
  return (
    <div className="search">
      <div className="search__filter">
        <div className="search__filter__select">
          <ServerSearchSelect
            options={serverList}
            value={listParam?.server_id}
            onChange={(val) => setListParam({ ...listParam, server_id: val })}
          />
          <SearchSelect
            options={enchantLevelList}
            value={listParam?.from_enchant_level}
            onChange={(val) => setListParam({ ...listParam, from_enchant_level: parseInt(val) })}
          />
          <SearchSelect
            options={enchantLevelList}
            value={listParam?.to_enchant_level}
            onChange={(val) => setListParam({ ...listParam, to_enchant_level: parseInt(val) })}
          />
        </div>
        <div className="search__filter__input">
          <SearchInput
            placeholder="????????? ????????? ??????????????????."
            value={listParam?.search_keyword}
            onChange={(val) => setListParam({ ...listParam, search_keyword: val })}
            wd={'555px'}
            hi={'69px'}
          />
          <SearchButton onClickFunction={initSearchItem} wd={'109px'} hi={'69px'} text={'??????'} />
          {/* <SearchButton onClickFunction={clickBtn} wd={'109px'} hi={'69px'} text={'??????'} bg="#8F5F44"/> */}
        </div>
      </div>
      <SearchGrid search_result={paging} list={list} onClickFunction={itemInfoOpen} checkItem={checkItem} compareParams={compareParams}/>
      <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
      <ItemInfoDialog changeEnchant={changeEnchant} 
                      changeServerPrice={changeServerPrice} 
                      isShow={isShow} info={itemInfo} 
                      priceInfo={itemPriceInfo} isFavorite={isFavorite} 
                      controlFavorite={settingParam} close={itemInfoClose}/>
      {isShowCompareDialog && <CompareDialog close={closeCompareDialog} contents={compareInfos} settingParam={settingParam}/>}
    </div>
  );
};

export default ItemSearch;