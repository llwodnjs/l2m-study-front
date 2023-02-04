import "@/assets/scss/pages/search/itemsearch.style.scoped.scss";
const itemImage = require("@/assets/images/itemImage.png");
const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");
const arrowBackImage = require("@/assets/images/icon_arrow_back.png");
const arrowForwardImage = require("@/assets/images/icon_arrow_forward.png");
function ItemSearch() {
  return (
    <div className="search">
      <div className="search__filter">
        <div className="search__filter__select">
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
        <div className="search__filter__input">
          <input placeholder="아이템명을 입력해주세요."></input>
          <button type="button">검색</button>
        </div>
      </div>
      <div className="search__table">
        <div className="search__table__count">
          검색결과: 8건
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
                <th>재련 옵션</th>
                <th>최저가</th>
                <th>기능</th>
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
                    <img src={searchImage} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="search__paging">
        <div className="search__paging__area">
          <img src={arrowBackImage} />
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <img src={arrowForwardImage} />
        </div>
      </div>
    </div>
  );
};

export default ItemSearch;