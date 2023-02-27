import Chart from 'chart.js/auto';
// import { Bar } from 'react-chartjs-2';

import "@/assets/scss/pages/favorites/favorites.style.scoped.scss";
import SearchImage from "@/components/img/SearchImage";
import SearchPaging from "@/components/paging/SearchPaging";
import { addFavoriteApi, getFavoriteListApi, getItemChartApi } from "@/resources/api/pages/favorites/Favorite.api";
import { ChartType, ChartTypeDefault, ControlFavoritesParamType, ControlFavoritesParamTypeDefault, FavoriteItemChartParamType, FavoriteItemChartParamTypeDefault, FavoriteListParamType, FavoriteListParamTypeDefault, FavoriteListType, serverNameList, ServerPriceListType } from "@/type/pages/favorite/Favorites.type";
import { enchantLevelList, SearchListParam, SearchListParamInit } from "@/type/pages/main/Main.type";
import { PagingType } from "@/type/pages/search/Search.type";
import { CategoryScale, LinearScale, BarElement } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

// const arcAngelOrb = require("@/assets/images/arcAngelOrb.png");
// const arkanaOrb = require("@/assets/images/arkanaOrb.png");
// const balakasNeck = require("@/assets/images/balakasNeck.png");
// const dragonFlameOrb = require("@/assets/images/dragonFlameOrb.png");
// const imperialPants = require("@/assets/images/imperialPants.png");
const activeFavorite = require("@/assets/images/star.png");
const disabledFavorite = require("@/assets/images/likely.png");
const searchImage = require("@/assets/images/iconSearch.png");
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
  Chart.register(CategoryScale, LinearScale, BarElement);
  const [chartParam, setChartParam] = useState<FavoriteItemChartParamType>(() => FavoriteItemChartParamTypeDefault());
  const [chartList, setChartList] = useState<number[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartType>(() => ChartTypeDefault());

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
  const itemSearch = (itemName: string, enchantLevel: number) => {
    setListParam({...listParam, search_keyword: itemName, to_enchant_level: enchantLevel, from_enchant_level: enchantLevel});
  }

  const test:number[] = [];

  const getPriceChart = () => {
    getItemChartApi(chartParam)
      .then((result) => {
        const priceList:ServerPriceListType[] = result.data.results;
        
        priceList.forEach((result) => {
          test.push(result.price);   
        })

        setChartConfig({
          data: {
            labels: serverNameList,
            datasets: [{
                label: '서버별 통계',
                data: test,
                backgroundColor: ['#06A3B0'],
                borderColor: ['#06A3B0'],
                borderWidth: 1,
            }]
            },
            option: {
                responsive: false,
          }})
      })
      .catch((error) => console.log(error));
    
    // setChartParam(() => FavoriteItemChartParamTypeDefault());
  }

  const settingChartParam = (itemId: number, itemName: string, gradeCode: string) => {
    setChartParam({
      ...chartParam,
      itemId: itemId,
      itemName: itemName,
      gradeCode: gradeCode
    })
  }

  const enchantLevelChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const level = parseInt(e.target.value);
    setChartParam({
      ...chartParam,
      enchantLevel: level
    })
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

  useEffect(() => {
    getPriceChart();
  }, [chartParam])

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
              <img className="favorites__content__list__img__itemImg" src={item.imgUrl} onClick={() => settingChartParam(item.itemId, item.itemName, item.gradeCode)} alt={'itemImg'}/>
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
      { chartConfig.data.datasets[0].data.length !== 0 && 
      <div className="chart">
        <div className="chart__header">
          <div className="chart__header__wrapper">
            <span className={chartParam.gradeCode}>{chartParam.itemName}</span>
            <select className="select-button" value={chartParam.enchantLevel} onChange={enchantLevelChangeHandler}>
              {enchantLevelList.map((obj, idx) => {
                return <option key={idx} value={obj.value}>{obj.text}</option>
              })}
            </select>
            <img src={searchImage} alt='search' onClick={() => itemSearch(chartParam.itemName, chartParam.enchantLevel)}/>
          </div>
        </div>
        <div className="chart__content">
          <Bar
            data={chartConfig.data} options={chartConfig.option}
            width="1080px" height='420px'
          />
        </div>
      </div>}
      { chartConfig.data.datasets[0].data.length === 0 && 
      <div className="chart">
        <div className="chart__none">
          <p>아이템을 클릭해서 서버별 최저가를 확인해보세요!</p>
        </div>
      </div>}
    </div>
  );
}

export default Favorites;