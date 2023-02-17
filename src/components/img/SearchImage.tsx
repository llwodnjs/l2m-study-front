import '@/assets/scss/img/searchimage.style.scoped.scss';
type SearchImageProps = {
  imgUrl?: string;
  wd?: string;
  hi?: string;
  itemId?: number;
  serverId?: number;
  enchantLevel?: number;
  onClickFunction?: (item_id: number, server_id: number, enchant_level: number) => void;
}

function SearchImage({
  imgUrl = '',
  wd = '',
  hi = '',
  itemId = 0,
  serverId = 0,
  enchantLevel = 0,
  onClickFunction = () => { },
}: SearchImageProps) {
  const _inlineStyle = { width: `${wd === '' ? '' : wd}`, height: `${hi === '' ? '' : hi}` };
  return (
    <img className='search-image' src={imgUrl} alt="" style={_inlineStyle} onClick={() => onClickFunction(itemId, serverId, enchantLevel)} />
  );
}

export default SearchImage;