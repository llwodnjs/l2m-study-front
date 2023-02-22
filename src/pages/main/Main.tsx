import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchSelect from "@/components/select/SearchSelect";
import ServerSearchSelect from "@/components/select/ServerSearchSelect";
import SearchInput from "@/components/input/SearchInput";
import SearchButton from "@/components/button/SearchButton";
import SearchImage from "@/components/img/SearchImage";
import "@/assets/scss/pages/main/main.style.scoped.scss";
import { SearchListParam, SearchListParamInit, serverList, classList, gradeList, enchantLevelList } from "@/type/pages/main/Main.type";
import { apiSearchItem } from "@/resources/api/pages/main/Main.api";

const logoImg = require("@/assets/images/l2m-logo.png");
const classImg = require("@/assets/images/class.png");
/**
 * 메인 화면
 * TODO (구현필요) 메인 화면 컨텐츠 구상 필요
 */
function Main() {
  const navigate = useNavigate();
  const [listParam, setListParam] = useState<SearchListParam>(() => SearchListParamInit());
  const [showItemSearch, setShowItemSearch] = useState(false);
  const [showLowPriceItemSearch, setShowLowPriceItemSearch] = useState(false);

  const pageMove = () => navigate('/itemSearch', {
    state: listParam
  });

  const lowPriceItemSearchBtnHandler = (flag: boolean) => {
    if (flag) {
      navigate("/lowPriceSearch", {
        state: {
          server_id: listParam.server_id,
          class_id: listParam.class_id,
          grade_id: listParam.grade_id,
          from_enchant_level: listParam.from_enchant_level
        }
      });
    } else {
      setShowItemSearch(flag);
      setShowLowPriceItemSearch(!flag);
    }
  }

  const showItemSearchBtnHandler = (flag: boolean) => {
    if (flag) {
      pageMove();
    } else {
      setShowLowPriceItemSearch(flag);
      setShowItemSearch(!flag);
    }
  }

  const handlerClear = () => {
    setShowItemSearch(false);
    setShowLowPriceItemSearch(false);
  }


  return (
    <div className="main">
      <div className="main__img">
        {/* <SearchImage imgUrl={logoImg} /> */}
        <img src={logoImg} onClick={handlerClear} alt="" />
      </div>
      <div className="main__search">
        {showLowPriceItemSearch &&
          <div className="main__search__select">
            <ServerSearchSelect defaultValue="서버" options={serverList} value={listParam?.server_id} onChange={(val) => setListParam({ ...listParam, server_id: val })} />
            <SearchSelect defaultValue="클래스" options={classList} value={listParam?.class_id} onChange={(val) => setListParam({ ...listParam, class_id: val })} />
            <SearchSelect defaultValue="장비등급" options={gradeList} value={listParam?.grade_id} onChange={(val) => setListParam({ ...listParam, grade_id: val })} />
            <SearchSelect defaultValue="강화수치" options={enchantLevelList} value={listParam?.from_enchant_level} onChange={(val) => setListParam({ ...listParam, from_enchant_level: parseInt(val) })} />
          </div>
        }
        {
          showItemSearch &&
          <div className="main__search__select">
            <ServerSearchSelect defaultValue="서버" options={serverList} value={listParam?.server_id} onChange={(val) => setListParam({ ...listParam, server_id: val })} />
            <SearchSelect defaultValue="최소강화수치" options={enchantLevelList} value={listParam?.from_enchant_level} onChange={(val) => setListParam({ ...listParam, from_enchant_level: parseInt(val) })} />
            <SearchSelect defaultValue="최대강화수치" options={enchantLevelList} value={listParam?.to_enchant_level} onChange={(val) => setListParam({ ...listParam, to_enchant_level: parseInt(val) })} />
          </div>
        }
        {
          (!showLowPriceItemSearch && !showItemSearch) &&
          <div className="main__search__select">
            <span className="main__search__select__text">이용하고자 하는 서비스를 선택해주세요.</span>
          </div>
        }
        {showItemSearch &&
          <div className="main__search__input">
            <SearchInput placeholder="아이템 이름을 입력해주세요." value={listParam?.search_keyword} onChange={(val) => setListParam({ ...listParam, search_keyword: val })} />
            {/* <input type={"text"} className="main__search__input__text" placeholder="아이템 이름을 입력해주세요." /> */}
          </div>
        }
        <div className="main__search__button">
          <SearchButton onClickFunction={() => lowPriceItemSearchBtnHandler(showLowPriceItemSearch)} text='최저가 세팅' />
          <SearchButton onClickFunction={() => showItemSearchBtnHandler(showItemSearch)} text='아이템 조회' bg="#8F5F44" />
        </div>
        <div className="main__search__img">
          <SearchImage imgUrl={classImg} />
        </div>
      </div>
    </div>
  );
};

export default Main;
