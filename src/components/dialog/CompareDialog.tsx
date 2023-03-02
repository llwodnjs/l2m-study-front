import "@/assets/scss/dialog/comparedialog.style.scoped.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ItemCompareInfoType, ItemInfoType } from "@/type/pages/search/Search.type";
import SearchImage from "../img/SearchImage";

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
const disabledFavorite = require("@/assets/images/likely.png");
const activeFavorite = require("@/assets/images/star.png");

type CompareDialogProps = {
  close: React.MouseEventHandler<SVGSVGElement>
  contents: ItemCompareInfoType
  settingParam: (info: ItemInfoType) => void
}

function CompareDialog({close, contents, settingParam}: CompareDialogProps) {

  function calcCompare(firstInfoDisplay:string, SecondInfoDisplay:string):number {
    return parseInt(SecondInfoDisplay.replace(/[^0-9]/g, '')) - parseInt(firstInfoDisplay.replace(/[^0-9]/g, ''));
  }

  function settingAttribute() {
    const firstInfo = contents.itemInfos[0].options; // 기존 아이템
    const secondInfo = contents.itemInfos[1].options; // 비교대상 아이템

    const rendering = secondInfo.map((option) => {     
  
      // 이름이 다르면 신규
      if (firstInfo.filter((opt) => (option.option_name === opt.option_name)).length === 0) {
        return (<div className="compare-text">
                  <span>{option.option_name} {option.display}</span>
                  <div className="arrow-area arrow-area-up">
                    <span>신규</span>
                  </div>
                </div>);
      } else {
        // 수치가 같으면 -표시
        if (firstInfo.filter((opt) => ((option.option_name === opt.option_name) && (option.display === opt.display))).length > 0) {
          return (<div className="compare-text">
                    <span>{option.option_name} {option.display} {option.extra_display !== '' ? <span className="enchant-info">({option.extra_display})</span> : ''}</span>
                    <div className="arrow-area">
                      <span>-</span>
                    </div>
                  </div>);
        } else {
          // 수치가 다를경우 차이 표시
          if (firstInfo.filter((opt) => (option.option_name === opt.option_name) && calcCompare(opt.display, option.display) > 0).length > 0) {
            return (  
              <div className="compare-text">
                <span>{option.option_name} {option.display}</span>
                <div className="arrow-area arrow-area-up">
                  <img src={arrowUp} />
                  {/* <span>올라감</span> */}
                  {/* <span>{firstInfo.filter((opt) => opt.option_name === option.option_name).length}</span> */}
                  <span>{firstInfo.filter((opt) => calcCompare(opt.display, option.display) > 0 && opt.option_name === option.option_name)
                        .map((opt) => calcCompare(opt.display, option.display))}</span>
                </div>
              </div>
            );
          } else {
            return (  
              <div className="compare-text">
                <span>{option.option_name} {option.display}</span>
                <div className="arrow-area arrow-area-down">
                  <img src={arrowDown} />
                  <span>{firstInfo.filter((opt) => calcCompare(opt.display, option.display) < 0 && option.option_name === opt.option_name)
                        .map((opt) => calcCompare(opt.display, option.display))}</span>
                  {/* <span>{firstInfo.filter((opt) => calcCompare(opt.display, option.display) > 0 && opt.option_name === option.option_name)
                        .map((opt) => option.display)}</span> */}
                </div>
              </div>
            );
          }
        }
      }
    });

    return rendering;
  }

  return (
    <div className="compare-dialog-wrapper">
    <div className="compare-dialog">
      <div className="compare-dialog__header">
        <span className="compare-dialog__header__span">비교하기</span>
        <FontAwesomeIcon className="close_icon" icon={faXmark} onClick={close}></FontAwesomeIcon>
      </div>
      <div className="compare-dialog__body">
        <div className="compare-dialog__body__img">
          <div className="compare-dialog__body__img__left__header">
            <SearchImage imgUrl={contents.itemInfos[0].image} wd={'62px'} hi={'62px'} />
            <select className="compare-dialog__body__img__left__header__select">
              <option>{'+' + contents.itemInfos[0].enchant_level}</option>
            </select>
            <div className="compare-dialog__body__img__left__header__detail">
              <div className={"compare-dialog__body__img__left__header__detail__name__" + contents.itemInfos[0].grade}>
                <span>{contents.itemInfos[0].item_name}</span>
              </div>
              <div className="compare-dialog__body__img__left__header__detail__img">
                {contents.itemInfos[0].attribute.storable ? <img src={storable} alt="first_storable"/> : ''}
                |
                {contents.itemInfos[0].attribute.droppable ? <img src={dropable} alt="first_dropable"/> : ''}
                |
                {contents.itemInfos[0].attribute.tradeable ? <img src={tradeable} alt="first_tradeable"/> : ''}
                |
                <div className="compare-dialog__body__img__left__header__detail__img__enchan">
                  {contents.itemInfos[0].attribute.enchantable ? <img src={enchantable} alt="first_enchantable"/> : ''}
                  <span>{contents.itemInfos[0].attribute.safe_enchant_level}</span>
                </div>
              </div>
            </div>
            <div className="compare-dialog__body__img__left__header__like">
              {contents.isFavorite[0] === 'Y' ? <img src={activeFavorite} onClick={() => settingParam(contents.itemInfos[0])} alt='favorite'/> : <img src={disabledFavorite} onClick={() => settingParam(contents.itemInfos[0])} alt='favorite'/>}
            </div>
          </div>
          <div className="compare-dialog__body__img__right__header">
          <SearchImage imgUrl={contents.itemInfos[1].image} wd={'62px'} hi={'62px'} />
            <select className="compare-dialog__body__img__left__header__select">
              <option>{'+' + contents.itemInfos[1].enchant_level}</option>
            </select>
            <div className="compare-dialog__body__img__left__header__detail">
              <div className={"compare-dialog__body__img__left__header__detail__name__" + contents.itemInfos[1].grade}>
                <span>{contents.itemInfos[1].item_name}</span>
              </div>
              <div className="compare-dialog__body__img__left__header__detail__img">
                {contents.itemInfos[1].attribute.storable ? <img src={storable} alt="first_storable"/> : ''}
                |
                {contents.itemInfos[1].attribute.droppable ? <img src={dropable} alt="first_dropable"/> : ''}
                |
                {contents.itemInfos[1].attribute.tradeable ? <img src={tradeable} alt="first_tradeable"/> : ''}
                |
                <div className="compare-dialog__body__img__left__header__detail__img__enchan">
                  {contents.itemInfos[1].attribute.enchantable ? <img src={enchantable} alt="first_enchantable"/> : ''}
                  <span>{contents.itemInfos[1].attribute.safe_enchant_level}</span>
                </div>
              </div>
            </div>
            <div className="compare-dialog__body__img__left__header__like">
              {contents.isFavorite[1] === 'Y' ? <img src={activeFavorite} onClick={() => settingParam(contents.itemInfos[1])} alt='favorite'/> : <img src={disabledFavorite} onClick={() => settingParam(contents.itemInfos[1])} alt='favorite'/>}
            </div>
          </div>
        </div>
        <div className="compare-dialog__body__area">
          <div className="compare-dialog__body__area__left">
            <div className="compare-dialog__body__area__left__header">
              <span className="compare-dialog__body__area__left__header__text">아이템 정보</span>
            </div>
            <div className="compare-dialog__body__area__left__body">
                <div className="compare-dialog__body__area__left__body__wrapper">
                  <span>카테고리</span>
                  <div className="compare-dialog__body__area__left__body__wrapper__text">
                  <span>{contents.itemInfos[0].trade_category_name}</span>
                  </div>
                </div>
                <div className="compare-dialog__body__area__left__body__wrapper">
                  <span>효과</span>
                  <div className="compare-dialog__body__area__left__body__wrapper__text">
                    {contents.itemInfos[0].options.map((option) => (<span>{option.option_name} {option.display} {option.extra_display !== '' ? <span className="enchant-info">({option.extra_display})</span> : ''}</span>))}
                  </div>
                </div>
                <div className="compare-dialog__body__area__left__body__wrapper">
                  <span>재질</span>
                  <div className="compare-dialog__body__area__left__body__wrapper__text">
                    <span>{contents.itemInfos[0].attribute.material_name}</span>
                  </div>
                </div>
                <div className="compare-dialog__body__area__left__body__wrapper">
                  <span>무게</span>
                  <div className="compare-dialog__body__area__left__body__wrapper__text">
                    <span>{contents.itemInfos[0].attribute.weight / 10000}</span>
                  </div>
                </div>
                <div className="compare-dialog__body__area__left__body__wrapper">
                  <span>현 최저가</span>
                  <div className="compare-dialog__body__area__left__body__wrapper__price">
                    <SearchImage imgUrl={world} wd={'20px'} hi={'20px'}/>
                    <SearchImage imgUrl={diamond} wd={'20px'} hi={'20px'}/>
                    <span>{contents.itemPriceInfos[0].now.unit_price}</span>
                  </div>
                </div>
              </div>
          </div>
          <div className="compare-dialog__body__area__right">
            <div className="compare-dialog__body__area__right__header">
              <span className="compare-dialog__body__area__right__header__text">아이템 정보</span>
            </div>
            <div className="compare-dialog__body__area__right__body">
                <div className="compare-dialog__body__area__right__body__wrapper">
                  <span>카테고리</span>
                  <div className="compare-dialog__body__area__right__body__wrapper__text">
                  <span>{contents.itemInfos[1].trade_category_name}</span>
                  </div>
                </div>
                <div className="compare-dialog__body__area__right__body__wrapper">
                  <span>효과</span>
                  <div className="compare-dialog__body__area__right__body__wrapper__text">
                  {settingAttribute()}
                  </div>
                </div>
                <div className="compare-dialog__body__area__right__body__wrapper">
                  <span>재질</span>
                  <div className="compare-dialog__body__area__right__body__wrapper__text">
                    <span>{contents.itemInfos[1].attribute.material_name}</span>
                  </div>
                </div>
                <div className="compare-dialog__body__area__right__body__wrapper">
                  <span>무게</span>
                  <div className="compare-dialog__body__area__right__body__wrapper__text">
                    <span>{contents.itemInfos[1].attribute.weight / 10000}</span>
                  </div>
                </div>
                <div className="compare-dialog__body__area__right__body__wrapper">
                  <span>현 최저가</span>
                  <div className="compare-dialog__body__area__right__body__wrapper__price">
                    <SearchImage imgUrl={world} wd={'20px'} hi={'20px'}/>
                    <SearchImage imgUrl={diamond} wd={'20px'} hi={'20px'}/>
                    <span>{contents.itemPriceInfos[1].now.unit_price}</span>
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

export default CompareDialog;