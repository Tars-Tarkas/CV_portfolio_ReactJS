import * as React from "react";
import { useState } from "react";
import Icon from "../Icon/Icon";
import "./Chip.scss";

const Chip: React.FC = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [valueChip, setValueChip] = useState<string[]>([]);

  const onEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setValueChip([...valueChip, value]);
      setValue("");

      //   setValueChip((prevstate) => {
      //     return [...prevstate, value];
      //   });
    }
  };
  console.log(valueChip);
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const onClick = () => {};
  return (
    <div className="chip-block">
      <input
        value={value}
        className="chip-input"
        type="text"
        onKeyDown={onEnter}
        onChange={onChange}
      />
      <div className="chip-field">
        <ul>
          {valueChip.map((item, index): any => {
            return (
              <li className="chip-field-item" key={index} onClick={onClick}>
                {item} <Icon classname="clear-btn" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Chip;
