type SearchImageProps = {
  imgUrl?: string;
  wd?: string;
  hi?: string;
}

function SearchImage({
  imgUrl = '',
  wd = '',
  hi = ''
}: SearchImageProps) {
  const _inlineStyle = { width: `${wd === '' ? '' : wd}`, height: `${hi === '' ? '' : hi}` };
  return (
    <img src={imgUrl} alt="" style={_inlineStyle} />
  );
}

export default SearchImage;