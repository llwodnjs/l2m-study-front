import React, { useEffect, useState } from "react";
import '@/assets/scss/input/searchinput.style.scoped.scss';

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  effect?: 'readonly' | 'disabled' | 'non';
  wd?: string;
  hi?: string;
}
function SearchInput({
  placeholder = '',
  value = '',
  onChange = () => { },
  effect = 'non',
  wd = '',
  hi = '',
}: SearchInputProps) {
  const [textValue, setTextValue] = useState(value);
  const _inlineStyle = { width: `${wd === "" ? '707px' : wd}`, height: `${hi === "" ? '96px' : hi}` }

  const _inOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  return (
    <input 
      type="text" 
      className="search-input" 
      placeholder={placeholder} 
      value={textValue} 
      onChange={_inOnChange} 
      style={_inlineStyle} 
      readOnly={effect === 'readonly'} 
      disabled={effect === 'disabled'}
    />
  );
}

export default SearchInput;