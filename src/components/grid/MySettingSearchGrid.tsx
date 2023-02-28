import '@/assets/scss/grid/mysettingsearchgrid.style.scoped.scss';
import { PagingType } from "@/type/pages/search/Search.type";
import SearchImage from "@/components/img/SearchImage";
import { MySettingListType } from '@/type/pages/mysetting/MySetting.type';

const diamondImage = require("@/assets/images/diamond.png");
const searchImage = require("@/assets/images/iconSearch.png");

type MySettingSearchGridProps = {
  search_result: PagingType,
  list: MySettingListType[],
  onClickFunction?: (val: string) => void,
  goSettingInfo?: (mySettingKey: string, serverId: number, classId: string, gradeId: string, fromEnchantLevel: number) => void,
}

function MySettingSearchGrid({
  search_result,
  list,
  onClickFunction = () => { },
  goSettingInfo = () => {},
}: MySettingSearchGridProps) {
  return (
    <div className="my-setting-search-result">
      <div className="my-setting-search-result__count">
        <span className="my-setting-search-result__count__text">검색 결과: {search_result.total}건</span>
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
                {
                  list.length === 0 ? 
                  <tr>
                    <td colSpan={4} className='no-item'>
                      검색된 아이템이 존재하지 않습니다.
                    </td>
                  </tr>
                  :
                  list.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td className='image-td'>
                          <img src={process.env.REACT_APP_FILE_URL + row.imageUrl} onClick={() => onClickFunction(process.env.REACT_APP_FILE_URL + row.imageUrl)} />
                          {/* <img src={previewImage} /> */}
                        </td>
                        <td>
                          <div className="search-table-second">
                            <span>{row.settingName}</span>
                          </div>
                        </td>
                        <td>
                          <div className="search-table-all">
                            <img src={diamondImage} />
                            <span>{row.totalPrice}</span>
                          </div>
                        </td>
                        <td>
                          <div className="search-table-all">
                            <SearchImage imgUrl={searchImage} wd='27px' hi='27px' onClickFunction={() => goSettingInfo(row.mySettingKey, row.serverId, row.classId, row.gradeId, row.fromEnchantLevel)} />
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySettingSearchGrid;