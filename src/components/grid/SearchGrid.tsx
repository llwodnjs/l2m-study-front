import { useState } from 'react';
import '@/assets/scss/grid/searchgrid.style.scoped.scss';
import { ItemSearchType } from "@/type/pages/search/Search.type";
import SearchImage from "@/components/img/SearchImage";

const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");

type SearchGridProps = {
  search_result?: number,
  list: ItemSearchType[],
}

function SearchGrid({
  search_result = 0,
  list,
}: SearchGridProps) {
  return (
    <div className="search__table">
      <div className="search__table__count">
        검색결과: {search_result}건
      </div>
      <div className="search__table__content">
        <table className="search-table">
          <colgroup>
            <col width={"40%"} />
            <col width={"30%"} />
            <col width={"15%"} />
            <col width={"15%"} />
          </colgroup>
          <thead>
            <tr className="header-tr">
              <th>아이템 이름</th>
              <th>평균가</th>
              <th>최저가</th>
              <th>기능</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, idx) => {
              return <tr key={idx}>
                <td>
                  <SearchImage imgUrl={item.image} wd={'50px'} hi={'40px'} />
                  {/* <img src={item.image} /> */}
                  <span className={item.grade}>{item.item_name}</span>
                </td>
                <td>
                  <div className="search-table-all">
                    <img src={diamondImage} />
                    <span>{item.avg_unit_price}</span>
                  </div>
                </td>
                <td>
                  <div className="search-table-all">
                    <img src={diamondImage} />
                    <span>{item.now_min_unit_price}</span>
                  </div>
                </td>
                <td>
                  <div className="search-table-all">
                    <img src={searchImage} />
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