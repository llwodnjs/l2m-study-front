import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "@/assets/scss/pages/search/itemsearch.style.scoped.scss";
import SearchGrid from "@/components/grid/SearchGrid";
import SearchPaging from "@/components/paging/SearchPaging";
import SearchSelect from "@/components/select/SearchSelect";
import ServerSearchSelect from "@/components/select/ServerSearchSelect";
import SearchInput from "@/components/input/SearchInput";
import SearchButton from "@/components/button/SearchButton";
import ItemInfoDialog from "@/components/dialog/ItemInfoDialog";
import { SearchListParam, SearchListParamInit, serverList, classList, gradeList, enchantLevelList } from "@/type/pages/main/Main.type";
import { apiSearchItem, apiSearchItemInfo, apiSearchPriceInfo } from "@/resources/api/pages/main/Main.api";
import { ItemSearchType, ItemSearchTypeDefault, PagingType, PagingDefault, ItemInfoType, ItemInfoTypeDefault, ItemPriceInfoType, ItemPriceInfoTypeDefault } from "@/type/pages/search/Search.type";

function ItemSearch() {
  const location = useLocation();

  const [listParam, setListParam] = useState<SearchListParam>(() => location.state || SearchListParamInit());
  const [list, setList] = useState<ItemSearchType[]>(() => ItemSearchTypeDefault());
  const [paging, setPaging] = useState<PagingType>(() => PagingDefault());
  const [isShow, setIsShow] = useState<boolean>(false);
  const [itemInfo, setItemInfo] = useState<ItemInfoType>(() => ItemInfoTypeDefault());
  const [itemPriceInfo, setItemPriceInfo] = useState<ItemPriceInfoType>(() => ItemPriceInfoTypeDefault());

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
    apiSearchItemInfo(item_id, enchant_level)
      .then((result) => {
        setItemInfo(result.data);
      })
    searchItemPriceInfo(item_id, server_id, enchant_level);
    setIsShow(true);
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

  useEffect(() => {
    searchItem();
  }, []);

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
            options={classList}
            value={listParam?.class_id}
            onChange={(val) => setListParam({ ...listParam, class_id: val })}
          />
          <SearchSelect
            options={gradeList}
            value={listParam?.grade_id}
            onChange={(val) => setListParam({ ...listParam, grade_id: val })}
          />
          <SearchSelect
            options={enchantLevelList}
            value={listParam?.from_enchant_level}
            onChange={(val) => setListParam({ ...listParam, from_enchant_level: parseInt(val) })}
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
        </div>
      </div>
      <SearchGrid search_result={paging.total} list={list} onClickFunction={itemInfoOpen} />
      <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
      <ItemInfoDialog changeEnchant={changeEnchant} changeServerPrice={changeServerPrice} isShow={isShow} info={itemInfo} priceInfo={itemPriceInfo} close={itemInfoClose} />
    </div>
  );
};

export default ItemSearch;