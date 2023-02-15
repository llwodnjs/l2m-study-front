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
  
  const pageMove = () => navigate('/itemSearch', {
    state: listParam
  });


  return (
    <div className="main">
      <div className="main__img">
        <SearchImage imgUrl={logoImg} />
        {/* <img src={logoImg} alt="" /> */}
      </div>
      <div className="main__search">
        <div className="main__search__select">
          <ServerSearchSelect defaultValue="서버" options={serverList} value={listParam?.server_id} onChange={(val) => setListParam({...listParam, server_id: val})} />
          <SearchSelect defaultValue="클래스" options={classList} value={listParam?.class_id} onChange={(val) => setListParam({...listParam, class_id: val})} />
          <SearchSelect defaultValue="장비등급" options={gradeList} value={listParam?.grade_id} onChange={(val) => setListParam({...listParam, grade_id: val})} />
          <SearchSelect defaultValue="강화수치" options={enchantLevelList} value={listParam?.from_enchant_level} onChange={(val) => setListParam({...listParam, from_enchant_level: parseInt(val)})} />
        </div>
        <div className="main__search__input">
          <SearchInput placeholder="아이템 이름을 입력해주세요." value={listParam?.search_keyword} onChange={(val) => setListParam({...listParam, search_keyword: val})} />
          {/* <input type={"text"} className="main__search__input__text" placeholder="아이템 이름을 입력해주세요." /> */}
        </div>
        <div className="main__search__button">
          <SearchButton onClickFunction={() => navigate("/lowPriceSearch")} text='최저가 세팅' />
          <SearchButton onClickFunction={pageMove} text='아이템 조회' bg="#8F5F44" />
        </div>
        <div className="main__search__img">
          <SearchImage imgUrl={classImg} />
        </div>
      </div>
    </div>
  );
};

export default Main;
