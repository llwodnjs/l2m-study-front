import "@/assets/scss/pages/mysetting/mysetting.style.scoped.scss";
const previewImage = require("@/assets/images/previewImage.png");
const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");
const arrowBackImage = require("@/assets/images/icon_arrow_back.png");
const arrowForwardImage = require("@/assets/images/icon_arrow_forward.png");

function MySetting() {
  return (
    <div>
      <div className="my-setting-title">
        <span className="my-setting-title__text">나의 세팅</span>
      </div>
      <div className="my-setting-search">
        <input className="my-setting-search__input" placeholder="세팅명을 입력해주세요."></input>
        <button type="button" className="my-setting-search__btn">검색</button>
      </div>
      <div className="my-setting-search-result">
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
}

export default MySetting;