import { PagingType } from '@/type/pages/search/Search.type';
import '@/assets/scss/paging/searchpaging.style.scoped.scss';

type SearchPagingProps = {
  paging: PagingType,
  pageChangeHandler: (page: number) => void,
}

const arrowBackImage = require("@/assets/images/icon_arrow_back.png");
const arrowForwardImage = require("@/assets/images/icon_arrow_forward.png");

function SearchPaging({
  paging,
  pageChangeHandler,
}: SearchPagingProps) {
  const { page, size, total } = paging; // 원본 props
  const _page = page === 0 ? 1 : page; // 보정 offset (최소값 1)

  // 현재 페이지가 1페이지니?
  const isOffsetFirst = _page === 1;

  // 페이지번호 표시 갯수
  const pageRange: number = 5;

  // 토탈이 없니?
  const isTotalZero = total === 0;

  // 현재 페이지가 마지막 페이지니?
  const isOffsetLast = total <= _page * size; // 32 >= 1 . tru. 

  // 페이지 표시 상태정보
  const initPageInfo = () => {
    let start = 1;
    let end = 5;

    let pages: number = Math.ceil(total / size); // 32 / 10 = 3

    if (!pages) {
      // 0 / 0 으로 인한 NaN 등...
      return { start: 1, end: 1, pageArr: [1] };
    } else if (pages <= 5) {
      start = 1;
      end = pages;
    } else {
      // 시작값 구하기
      let _pageRangeSize: number = Math.floor(pageRange / 2);
      let preSize = _page - _pageRangeSize;
      start = preSize < 1 ? 1 : preSize;

      // 종료값 구하기
      let postSize = _page + _pageRangeSize;
      end =
        postSize > pages ? pages : postSize < pageRange ? pageRange : postSize;
    }

    const pageArr: Array<number> = [];
    for (let i = start; i <= end; i++) pageArr.push(i);
    return { start, end, pageArr };
  };

  // pages 객체가 바뀔 때마다, 동작
  const pageInfo = initPageInfo();

  // 이전 버튼 누르기: 현재 페이지가 1페이지면 아무것도 안함
  const goPrev = () => {
    if (_page > 1) {
      pageChangeHandler(_page - 1);
    } else;
  };

  // 다음 버튼 누르기: 현재 페이지가 마지막 페이지면 아무것도 안함
  const goNext = () => {
    if (!isOffsetLast) {
      pageChangeHandler(_page + 1);
    } else;
  };
  return (
    <div className="search__paging">
      <div className="search__paging__area">
        {
          isOffsetFirst ? ('') : (<img src={arrowBackImage} onClick={goPrev} />)
        }
        {pageInfo.pageArr.map((page, idx) => (
          <span key={idx} className={page === _page ? 'search__paging__area__selected' : ''} onClick={() => pageChangeHandler(page)}>{page}</span>
        ))}
        {
          isOffsetLast ? ('') : (<img src={arrowForwardImage} onClick={goNext} />)
        }
      </div>
    </div>
  );
}

export default SearchPaging;