import * as React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWork, updateWork } from "../../store/PFSlice";
import "./AddWork.scss";
import Icon from "../Icon/Icon";
import Chip from "../Chip/Chip";
import { IObject } from "../../types/PFTypes";

interface IAddWork {
  title: string;
  textbtn: string;
  mode: IMode;
}
type IMode = "Add" | "Edit";

const AddWork: React.FC<IAddWork> = (props) => {
  const { title, textbtn, mode } = props;

  const dispatch = useDispatch();
  let uId = () => new Date().getTime();

  const getObj = () => {
    let initialValues = {
      id: uId(),
      title: "",
      page: "",
      linkrep: "",
      description: "",
      stack: [],
    };
    return initialValues;
  };

  const { editWorkId } = useSelector((state: any) => state.PF);

  const [obj, setObj] = useState<IObject>(getObj);
  const [valuesChip, setValuesChip] = useState<string[]>([]);

  useEffect(() => {
    switch (mode) {
      case "Edit":
        setObj(editWorkId);
        setValuesChip(editWorkId.stack);
        break;
      case "Add":
        setObj(obj);
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const addItemArray = (value: any) => {
    if (value.trim().length !== 0) {
      const newValue = [value, ...valuesChip.filter((v) => v !== value)];
      setValuesChip(newValue);
    }
  };

  const enterChipInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    item: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItemArray(item);
    }
  };

  const removeChip = (item: any) => {
    const newValue = valuesChip.filter((value) => {
      return value !== item;
    });
    setValuesChip(newValue);
  };

  const handleInputChange = (
    prop: string,
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setObj({ ...obj, [prop]: e.target.value });
  };

  const clearInput = (prop: string, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setObj({ ...obj, [prop]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (mode) {
      case "Edit":
        dispatch(
          updateWork({
            id: obj.id,
            title: obj.title,
            page: obj.page,
            linkrep: obj.linkrep,
            description: obj.description,
            stack: valuesChip,
          })
        );
        break;
      case "Add":
        dispatch(
          addWork({
            id: obj.id,
            title: obj.title,
            page: obj.page,
            linkrep: obj.linkrep,
            description: obj.description,
            stack: valuesChip,
          })
        );
        break;
      default:
        break;
    }

    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="addwork-form">
      <div className="addwork-header">
        <h2 className="addwork-header-title">{title}</h2>
      </div>
      <div className="addwork-input-block">
        <input
          type="text"
          name="title"
          className="addwork-input addwork-input-title"
          value={obj?.title || ""}
          required={true}
          placeholder="Добавить заголовок"
          onChange={(e) => handleInputChange("title", e)}
        />
        <Icon
          classname="clear-btn"
          onClick={(e) => clearInput("title", e)}
          size="iconsize-xs"
          color="icons-white"
        />
      </div>

      <div className="addwork-input-pagelink">
        <div className="addwork-input-block">
          <input
            type="text"
            name="page"
            className="addwork-input addwork-input-page"
            value={obj?.page || ""}
            placeholder="Ссылка на страницу"
            onChange={(e) => handleInputChange("page", e)}
          />
          <Icon
            classname="clear-btn"
            onClick={(e) => clearInput("page", e)}
            size="iconsize-xs"
            color="icons-white"
          />
        </div>
        <div className="addwork-input-block">
          <input
            type="text"
            name="linkrep"
            className="addwork-input"
            value={obj?.linkrep || ""}
            placeholder="Ссылка на репозитарий"
            onChange={(e) => handleInputChange("linkrep", e)}
          />
          <Icon
            classname="clear-btn"
            onClick={(e) => clearInput("linkrep", e)}
            size="iconsize-xs"
            color="icons-white"
          />
        </div>
      </div>
      <div className="addwork-input-block">
        <textarea
          name="description"
          className="addwork-textarea"
          value={obj?.description || ""}
          maxLength={150}
          required={true}
          placeholder="Добавить описание проекта (максимально 150 символов)"
          onChange={(e) => handleInputChange("description", e)}
        />
        <Icon
          classname="clear-btn"
          onClick={(e) => clearInput("description", e)}
          size="iconsize-xs"
          color="icons-white"
        />
      </div>
      <Chip
        title="Стек:"
        enterChipInput={enterChipInput}
        values={valuesChip}
        removeChip={removeChip}
      />
      <button className="addwork-btn">{textbtn}</button>
    </form>
  );
};

AddWork.propTypes = {
  title: PropTypes.string.isRequired,
  textbtn: PropTypes.string.isRequired,
  // mode: PropTypes.,
};

AddWork.defaultProps = {
  title: "text",
  textbtn: "text button",
  mode: "Add",
};
export default AddWork;
