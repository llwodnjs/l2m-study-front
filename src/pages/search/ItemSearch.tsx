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
import { apiSearchItem } from "@/resources/api/pages/main/Main.api";
import { ItemSearchType, ItemSearchTypeDefault, PagingType, PagingDefault } from "@/type/pages/search/Search.type";

function ItemSearch() {
  const location = useLocation();

  const [listParam, setListParam] = useState<SearchListParam>(() => location.state || SearchListParamInit());
  const [list, setList] = useState<ItemSearchType[]>(() => ItemSearchTypeDefault());
  const [paging, setPaging] = useState<PagingType>(() => PagingDefault());

  // 아이템조회
  const searchItem = () =>
    apiSearchItem(listParam)
      .then((result) => {
        setList(result.data.contents);
        setPaging(result.data.pagination);
      });
  // const initSearchItem = () =>
  //   setListParam((current) => ({
  //     ...listParam,
  //     page: 1,
  //     size: current.size,
  //   }));
  //   apiSearchItem(listParam)
  //     .then((result) => {
  //       setList(result.data.contents);
  //       setPaging(result.data.pagination);
  //     });

  // 페이지 데이터 변경
  const pageChangeHandler = (page: number) => {
    setListParam((current) => ({
      ...listParam,
      page: page,
      size: current.size,
    }));
    searchItem();
  };

  const initSearchItem = () => {
    pageChangeHandler(1);
  }

  useEffect(() => {
    searchItem();
  }, []);

  return (
    <div className="search">
      <div className="search__filter">
        <div className="search__filter__select">
          <ServerSearchSelect
            defaultValue="서버"
            options={serverList}
            value={listParam?.server_id}
            onChange={(val) => setListParam({ ...listParam, server_id: val })}
          />
          <SearchSelect
            defaultValue="클래스"
            options={classList}
            value={listParam?.class_id}
            onChange={(val) => setListParam({ ...listParam, class_id: val })}
          />
          <SearchSelect
            defaultValue="장비등급"
            options={gradeList}
            value={listParam?.grade_id}
            onChange={(val) => setListParam({ ...listParam, grade_id: val })}
          />
          <SearchSelect
            defaultValue="강화수치"
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
      <SearchGrid search_result={paging.total} list={list} />
      <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
      <ItemInfoDialog />
    </div>
  );
};

export default ItemSearch;