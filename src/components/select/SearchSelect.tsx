import { useState } from "react";
import '@/assets/scss/select/select.style.scoped.scss';

type SelectProps = {
  value?: string | number;
  onChange?: (value: string) => void;
  options?: { text: string; value: string; selected?: boolean }[];
  defaultValue?: string;
  wd?: string;
  hi?: string;
};

function SearchSelect({
  value = '',
  onChange = () => { },
  options = [],
  defaultValue = '',
  wd = '',
  hi = '',
}: SelectProps) {
  const [textValue, setTextValue] = useState(value);

  const _inOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextValue(e.target.value);
    onChange(e.target.value);
  };

  const _inlineStyle = { width: `${wd === "" ? '167px' : wd}`, height: `${hi === "" ? '65px' : hi}` }

  return (
    <select className="select-button" onChange={_inOnChange} value={textValue} style={_inlineStyle}>
      <option value={''}>{defaultValue || '전체'}</option>
      {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.text}
          </option>
      ))}
    </select>
  );
}

export default SearchSelect;