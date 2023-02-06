import "@/assets/scss/dialog/iteminfodialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const sirBlade = require("@/assets/images/sir_blade.png");
const storable = require("@/assets/images/storable.png");
const dropable = require("@/assets/images/dropable.png");
const tradeable = require("@/assets/images/tradeble.png");
const enchantable = require("@/assets/images/enchantable.png");
const likely = require("@/assets/images/likely.png");
const compare = require("@/assets/images/compare.png");
const world = require("@/assets/images/world.png");
const diamond = require("@/assets/images/diamond.png");

function ItemInfoDialog() {
  return (
    <div className="item-info-dialog">
      <div className="item-info-dialog__header">
        <span className="item-info-dialog__header__span">상세보기</span>
        <FontAwesomeIcon className="close_icon" icon={faXmark}></FontAwesomeIcon>
      </div>
      <div className="item-info-dialog__body">
        <div className="item-info-dialog__body__left">
          <div className="item-info-dialog__body__left__header">
            <img src={sirBlade} />
            <select className="item-info-dialog__body__left__header__select">
              <option>+0</option>
            </select>
            <div className="item-info-dialog__body__left__header__detail">
              <div className="item-info-dialog__body__left__header__detail__name">
                <span>시르 블레이드</span>
              </div>
              <div className="item-info-dialog__body__left__header__detail__img">
                <img src={storable} />
                |
                <img src={dropable} />
                |
                <img src={tradeable} />
                |
                <img src={enchantable} />
              </div>
            </div>
            <div className="item-info-dialog__body__left__header__like">
              <img src={likely} />
              <img src={compare} />
            </div>
          </div>
          <div className="item-info-dialog__body__left__content">
            <div className="item-info-dialog__body__left__content__header">
              <span className="item-info-dialog__body__left__content__header__text">아이템 정보</span>
            </div>
            <div className="item-info-dialog__body__left__content__info">
              <div className="item-info-dialog__body__left__content__info__category">
                <span>카테고리</span>
                <div className="item-info-dialog__body__left__content__info__category__text">
                  <span>한손검</span>
                </div>
              </div>
              <div className="item-info-dialog__body__left__content__info__category">
                <span>효과</span>
                <div className="item-info-dialog__body__left__content__info__category__text">
                  <span>무기 대미지 +24</span>
                  <span>명중 +10</span>
                  <span>근거리 치명타 +15%</span>
                  <span>더블 확률 +10%</span>
                  <span>추가 대미지 +4</span>
                  <span>스킬 대미지 증폭 +10%</span>
                  <span>무기 대미지 증폭 +12%</span>
                  <span>트리플 확률 +6%</span>
                  <span>손상 방지</span>
                </div>
              </div>
              <div className="item-info-dialog__body__left__content__info__category">
                <span>재질</span>
                <div className="item-info-dialog__body__left__content__info__category__text">
                  <span>오리하루콘</span>
                </div>
              </div>
              <div className="item-info-dialog__body__left__content__info__category">
                <span>무게</span>
                <div className="item-info-dialog__body__left__content__info__category__text">
                  <span>144</span>
                </div>
              </div>
              <div className="item-info-dialog__body__left__content__info__category">
                <span>컬렉션</span>
                <div className="item-info-dialog__body__left__content__info__category__text">
                  <span>1개</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-info-dialog__body__right">
          <div className="item-info-dialog__body__right__quote__header">
            <span>시세 정보</span>
          </div>
          <div className="item-info-dialog__body__right__quote__body">
            <div className="item-info-dialog__body__right__quote__body__server">
              <div className="item-info-dialog__body__right__quote__body__server__wrapper">
                <select>
                  <option>전체 서버</option>
                </select>
              </div>
            </div>
            <div className="item-info-dialog__body__right__quote__body__content">
              <div className="item-info-dialog__body__right__quote__body__content__row">
                <div className="item-info-dialog__body__right__quote__body__content__row__name">
                  <span>현 최저가</span>
                </div>
                <div className="item-info-dialog__body__right__quote__body__content__row__price">
                  <img src={world} />
                  <img src={diamond} />
                  <span>480</span>
                </div>
              </div>
              <div className="item-info-dialog__body__right__quote__body__content__row">
                <div className="item-info-dialog__body__right__quote__body__content__row__name">
                  <span>최저 거래가</span>
                </div>
                <div className="item-info-dialog__body__right__quote__body__content__row__price">
                  <img src={world} />
                  <img src={diamond} />
                  <span>480</span>
                </div>
              </div>
              <div className="item-info-dialog__body__right__quote__body__content__row">
                <div className="item-info-dialog__body__right__quote__body__content__row__name">
                  <span>최고 거래가</span>
                </div>
                <div className="item-info-dialog__body__right__quote__body__content__row__price">
                  <img src={world} />
                  <img src={diamond} />
                  <span>480</span>
                </div>
              </div>
              <div className="item-info-dialog__body__right__quote__body__content__row">
                <div className="item-info-dialog__body__right__quote__body__content__row__name">
                  <span>평균 거래가</span>
                </div>
                <div className="item-info-dialog__body__right__quote__body__content__row__price">
                  <img src={world} />
                  <img src={diamond} />
                  <span>480</span>
                </div>
              </div>
              <div className="item-info-dialog__body__right__quote__body__content__row">
                <div className="item-info-dialog__body__right__quote__body__content__row__name">
                  <span>마지막 거래가</span>
                </div>
                <div className="item-info-dialog__body__right__quote__body__content__row__price">
                  <img src={world} />
                  <img src={diamond} />
                  <span>480</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-info-dialog__body__right__server__header">
            <span>서버별 현 최저가 비교(가격순, 최대 10개)</span>
          </div>
          <div className="item-info-dialog__body__right__server__body">
            <div className="item-info-dialog__body__right__server__body__row">
              <div className="item-info-dialog__body__right__server__body__row__header">
                <span>1</span>
                <span>안타라스 월드</span>
              </div>
              <div className="item-info-dialog__body__right__server__body__row__price">
                <img src={world} />
                <img src={diamond} />
                <span>480</span>
              </div>
            </div>
            <div className="item-info-dialog__body__right__server__body__row">
              <div className="item-info-dialog__body__right__server__body__row__header">
                <span>2</span>
                <span>카인 01</span>
              </div>
              <div className="item-info-dialog__body__right__server__body__row__price">
                <img src={world} />
                <img src={diamond} />
                <span>510</span>
              </div>
            </div>
            <div className="item-info-dialog__body__right__server__body__row">
              <div className="item-info-dialog__body__right__server__body__row__header">
                <span>3</span>
                <span>카스티엔 월드</span>
              </div>
              <div className="item-info-dialog__body__right__server__body__row__price">
                <img src={world} />
                <img src={diamond} />
                <span>520</span>
              </div>
            </div>
            <div className="item-info-dialog__body__right__server__body__row">
              <div className="item-info-dialog__body__right__server__body__row__header">
                <span>4</span>
                <span>오필리아 월드</span>
              </div>
              <div className="item-info-dialog__body__right__server__body__row__price">
                <img src={world} />
                <img src={diamond} />
                <span>550</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemInfoDialog;