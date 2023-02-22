import { useState, useEffect } from "react";
import { Search, useLocation } from "react-router-dom";
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
import { ItemSearchType, ItemSearchTypeDefault, ItemSearchTypeListDefault, PagingType, PagingDefault, ItemInfoType, ItemInfoTypeDefault, ItemPriceInfoType, ItemPriceInfoTypeDefault, ItemCompareParamType, ItemCompareInfoType, ItemCompareInfoTypeDefault } from "@/type/pages/search/Search.type";
import ItemChangeDialog from "@/components/dialog/ItemChangeDialog";
import CompareDialog from "@/components/dialog/CompareDialog";

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

  // 보류
  // const openCompareSearchDialog = (category: string) => {
  //   setIsShow(false);
  //   setCompareTargetOption(category);
  //   setIsShowCompareSearchDialog(true);
  // }

  // const compareSearchClose = () => {
  //   setIsShowCompareSearchDialog(false);
  // }

  // const compareDialogChangeEvent = () => {
  //   value={listParam?.search_keyword}
  //           onChange={(val) => setListParam({ ...listParam, search_keyword: val })}
  // }

  // 비교할 아이템 체크
  const checkItem = (item_id: number, server_id: number, enchant_level: number, item_name: string) => {
    // setState
    if (compareParams.length <= 1) {
        setCompareParams([
          ...compareParams,
          {
            item_id: item_id,
            server_id: server_id,
            enchant_level: enchant_level,
            item_name: item_name
          }
          ],
        )
    }
  }

  // 비교 api
  // const getCompareInfos = (params: ItemCompareParamType[]) => {
    
  //   if (compareParams.length === 2) {
  //     setCompareInfos(() => ItemCompareInfoTypeDefault());

  //     apiSearchItemInfo(params[0].item_id, params[0].enchant_level)
  //       .then((result) => {
  //         const tempData:ItemInfoType = result.data;
  //         apiSearchItemInfo(params[1].item_id, params[1].enchant_level)
  //           .then((result) => {
  //               if (result.data.trade_category_name === tempData.trade_category_name) {
  //                 apiSearchPriceInfo(params[0].item_id, params[0].server_id, params[0].enchant_level)
  //                 .then((price) => {
  //                   const tempPriceData:ItemPriceInfoType = price.data;
  //                   apiSearchPriceInfo(params[1].item_id, params[1].server_id, params[1].enchant_level)
  //                   .then((price) => {
  //                     setCompareInfos({
  //                       itemInfos: [tempData, result.data],
  //                       itemPriceInfos: [tempPriceData, price.data]
  //                     });
  //                     setIsShowCompareDialog(true);
  //                   })
  //                 })
  //               } else {
  //                 alert('카테고리가 같은 항목을 비교해주세요');
  //               }
  //           })
  //       })
  //   } 
  // }

  const closeCompareDialog = () => {
    setCompareParams([]);
    setIsShowCompareDialog(false);
  }

  useEffect(() => { 
    searchItem();
  }, []);

  useEffect(() => {
    if (compareParams.length === 2) {
      const getCompareInfos = (params: ItemCompareParamType[]) => {
        setCompareInfos(() => ItemCompareInfoTypeDefault());
  
        apiSearchItemInfo(params[0].item_id, params[0].enchant_level)
          .then((result) => {
            const tempData:ItemInfoType = result.data;
            apiSearchItemInfo(params[1].item_id, params[1].enchant_level)
              .then((result) => {
                  if (result.data.trade_category_name === tempData.trade_category_name) {
                    apiSearchPriceInfo(params[0].item_id, params[0].server_id, params[0].enchant_level)
                    .then((price) => {
                      const tempPriceData:ItemPriceInfoType = price.data;
                      apiSearchPriceInfo(params[1].item_id, params[1].server_id, params[1].enchant_level)
                      .then((price) => {
                        setCompareInfos({
                          itemInfos: [tempData, result.data],
                          itemPriceInfos: [tempPriceData, price.data]
                        });
                        setIsShowCompareDialog(true);
                      })
                    })
                  } else {
                    alert('카테고리가 같은 항목을 비교해주세요');
                    setCompareParams([]);
                  }
              })
          })
      }
    getCompareInfos(compareParams);
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
      <ItemInfoDialog changeEnchant={changeEnchant} changeServerPrice={changeServerPrice} isShow={isShow} info={itemInfo} priceInfo={itemPriceInfo} close={itemInfoClose}/>
      {isShowCompareDialog && <CompareDialog close={closeCompareDialog} contents={compareInfos}/>}
    </div>
  );
};

export default ItemSearch;