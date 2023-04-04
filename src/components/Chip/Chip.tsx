import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Chip.scss";

interface IchipProps {
  title: string;
  updateStack: (value: string[]) => void;
}

const Chip = (props: IchipProps): JSX.Element => {
  const { title, updateStack } = props;
  const [value, setValue] = useState<string>("");
  const [valueChip, setValueChip] = useState<string[]>([]);

  const addItemArray = (item: any) => {
    if (item.trim().length !== 0) {
      const newValue = [item, ...valueChip.filter((value) => value !== item)];
      setValueChip(newValue);
    }
  };

  const onEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
    item: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItemArray(item);
      updateStack?.([...valueChip, value]);
      setValue("");
    }
  };

  const removeItem = (item: any) => {
    const newValue = valueChip.filter((value) => {
      return value !== item;
    });
    setValueChip(newValue);
  };

  const onChange = (
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
        className="chip-input"
        type="text"
        onKeyDown={(e) => onEnter(e, value)}
        onChange={onChange}
      />
      <ul className="chip-field">
        {valueChip.map((item): any => {
          return (
            <li
              className="chip-field-item"
              key={item}
              onClick={() => removeItem(item)}
            >
              {item}
              <Icon classname="clear-btn" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Chip.propTypes = {
  title: PropTypes.string.isRequired,
  updateStack: PropTypes.func.isRequired,
};

Chip.defaultProps = {
  title: "Заголовок",
};

export default Chip;
