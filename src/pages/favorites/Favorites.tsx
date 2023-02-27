// import Chart from 'chart.js/auto';
// import { Bar } from 'react-chartjs-2';

import "@/assets/scss/pages/favorites/favorites.style.scoped.scss";
import SearchImage from "@/components/img/SearchImage";
import SearchPaging from "@/components/paging/SearchPaging";
import { addFavoriteApi, getFavoriteListApi } from "@/resources/api/pages/favorites/Favorite.api";
import { ControlFavoritesParamType, ControlFavoritesParamTypeDefault, FavoriteListParamType, FavoriteListParamTypeDefault, FavoriteListType } from "@/type/pages/favorite/Favorites.type";
import { SearchListParam, SearchListParamInit } from "@/type/pages/main/Main.type";
import { PagingType } from "@/type/pages/search/Search.type";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const arcAngelOrb = require("@/assets/images/arcAngelOrb.png");
// const arkanaOrb = require("@/assets/images/arkanaOrb.png");
// const balakasNeck = require("@/assets/images/balakasNeck.png");
// const dragonFlameOrb = require("@/assets/images/dragonFlameOrb.png");
// const imperialPants = require("@/assets/images/imperialPants.png");
const activeFavorite = require("@/assets/images/star.png");
const disabledFavorite = require("@/assets/images/likely.png");
const line = require("@/assets/images/line.png");
const arrowBackImage = require("@/assets/images/icon_arrow_back.png");
const arrowForwardImage = require("@/assets/images/icon_arrow_forward.png");
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };

function Favorites() {
  const [favoriteListParam, setFavoriteListParam] = useState<FavoriteListParamType>(() => FavoriteListParamTypeDefault());
  const [favoriteList, setFavoriteList] = useState<FavoriteListType[]>([]);
  const [paging, setPaging] = useState<PagingType>({
    page: 1,
    size: 5,
    total: 0,
  });
  const [controlFavoritesParam, setControlFavoritesParam] = useState<ControlFavoritesParamType>(() => ControlFavoritesParamTypeDefault());
  const [listParam, setListParam] = useState<SearchListParam>(() => SearchListParamInit()); 
  const navigate = useNavigate();

  // 리스트 검색
  const searchFavoriteList = () => {
    getFavoriteListApi(favoriteListParam)
      .then((result) => {
        setFavoriteList(result.data.results);
        setPaging({ ...paging, page: favoriteListParam.page, size: result.data.limit, total: result.data.total });        
      })
      .catch((error) => console.log(error));
  }

  // 페이지 데이터 변경
  const pageChangeHandler = (page: number) => {
    setFavoriteListParam((current) => ({
      ...favoriteListParam,
      page: page,
      size: current.size,
    }));
  };

  // 아이템 즐겨찾기 제어 파라미터 세팅
  const settingParam = (info: FavoriteListType) => {
    if (localStorage.getItem('auth') !== null) {
      const loginUsername:string = JSON.parse(localStorage.getItem('auth') || '').username;
      setControlFavoritesParam({
        itemId: info.itemId,
        itemName: info.itemName,
        gradeCode: info.gradeCode,
        gradeName: info.gradeName,
        imgUrl: info.imgUrl,
        username: loginUsername
      })
    }
  }

  // 아이템 클릭 이벤트
  const itemSearch = (itemName: string) => {
    setListParam({...listParam, search_keyword: itemName});
  }

  useEffect(() => {
    searchFavoriteList();
  }, [favoriteListParam]);

  useEffect(() => {
    const controlFavorite = () => {
      // 비로그인 시 즐겨찾기 안됨.  
      addFavoriteApi(controlFavoritesParam)
        .then((res) => {
          if (res.data.bizStatusCode === 'E0GGG000') {
            if (res.data.results.isFavorite === 'N') {
              alert(controlFavoritesParam.itemName + ' 아이템이 즐겨찾기에서 제거되었습니다.');
              setControlFavoritesParam(() => ControlFavoritesParamTypeDefault());
            } else {
              alert(controlFavoritesParam.itemName + ' 아이템이 즐겨찾기에 저장되었습니다.');
              setControlFavoritesParam(() => ControlFavoritesParamTypeDefault());
            }

            setFavoriteListParam(() => FavoriteListParamTypeDefault());
          } else {
            alert(res.data.bizStatusMessage);
          }
        })
        .catch((err) => console.log(err));
    }
    
    if(controlFavoritesParam.itemId !== 0) controlFavorite();
  }, [controlFavoritesParam])

  useEffect(() => {
    if (listParam.search_keyword !== '') {
      navigate('/itemSearch', {
        state: listParam
      });
    }
  }, [listParam]);

  return (
    <div className="favorites">
      <div className="favorites__header">
        <span>즐겨찾기</span>
      </div>
      <div className="favorites__content">
        <div className="favorites__content__list">
          {favoriteList.map((item, idx) => {
            return (
            <div key={idx} className="favorites__content__list__img">
              <img className="favorites__content__list__img__itemImg" src={item.imgUrl} onClick={() => itemSearch(item.itemName)} alt={'itemImg'}/>
              {/* <SearchImage imgUrl={item.imgUrl} wd={'132px'} hi={'132px'}/> */}
              <div className="favorites__content__list__img__text">
                { item.isFavorite === 'Y' ? <img className='favorites__content__list__img__text__btn' src={activeFavorite} onClick={() => settingParam(item)} alt={'active'}/> 
                : <img className='favorites__content__list__img__text__btn' src={disabledFavorite} onClick={() => settingParam(item)} alt={'disable'}/>}
                <span className={item.gradeCode}>{item.itemName}</span>
              </div>
            </div>
            )
          })}
          
          {/* <img src={line} />
          <div className="favorites__content__list__img">
            <img src={arkanaOrb} />
            <div className="favorites__content__list__img__text">
              <img src={star} />
              <span className="regend">아르카나 오브</span>
            </div>
          </div>
          <img src={line} />
          <div className="favorites__content__list__img">
            <img src={balakasNeck} />
            <div className="favorites__content__list__img__text">
              <img src={star} />
              <span className="regend">발라카스의 목걸이</span>
            </div>
          </div>
          <img src={line} />
          <div className="favorites__content__list__img">
            <img src={dragonFlameOrb} />
            <div className="favorites__content__list__img__text">
              <img src={star} />
              <span className="hero">드래곤 플레임 헤드 오브</span>
            </div>
          </div>
          <img src={line} />
          <div className="favorites__content__list__img">
            <img src={imperialPants} />
            <div className="favorites__content__list__img__text">
              <img src={star} />
              <span className="regend">임페리얼 크루세이더 각반</span>
            </div>
          </div> */}
        </div>
        <SearchPaging paging={paging} pageChangeHandler={pageChangeHandler} />
      </div>
      <div className="chart">
        <div className="chart__header">
          <div className="chart__header__wrapper">
            <span>아르카나 오브</span>
            <select className="select-button">
              <option>+0</option>
            </select>
          </div>
        </div>
        <div className="chart__content">
          {/* <Bar
            options={options}
            data={data}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Favorites;