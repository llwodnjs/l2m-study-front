// import Chart from 'chart.js/auto';
// import { Bar } from 'react-chartjs-2';

import "@/assets/scss/pages/favorites/favorites.style.scoped.scss";

const arcAngelOrb = require("@/assets/images/arcAngelOrb.png");
const arkanaOrb = require("@/assets/images/arkanaOrb.png");
const balakasNeck = require("@/assets/images/balakasNeck.png");
const dragonFlameOrb = require("@/assets/images/dragonFlameOrb.png");
const imperialPants = require("@/assets/images/imperialPants.png");
const star = require("@/assets/images/star.png");
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
  return (
    <div className="favorites">
      <div className="favorites__header">
        <span>즐겨찾기</span>
      </div>
      <div className="favorites__content">
        <div className="favorites__content__list">
          <div className="favorites__content__list__img">
            <img src={arcAngelOrb} />
            <div className="favorites__content__list__img__text">
              <img src={star} />
              <span className="hero">아크엔젤 오브</span>
            </div>
          </div>
          <img src={line} />
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
          </div>
        </div>
        <div className="favorites__content__paging">
          <div className="favorites__content__paging__area">
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