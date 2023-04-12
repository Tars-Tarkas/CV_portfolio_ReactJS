import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Chip.scss";

interface IChipProps {
  title: string;
  values: string[];
  removeChip: (item: any) => void;
  enterChipInput: (e: any, value: any) => void;
}

const Chip = (props: IChipProps): JSX.Element => {
  const { title, values, enterChipInput, removeChip } = props;
  const [value, setValue] = useState<string>("");

  const changeChipInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.value) {
      setValue(e.target.value);
    }
  };

  return (
    <div className="chip-block">
      <h2 className="chip-title">{title}</h2>
      <input
        value={value}
        name="chip"
        className="chip-input"
        type="text"
        onKeyDown={(e) => enterChipInput(e, value)}
        onChange={changeChipInput}
      />
      <ul className="chip-field">
        {values?.map((item: any) => {
          return (
            <li
              className="chip-field-item"
              key={item}
              onClick={() => removeChip(item)}
            >
              {item}
              <Icon
                classname="clear-btn"
                size="iconsize-xs"
                color="icons-white"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Chip.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.array,
};

Chip.defaultProps = {
  title: "Заголовок",
  values: ["React"],
};

export default Chip;
