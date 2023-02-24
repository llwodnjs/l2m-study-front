import "@/assets/scss/pages/mysetting/mysetting.style.scoped.scss";
import SearchButton from "@/components/button/SearchButton";
import MySettingSearchGrid from "@/components/grid/MySettingSearchGrid";
import SearchInput from "@/components/input/SearchInput";
import SearchPaging from "@/components/paging/SearchPaging";
import { searchMySettingApi } from "@/resources/api/pages/mysetting/MySetting.api";
import { MySettingListParamType, MySettingListParamTypeDefault, MySettingListType, MySettingListTypeDefault } from "@/type/pages/mysetting/MySetting.type";
import { PagingDefault, PagingSetting, PagingType } from "@/type/pages/search/Search.type";
import { useEffect, useState } from "react";
const previewImage = require("@/assets/images/previewImage.png");
const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");
const arrowBackImage = require("@/assets/images/icon_arrow_back.png");
const arrowForwardImage = require("@/assets/images/icon_arrow_forward.png");

function MySetting() {
  const [searchParam, setSearchParam] = useState<MySettingListParamType>(MySettingListParamTypeDefault());
  const [resultList, setResultList] = useState<MySettingListType[]>(MySettingListTypeDefault());
  const [paging, setPaging] = useState<PagingType>(PagingDefault());
  
  // 리스트 검색
  const searchList = () => {
    searchMySettingApi(searchParam)
      .then((result) => {
        setResultList(result.data.results);
        setPaging(PagingSetting(result.data.offset, result.data.limit, result.data.total));
      });
  }

  // 페이지 데이터 변경
  const pageChangeHandler = (page: number) => {
    setSearchParam((current) => ({
      ...searchParam,
      page: page,
      size: current.size,
    }));
    searchList();
  };

  useEffect(() => {
    searchList();
  }, []);
  
  return (
    <div>
      <div className="my-setting-title">
        <span className="my-setting-title__text">나의 세팅</span>
      </div>
      <div className="my-setting-search">
        <SearchInput wd="760px" hi="69px" placeholder="세팅명을 입력해주세요." value={searchParam.searchKeyword} onChange={(val) => setSearchParam({...searchParam, searchKeyword: val})} />
        <SearchButton wd="110px" hi="69px" text="검색" onClickFunction={searchList} />
      </div>
      <MySettingSearchGrid list={resultList} search_result={paging} />
      {/* <div className="my-setting-search-result">
        <div className="my-setting-search-result__count">
          <span className="my-setting-search-result__count__text">검색 결과: 8건</span>
        </div>
        <div className="search-result">
          <div className="search__table">
            <div className="search__table__content">
              <table className="search-table">
                <colgroup>
                  <col width={"15%"} />
                  <col width={"55%"} />
                  <col width={"15%"} />
                  <col width={"15%"} />
                </colgroup>
                <thead>
                  <tr className="header-tr">
                    <th>미리보기</th>
                    <th>세팅명</th>
                    <th>저장시 세팅 금액</th>
                    <th>기능</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={previewImage} />
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={previewImage} />
                      
                    </td>
                    <td>
                      <div className="search-table-second">
                        <span>스증셋</span>
                        
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

                        <img src={searchImage} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
    </div>
  );
}

export default MySetting;