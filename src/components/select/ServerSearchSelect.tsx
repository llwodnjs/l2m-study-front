import { useState } from "react";
import '@/assets/scss/select/select.style.scoped.scss';

type ServerSelectProps = {
  value?: number;
  onChange?: (value: number) => void;
  options?: { world_name: string, world_id?: number, servers: { server_id: number, server_name: string }[] }[];
  defaultValue?: string;
  effect?: 'disabled' | 'non';
  wd?: string;
  hi?: string;
};

function ServerSearchSelect({
  value = 0,
  onChange = () => { },
  options = [],
  defaultValue = '',
  effect = 'non',
  wd = '',
  hi = '',
}: ServerSelectProps) {
  const [textValue, setTextValue] = useState(value);

  const _inOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextValue(parseInt(e.target.value));
    onChange(parseInt(e.target.value));
  };

  const _inlineStyle = { width: `${wd === "" ? '167px' : wd}`, height: `${hi === "" ? '65px' : hi}` }

  return (
    <select className="select-button" onChange={_inOnChange} value={textValue} style={_inlineStyle} disabled={effect === 'disabled'}>
      <option value={''}>{defaultValue || '전체'}</option>
      {options.map((option, idx) => (
        <optgroup key={idx} label={option.world_name}>
          {option.servers.map((server, i) => (
            <option key={i} value={server.server_id}>
              {server.server_name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

export default ServerSearchSelect;