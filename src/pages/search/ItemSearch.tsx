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

  // 아이템조회
  const searchItem = () =>
    apiSearchItem(listParam)
      .then((result) => {
        setList(result.data.contents);
        setPaging(result.data.pagination);
      });

  // 페이지 데이터 변경
  const pageChangeHandler = (page: number) => {
    setListParam((current) => ({
      ...listParam,
      page: page,
      size: current.size,
    }));
    searchItem();
  };

  // 검색버튼 클릭시 1페이지 처리
  const initSearchItem = () => {
    pageChangeHandler(1);
  };

  // 아이템 상세보기 액션
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

  // 아이템 시세정보 조회
  const searchItemPriceInfo = (item_id: number, server_id: number, enchant_level: number) => {
    apiSearchPriceInfo(item_id, server_id, enchant_level)
      .then((result) => {
        setItemPriceInfo(result.data);
      });
  };

  // 아이템 상세보기 닫기
  const itemInfoClose = () => {
    setIsShow(false);
  };

  // 아이템 즐겨찾기 제어
  const controlFavorite = (info:ItemInfoType) => {
    // 비로그인 시 즐겨찾기 안됨.
    if (localStorage.getItem('auth') !== null) {
      const loginUsername:string = JSON.parse(localStorage.getItem('auth') || '').username;
      addFavoriteApi(info, loginUsername)
        .then((res) => {
          if (res.data.bizStatusCode === 'E0GGG000') {
            if (res.data.results.isFavorite === 'N') {
              alert(info.item_name + ' 아이템이 즐겨찾기에서 제거되었습니다.');
            } else {
              alert(info.item_name + ' 아이템이 즐겨찾기에 저장되었습니다.');
            }

            setIsFavorite(res.data.results.isFavorite);
          } else {
            alert(res.data.bizStatusMessage);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert('회원 전용입니다. 로그인해주세요');
    }
  }

  // 비교할 아이템 체크
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
  }, []);

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
            placeholder="아이템 이름을 입력해주세요."
            value={listParam?.search_keyword}
            onChange={(val) => setListParam({ ...listParam, search_keyword: val })}
            wd={'555px'}
            hi={'69px'}
          />
          <SearchButton onClickFunction={initSearchItem} wd={'109px'} hi={'69px'} text={'검색'} />
          {/* <SearchButton onClickFunction={clickBtn} wd={'109px'} hi={'69px'} text={'비교'} bg="#8F5F44"/> */}
        </div>
      </div>
      <SearchGrid search_result={paging} list={list} onClickFunction={itemInfoOpen} checkItem={checkItem} compareParams={compareParams}/>
      <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
      <ItemInfoDialog changeEnchant={changeEnchant} 
                      changeServerPrice={changeServerPrice} 
                      isShow={isShow} info={itemInfo} 
                      priceInfo={itemPriceInfo} isFavorite={isFavorite} 
                      controlFavorite={controlFavorite} close={itemInfoClose}/>
      {isShowCompareDialog && <CompareDialog close={closeCompareDialog} contents={compareInfos}/>}
    </div>
  );
};

export default ItemSearch;