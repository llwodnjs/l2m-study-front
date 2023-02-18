import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "@/assets/scss/dialog/iteminfodialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ItemInfoType, ItemPriceInfoType } from "@/type/pages/search/Search.type";
import { serverList, enchantLevelList } from "@/type/pages/main/Main.type";
import SearchImage from "../img/SearchImage";

const storable = require("@/assets/images/storable.png");
const dropable = require("@/assets/images/dropable.png");
const tradeable = require("@/assets/images/tradeble.png");
const enchantable = require("@/assets/images/enchantable.png");
const likely = require("@/assets/images/likely.png");
const compare = require("@/assets/images/compare.png");
const world = require("@/assets/images/world.png");
const diamond = require("@/assets/images/diamond.png");

type ItemInfoDialogProps = {
  changeEnchant: (item_id: number, server_id: number, enchant_level: number) => void,
  changeServerPrice: (item_id: number, server_id: number, enchant_level: number) => void,
  isShow: boolean,
  info: ItemInfoType,
  priceInfo: ItemPriceInfoType,
  close: React.MouseEventHandler<SVGSVGElement>,
}

function ItemInfoDialog({
  changeEnchant,
  changeServerPrice,
  isShow = false,
  info,
  priceInfo,
  close,
}: ItemInfoDialogProps) {

  // 강화수치 변경 핸들러
  const enchantLevelChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const level = parseInt(e.target.value);
    changeEnchant(info.item_id, priceInfo.server_id, level);
  }

  // 서버 시세 변경 핸들러
  const serverPriceChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const serverId = parseInt(e.target.value);
    changeServerPrice(info.item_id, serverId, info.enchant_level);
  }

  return (
    <div className={`item-info-dialog-container ${isShow ? 'item-info-dialog-container-active' : ''}`}>
      <div className='item-info-dialog'>
      <div className="item-info-dialog__header">
        <span className="item-info-dialog__header__span">상세보기</span>
        <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={close} />
      </div>
      <div className="item-info-dialog__body">
        <div className="item-info-dialog__body__header">
          <SearchImage imgUrl={info?.image} wd={'62px'} hi={'62px'} />
          <select className="item-info-dialog__body__header__select" value={info?.enchant_level} onChange={enchantLevelChangeHandler}>
            {enchantLevelList.map((obj, idx) => {
              return <option key={idx} value={obj.value}>{obj.text}</option>
            })}
          </select>
          <div className="item-info-dialog__body__header__detail">
            <div className="item-info-dialog__body__header__detail__name">
              <span className={info?.grade}>{info?.item_name}</span>
            </div>
            <div className="item-info-dialog__body__header__detail__img">
              <img src={storable} />
              |
              <img src={dropable} />
              |
              <img src={tradeable} />
              |
              <div className="item-info-dialog__body__header__detail__img__enchan">
                <img src={enchantable} />
                <span>{info?.attribute.safe_enchant_level}</span>
              </div>
            </div>
          </div>
          <div className="item-info-dialog__body__header__like">
            <img src={likely} />
            <img src={compare} />
          </div>
        </div>
        <div className="item-info-dialog__body__content">
          <div className="item-info-dialog__body__content__left">
            <div className="item-info-dialog__body__content__left__header">
              <span className="item-info-dialog__body__content__left__header__text">아이템 정보</span>
            </div>
            <div className="item-info-dialog__body__content__left__info">
              <div className="item-info-dialog__body__content__left__info__category">
                <span>카테고리</span>
                <div className="item-info-dialog__body__content__left__info__category__text">
                  <span>{info?.trade_category_name}</span>
                </div>
              </div>
              <div className="item-info-dialog__body__content__left__info__category">
                <span>효과</span>
                <div className="item-info-dialog__body__content__left__info__category__text">
                  {info?.options.map((option, index) => {
                    return <span key={index}>{option.option_name} {option.display} {option.extra_display !== '' ? <span className="enchant-info">({option.extra_display})</span> : ''}</span>
                  })}
                </div>
              </div>
              <div className="item-info-dialog__body__content__left__info__category">
                <span>재질</span>
                <div className="item-info-dialog__body__content__left__info__category__text">
                  <span>{info?.attribute.material_name}</span>
                </div>
              </div>
              <div className="item-info-dialog__body__content__left__info__category">
                <span>무게</span>
                <div className="item-info-dialog__body__content__left__info__category__text">
                  <span>{info?.attribute.weight / 10000}</span>
                </div>
              </div>
              <div className="item-info-dialog__body__content__left__info__category">
                <span>컬렉션</span>
                <div className="item-info-dialog__body__content__left__info__category__text">
                  <span>{info?.attribute.collection_count} 개</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-info-dialog__body__content__right">
            <div className="item-info-dialog__body__content__right__quote__header">
              <span className="item-info-dialog__body__content__right__quote__header__text">시세 정보</span>
            </div>
            <div className="item-info-dialog__body__content__right__quote__body">
              <div className="item-info-dialog__body__content__right__quote__body__server">
                <div className="item-info-dialog__body__content__right__quote__body__server__wrapper">
                  <select value={priceInfo.server_id} onChange={serverPriceChangeHandler}>
                    <option value={''}>전체 서버</option>
                    {serverList.map((option, idx) => (
                      <option key={idx} value={option.world_id}>{option.world_name}</option>
                    ))}
                    {
                      serverList.map((option, idx) => (
                        option.servers.map((server, i) => (
                          <option key={i} value={server.server_id}>
                            {server.server_name}
                          </option>
                        ))
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="item-info-dialog__body__content__right__quote__body__content">
                <div className="item-info-dialog__body__content__right__quote__body__content__row">
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__name">
                    <span>현 최저가</span>
                  </div>
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__price">
                    {serverList.filter((server) => server.world_id === priceInfo.server_id).length > 0 ? <img src={world} /> : ''}
                    <img src={diamond} />
                    <span>{priceInfo.now ? priceInfo.now.unit_price : 0}</span>
                  </div>
                </div>
                <div className="item-info-dialog__body__content__right__quote__body__content__row">
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__name">
                    <span>최저 거래가</span>
                  </div>
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__price">
                    {serverList.filter((server) => server.world_id === priceInfo.server_id).length > 0 ? <img src={world} /> : ''}
                    <img src={diamond} />
                    <span>{priceInfo.min ? priceInfo.min.unit_price : 0}</span>
                  </div>
                </div>
                <div className="item-info-dialog__body__content__right__quote__body__content__row">
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__name">
                    <span>최고 거래가</span>
                  </div>
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__price">
                    {serverList.filter((server) => server.world_id === priceInfo.server_id).length > 0 ? <img src={world} /> : ''}
                    <img src={diamond} />
                    <span>{priceInfo.max ? priceInfo.max.unit_price : 0}</span>
                  </div>
                </div>
                <div className="item-info-dialog__body__content__right__quote__body__content__row">
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__name">
                    <span>평균 거래가</span>
                  </div>
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__price">
                    {serverList.filter((server) => server.world_id === priceInfo.server_id).length > 0 ? <img src={world} /> : ''}
                    <img src={diamond} />
                    <span>{priceInfo.avg ? priceInfo.avg.unit_price : 0}</span>
                  </div>
                </div>
                <div className="item-info-dialog__body__content__right__quote__body__content__row">
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__name">
                    <span>마지막 거래가</span>
                  </div>
                  <div className="item-info-dialog__body__content__right__quote__body__content__row__price">
                    {serverList.filter((server) => server.world_id === priceInfo.server_id).length > 0 ? <img src={world} /> : ''}
                    <img src={diamond} />
                    <span>{priceInfo.last ? priceInfo.last.unit_price : 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ItemInfoDialog;