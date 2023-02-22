import { useState } from 'react';
import '@/assets/scss/grid/lowpricesearchgrid.style.scoped.scss';
import { LowPriceSearchParamType, LowPriceSearchType } from "@/type/pages/search/Search.type";
import SearchImage from "@/components/img/SearchImage";
import { ItemEnum } from '@/resources/enum/ItemEnum';

// const arrowBackImage = require("@/assets/images/icon_arrow_back_big.png");
// const arrowForwardImage = require("@/assets/images/icon_arrow_forward_big.png");
// const itemImage = require("@/assets/images/itemImage.png");
const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");
const changeImage = require("@/assets/images/icon_changes.png");

type LowPriceSearchGridProps = {
  list: LowPriceSearchType[],
  onClickFunction?: (item_id: number, itemType: string) => void,
}

function LowPriceSearchGrid({
  list = [],
  onClickFunction = () => { },
}: LowPriceSearchGridProps) {
  const itemTypeArray = new Array();
  for (const value of Object.values(ItemEnum)) {
    itemTypeArray.push({
      value: value.code,
      text: value.name
    });
  }
  return (
    <div>
      <div className="search-result">
        {/* <img className="arrow-img" src={arrowBackImage} /> */}
        <div className="search__table">
          <div className="search__table__content">
            <table className="search-table">
              <colgroup>
                <col width={"10%"} />
                <col width={"30%"} />
                <col width={"20%"} />
                <col width={"15%"} />
                <col width={"15%"} />
                <col width={"10%"} />
              </colgroup>
              <thead>
                <tr className="header-tr">
                  <th>카테고리</th>
                  <th>아이템 이름</th>
                  <th>서버</th>
                  <th>평균가</th>
                  <th>최저가</th>
                  <th>교체</th>
                </tr>
              </thead>
              <tbody>
                {itemTypeArray.map((itemType) => {
                  const row = list.filter((row) => row.tradeCategoryName === itemType.text)[0];

                  return (
                    <tr key={itemType.code}>
                      <td>
                        <span>{itemType.name}</span>
                      </td>
                      <td className='item-area'>
                        <SearchImage imgUrl={row?.image} wd='50px' hi='40px' />
                        <span className={row?.grade}>{row?.item_name} + {row?.enchant_level}</span>
                      </td>
                      <td>
                        <div className="search-table-second">
                          <span>{row?.server_name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="search-table-all">
                          <SearchImage imgUrl={diamondImage} wd='25px' hi='20px' />
                          <span>{row?.avg_unit_price}</span>
                        </div>
                      </td>
                      <td>
                        <div className="search-table-all">
                          <SearchImage imgUrl={diamondImage} wd='25px' hi='20px' />
                          <span>{row?.now_min_unit_price}</span>
                        </div>
                      </td>
                      <td>
                        <div className="search-table-all">
                          {/* <SearchImage
                            imgUrl={changeImage}
                            wd='28px'
                            hi='28px'
                            itemId={row?.item_id}
                            serverId={searchParam.server_id}
                            enchantLevel={searchParam.from_enchant_level}
                            onClickFunction={onClickFunction}
                          />
                          <SearchImage imgUrl={searchImage} wd='28px' hi='28px' /> */}
                          <img src={changeImage} onClick={() => onClickFunction(row?.item_id, itemType.code)} />
                          <img src={searchImage} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* <img className="arrow-img" src={arrowForwardImage} /> */}
      </div>
    </div >
  );
}

export default LowPriceSearchGrid;