import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWork } from "../../store/PFSlice";
import "./AddWork.scss";
import Icon from "../Icon/Icon";
import Chip from "../Chip/Chip";

interface IaddWork {
  title: string;
  textbtn: string;
}

const AddWork = (props: IaddWork): JSX.Element => {
  const { title, textbtn } = props;
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

  const [obj, setObj] = useState(getObj);

  const dispatch = useDispatch();

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

  const updateStack = (value: any) => {
    setObj({ ...obj, stack: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setObj(getObj());
    dispatch(addWork(obj));
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
          className="addwork-input addwork-input-title"
          value={obj.title || ""}
          required={true}
          placeholder="Добавить заголовок"
          onChange={(e) => handleInputChange("title", e)}
        />
        <Icon classname="clear-btn" onClick={(e) => clearInput("title", e)} />
      </div>

      <div className="addwork-input-pagelink">
        <div className="addwork-input-block">
          <input
            type="text"
            className="addwork-input addwork-input-page"
            value={obj.page || ""}
            placeholder="Ссылка на страницу"
            onChange={(e) => handleInputChange("page", e)}
          />
          <Icon classname="clear-btn" onClick={(e) => clearInput("page", e)} />
        </div>
        <div className="addwork-input-block">
          <input
            type="text"
            className="addwork-input"
            value={obj.linkrep || ""}
            placeholder="Ссылка на репозитарий"
            onChange={(e) => handleInputChange("linkrep", e)}
          />

          <Icon
            classname="clear-btn"
            onClick={(e) => clearInput("linkrep", e)}
          />
        </div>
      </div>
      <div className="addwork-input-block">
        <textarea
          className="addwork-textarea"
          value={obj.description || ""}
          maxLength={150}
          required={true}
          placeholder="Добавить описание проекта (максимально 150 символов)"
          onChange={(e) => handleInputChange("description", e)}
        />
        <Icon
          classname="clear-btn"
          onClick={(e) => clearInput("description", e)}
        />
      </div>
      <Chip title="Стек:" updateStack={updateStack} />
      <button className="addwork-btn">{textbtn}</button>
    </form>
  );
};

AddWork.propTypes = {
  title: PropTypes.string.isRequired,
  textbtn: PropTypes.string.isRequired,
};

AddWork.defaultProps = {
  title: "text",
  textbtn: "text button",
};
export default AddWork;
