import "@/assets/scss/pages/search/lowpricesearch.style.scoped.scss";

const arrowBackImage = require("@/assets/images/icon_arrow_back_big.png");
const arrowForwardImage = require("@/assets/images/icon_arrow_forward_big.png");
const itemImage = require("@/assets/images/itemImage.png");
const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");
const changeImage = require("@/assets/images/icon_changes.png");
const equipNonActive = require("@/assets/images/equip_non_active.png");
const equipActive = require("@/assets/images/active_item_paging.png");
const accNonActive = require("@/assets/images/acc_non_active.png");
const accActive = require("@/assets/images/acc_active.png");

function LowPriceSearch() {
  return (
    <div>
      <div className="low-price-search">
        <span className="low-price-search__text">내가 원하는 클래스의 최저가를 확인해보세요.</span>
        <div className="low-price-search__select">
          <select className="select-button">
            <option>서버</option>
          </select>
          <select className="select-button">
            <option>클래스</option>
          </select>
          <select className="select-button">
            <option>장비등급</option>
          </select>
          <select className="select-button">
            <option>강화수치</option>
          </select>
        </div>
      </div>
      <div className="search-result">
        <img className="arrow-img" src={arrowBackImage} />
        <div className="search__table">
          {/* <div className="search__table__count">
            검색결과: 8건
          </div> */}
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
                  <th>재련 옵션</th>
                  <th>최저가</th>
                  <th>교체</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={itemImage} />
                    <span>아르카나 오브</span>
                  </td>
                  <td>
                    <div className="search-table-second">
                      <span>무기 데미지 증폭 100%</span>
                      <span>명중 +100</span>
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
                      <img src={changeImage} />
                      <img src={searchImage} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img className="arrow-img" src={arrowForwardImage} />
      </div>
      <div className="low-price-paging">
        {/* <img className="low-price-paging__img" src={equipNonActive}></img> */}
        <img className="low-price-paging__img" src={equipActive}></img>
        {/* <img className="low-price-paging__img" src={accActive}></img> */}
        {/* <img className="low-price-paging__img" src={accNonActive}></img> */}
      </div>
      <div className="low-price-item">
        <div className="low-price-item__total">
          <span>방어구 최저가:</span>
          <div className="low-price-item__total__price">
            <img src={diamondImage} />
            <span>95,000</span>
          </div>
        </div>
        <div className="low-price-item__setting">
          <span>세팅을 저장해보세요.</span>
          <button type="button" className="low-price-item__setting__btn">저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default LowPriceSearch;