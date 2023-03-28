import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWork } from "../../store/PFSlice";
import "./AddWork.scss";
import Icon from "../Icon/Icon";

const AddWork: React.FC = ({ title }: any): JSX.Element => {
  let uId = () => new Date().getTime();

  const getObj = () => {
    let initialValues = {
      id: uId(),
      title: "",
      page: "",
      linkrep: "",
      description: "",
      date: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setObj(getObj());
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
    dispatch(addWork(obj));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="addwork-form">
        <div className="addwork-header">
          <h2>Заголовок</h2>
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
            <Icon
              classname="clear-btn"
              onClick={(e) => clearInput("page", e)}
            />
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
            required={true}
            placeholder="Добавить описание проекта"
            onChange={(e) => handleInputChange("description", e)}
          />
          <Icon
            classname="clear-btn"
            onClick={(e) => clearInput("description", e)}
          />
        </div>

        <button className="addwork-btn">Добавить</button>
      </form>
    </div>
  );
};

export default AddWork;
