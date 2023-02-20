import { useEffect, useState } from "react";
import '@/assets/scss/input/naminginput.style.scoped.scss';

type NamingInputProps = {
  span?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  effect?: 'readonly' | 'disabled' | 'non';
  wd?: string;
  hi?: string;
}
function NamingInput({
  span = '',
  type = 'text',
  placeholder = '',
  value = '',
  onChange = () => { },
  effect = 'non',
  wd = '',
  hi = '',
}: NamingInputProps) {
  const [textValue, setTextValue] = useState(value);
  const _inlineStyle = { width: `${wd === "" ? '670px' : wd}`, height: `${hi === "" ? '79px' : hi}` }

  const _inOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  return (
    <div className="naming-input__area">
      <span className="naming-input__area__span">{span}</span>
      <input
        type={type}
        className="naming-input__area__text"
        placeholder={placeholder}
        value={textValue}
        onChange={_inOnChange}
        style={_inlineStyle}
        readOnly={effect === 'readonly'}
        disabled={effect === 'disabled'}
      />
    </div>
  );
}

export default NamingInput;