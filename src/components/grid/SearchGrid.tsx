import { useState } from 'react';
import '@/assets/scss/grid/searchgrid.style.scoped.scss';
import { ItemCompareParamType, ItemSearchType, PagingType } from "@/type/pages/search/Search.type";
import SearchImage from "@/components/img/SearchImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");

type SearchGridProps = {
  search_result: PagingType,
  list: ItemSearchType[],
  onClickFunction?: (item_id: number, server_id: number, enchant_level: number) => void,
  checkItem?: (item_id: number, server_id: number, enchant_level: number, item_name: string) => void,
  compareParams?: ItemCompareParamType[],
  isCountColor?: boolean,
}

function SearchGrid({
  search_result,
  list,
  onClickFunction = () => { },
  checkItem = () => { },
  compareParams,
  isCountColor = false
}: SearchGridProps) {
  return (
    <div className="search__table">
      <div className="search__table__count">
        <div className={isCountColor ? 'search__table__count__color' : ''}>검색결과: {search_result?.total}건</div>
        {compareParams && <div className={"search__table__count__compareItems"}>비교대상 : {compareParams.map((item) => item.item_name + ' +' + item.enchant_level)}</div>}
      </div>
      <div className="search__table__content">
        <table className="search-table">
          <colgroup>
            <col width={"35%"} />
            <col width={"25%"} />
            <col width={"15%"} />
            <col width={"15%"} />
            <col width={"10%"} />
          </colgroup>
          <thead>
            <tr className="header-tr">
              <th>아이템 이름</th>
              <th>서버</th>
              <th>평균가</th>
              <th>최저가</th>
              <th>기능</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, idx) => {
              return <tr key={idx}>
                <td>
                  <SearchImage imgUrl={item.image} wd={'50px'} hi={'50px'} />
                  {/* <img src={item.image} /> */}
                  <span className={item.grade}>{item.item_name} + {item.enchant_level}</span>
                </td>
                <td>
                  <div className="search-table-all">
                    <span>{item.server_name}</span>
                  </div>
                </td>
                <td>
                  <div className="search-table-all-price">
                    <SearchImage imgUrl={diamondImage} wd={'24px'} hi={'20px'} />
                    <span>{item.avg_unit_price}</span>
                  </div>
                </td>
                <td>
                  <div className="search-table-all-price">
                    <SearchImage imgUrl={diamondImage} wd={'24px'} hi={'20px'} />
                    <span>{item.now_min_unit_price}</span>
                  </div>
                </td>
                <td>
                  <div className="search-table-all">
                    <SearchImage imgUrl={searchImage} wd={'27px'} hi={'27px'} itemId={item.item_id} serverId={item.server_id} enchantLevel={item.enchant_level} onClickFunction={onClickFunction} />
                    <FontAwesomeIcon className="check_icon" icon={faCheck} onClick={() => checkItem(item.item_id, item.server_id, item.enchant_level, item.item_name)}></FontAwesomeIcon>
                  </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchGrid;