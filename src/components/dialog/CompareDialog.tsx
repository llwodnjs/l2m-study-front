import "@/assets/scss/dialog/comparedialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const sirBlade = require("@/assets/images/sir_blade.png");
const arcAngelBlade = require("@/assets/images/arc_angel_blade.png");
const storable = require("@/assets/images/storable.png");
const dropable = require("@/assets/images/dropable.png");
const tradeable = require("@/assets/images/tradeble.png");
const enchantable = require("@/assets/images/enchantable.png");
const likely = require("@/assets/images/likely.png");
const compare = require("@/assets/images/compare.png");
const world = require("@/assets/images/world.png");
const diamond = require("@/assets/images/diamond.png");
const arrowUp = require("@/assets/images/arrow_up.png");
const arrowDown = require("@/assets/images/arrow_down.png");

function CompareDialog() {
  return (
    <div className="compare-dialog">
      <div className="compare-dialog__header">
        <span className="compare-dialog__header__span">비교하기</span>
        <FontAwesomeIcon className="close_icon" icon={faXmark}></FontAwesomeIcon>
      </div>
      <div className="compare-dialog__body">
        <div className="compare-dialog__body__img">
          <div className="compare-dialog__body__img__left__header">
            <img src={sirBlade} />
            <select className="compare-dialog__body__img__left__header__select">
              <option>+1</option>
            </select>
            <div className="compare-dialog__body__img__left__header__detail">
              <div className="compare-dialog__body__img__left__header__detail__name">
                <span>시르 블레이드</span>
              </div>
              <div className="compare-dialog__body__img__left__header__detail__img">
                <img src={storable} />
                |
                <img src={dropable} />
                |
                <img src={tradeable} />
                |
                <div className="compare-dialog__body__img__left__header__detail__img__enchan">
                  <img src={enchantable} />
                  <span>6</span>
                </div>
              </div>
            </div>
            <div className="compare-dialog__body__img__left__header__like">
              <img src={likely} />
              <img src={compare} />
            </div>
          </div>
          <div className="compare-dialog__body__img__right__header">
            <img src={arcAngelBlade} />
            <select className="compare-dialog__body__img__left__header__select">
              <option>+0</option>
            </select>
            <div className="compare-dialog__body__img__left__header__detail">
              <div className="compare-dialog__body__img__left__header__detail__name">
                <span>아크엔젤 블레이드</span>
              </div>
              <div className="compare-dialog__body__img__left__header__detail__img">
                <img src={storable} />
                |
                <img src={dropable} />
                |
                <img src={tradeable} />
                |
                <div className="compare-dialog__body__img__left__header__detail__img__enchan">
                  <img src={enchantable} />
                  <span>6</span>
                </div>
              </div>
            </div>
            <div className="compare-dialog__body__img__left__header__like">
              <img src={likely} />
              <img src={compare} />
            </div>
          </div>
        </div>
        <div className="compare-dialog__body__area">
          <div className="compare-dialog__body__area__content__header">
            <span className="compare-dialog__body__area__content__header__text">아이템 정보</span>
          </div>
          <div className="compare-dialog__body__area__content__header">
            <span className="compare-dialog__body__area__content__header__text">아이템 정보</span>
          </div>
        </div>
        <div className="compare-dialog__body__category">
          <div className="compare-dialog__body__category__wrapper">
            <span>카테고리</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>한손검</span>
            </div>
          </div>
          <div className="compare-dialog__body__category__wrapper">
            <span>카테고리</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>한손검</span>
            </div>
          </div>
        </div>
        <div className="compare-dialog__body__category">
          <div className="compare-dialog__body__category__wrapper">
            <span>효과</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>무기 대미지 +24</span>
              <span>명중 +10 <span className="enchant-info">(+1)</span></span>
              <span>근거리 치명타 +15%</span>
              <span>더블 확률 +10%</span>
              <span>추가 대미지 +4 <span>(+1)</span></span>
              <span>스킬 대미지 증폭 +10%</span>
              <span>무기 대미지 증폭 +12%</span>
              <span>트리플 확률 +6%</span>
              <span>손상 방지</span>
            </div>
          </div>
          <div className="compare-dialog__body__category__wrapper">
            <span>효과</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <div className="compare-text">
                <span>무기 대미지 +22</span>
                <div className="arrow-area arrow-area-down">
                  <img src={arrowDown} />
                  <span>2</span>
                </div>
              </div>
              <div className="compare-text">
                <span>명중 +9</span>
                <div className="arrow-area arrow-area-down">
                  <img src={arrowDown} />
                  <span>2</span>
                </div>
              </div>
              <div className="compare-text">
                <span>근거리 치명타 +15%</span>
                <div className="arrow-area">
                  <span>-</span>
                </div>
              </div>
              <div className="compare-text">
                <span>더블 확률 +10%</span>
                <div className="arrow-area">
                  <span>-</span>
                </div>
              </div>
              <div className="compare-text">
                <span>추가 대미지 +3</span>
                <div className="arrow-area arrow-area-down">
                  <img src={arrowDown} />
                  <span>2</span>
                </div>
              </div>
              <div className="compare-text">
                <span>디바인 퍼니쉬먼트 3%</span>
                <div className="arrow-area arrow-area-up">
                  <span>신규</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compare-dialog__body__category">
          <div className="compare-dialog__body__category__wrapper">
            <span>재질</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>오리하루콘</span>
            </div>
          </div>
          <div className="compare-dialog__body__category__wrapper">
            <span>재질</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>아다만티움</span>
            </div>
          </div>
        </div>
        <div className="compare-dialog__body__category">
          <div className="compare-dialog__body__category__wrapper">
            <span>무게</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>144</span>
            </div>
          </div>
          <div className="compare-dialog__body__category__wrapper">
            <span>무게</span>
            <div className="compare-dialog__body__category__wrapper__text">
              <span>180</span>
            </div>
          </div>
        </div>
        <div className="compare-dialog__body__category">
          <div className="compare-dialog__body__category__wrapper">
            <span>현 최저가</span>
            <div className="compare-dialog__body__category__wrapper__price">
              <img src={world} />
              <img src={diamond} />
              <span>144</span>
            </div>
          </div>
          <div className="compare-dialog__body__category__wrapper">
            <span>현 최저가</span>
            <div className="compare-dialog__body__category__wrapper__price">
              <img src={world} />
              <img src={diamond} />
              <span>180</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareDialog;