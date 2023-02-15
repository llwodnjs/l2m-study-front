import '@/assets/scss/button/searchbutton.style.scoped.scss';

type SearchButtonProps = {
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  wd?: string;
  hi?: string;
  bg?: string;
  text?: string;
}

function SearchButton({
  onClickFunction = () => {},
  wd = '',
  hi = '',
  bg = '',
  text = '',
}: SearchButtonProps) {
  const _inlineStyle = { width: `${wd === "" ? '347px' : wd}`, height: `${hi === "" ? '99px' : hi}`, background: `${bg === '' ? '#140F4E' : bg}` };

  return (
    <button type="button" className="search-btn" onClick={onClickFunction} style={_inlineStyle}>{text}</button>
  );
}

export default SearchButton;